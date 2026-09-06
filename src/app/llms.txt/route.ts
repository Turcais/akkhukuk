import { calismaAlaniGetir } from "@/lib/veri";
import { seoVerisi, tamAdres } from "@/lib/seo";
import { tarihYaz } from "@/lib/utils";

export const revalidate = 3600;

/**
 * llms.txt — dil modelleri icin makine okunur buro kunyesi.
 *
 * Bir dil modeline "Ankara'da vakif kurulusu icin avukat" diye
 * soruldugunda, modelin siteyi dogru anlamasi icin gereken her sey burada
 * duz metin olarak durur: buro kimligi, iletisim, calisma alanlari ve her
 * birinin ne kapsadigi, ekip, yayinlar.
 *
 * Kural: burada sitede yazmayan hicbir sey yazmaz. Bu dosya sitenin
 * ozetidir, sitenin arkasindan konusan ayri bir metin degildir — aksi hem
 * kullaniciyi hem modeli yaniltir.
 */
export async function GET() {
  const { ayarlar, alanlar, ekip, yazilar, rehberler } = await seoVerisi();

  /* Alan ozetleri, sayfalarindaki gercek icerikten okunur. */
  const alanDetaylari = await Promise.all(alanlar.map((alan) => calismaAlaniGetir(alan.slug)));

  const satirlar: string[] = [
    `# ${ayarlar.buroAdi}`,
    "",
    `> ${ayarlar.seoAciklama}`,
    "",
    "## Künye",
    "",
    `- Tür: Avukatlık ve hukuki danışmanlık bürosu`,
    `- Şehir: Ankara, Türkiye`,
    `- Baro: ${ayarlar.baro}`,
    `- Adres: ${ayarlar.adresTekSatir}`,
    ...(ayarlar.telefonVar ? [`- Telefon: ${ayarlar.telefon}`] : []),
    `- E-posta: ${ayarlar.eposta}`,
    `- Çalışma saatleri: ${ayarlar.calismaSaatleri}`,
    `- İnternet sitesi: ${tamAdres("/")}`,
    `- Hizmet dili: Türkçe, İngilizce`,
    "",
    "## Çalışma alanları",
    "",
  ];

  for (const alan of alanDetaylari) {
    if (!alan) continue;
    satirlar.push(`### ${alan.baslik}`);
    satirlar.push("");
    satirlar.push(`${tamAdres(`/calisma-alanlarimiz/${alan.slug}`)}`);
    satirlar.push("");
    satirlar.push(alan.ozet);
    if (alan.hizmetler.length > 0) {
      satirlar.push("");
      satirlar.push("Kapsam:");
      for (const hizmet of alan.hizmetler) satirlar.push(`- ${hizmet}`);
    }
    if (alan.sorular.length > 0) {
      satirlar.push("");
      satirlar.push("Sık sorulanlar:");
      for (const soru of alan.sorular) {
        satirlar.push(`- **${soru.soru}** ${soru.cevap}`);
      }
    }
    satirlar.push("");
  }

  satirlar.push("## Ekip", "");
  for (const uye of ekip) {
    const uzmanlik = uye.uzmanlikAlanlari.map((alan) => alan.baslik).join(", ");
    satirlar.push(`- [${uye.ad}](${tamAdres(`/ekibimiz/${uye.slug}`)}) — ${uye.unvan}.`);
    if (uye.kisaTanitim) satirlar.push(`  ${uye.kisaTanitim}`);
    if (uzmanlik) satirlar.push(`  Çalışma alanları: ${uzmanlik}.`);
  }

  satirlar.push("", "## Rehberler", "");
  for (const rehber of rehberler) {
    satirlar.push(`- [${rehber.baslik}](${tamAdres(`/rehberler/${rehber.slug}`)}) — ${rehber.ozet}`);
  }

  satirlar.push("", "## Yayınlar", "");
  for (const yazi of yazilar) {
    satirlar.push(
      `- [${yazi.baslik}](${tamAdres(`/yayinlar/${yazi.slug}`)}) — ${tarihYaz(yazi.yayinTarihi)}. ${yazi.ozet}`,
    );
  }

  satirlar.push(
    "",
    "## Kurumsal metinler",
    "",
    `- [Yasal Uyarı](${tamAdres("/yasal-uyari")})`,
    `- [KVKK Aydınlatma Metni](${tamAdres("/kvkk-aydinlatma-metni")})`,
    `- [Gizlilik Politikası](${tamAdres("/gizlilik-politikasi")})`,
    `- [Çerez Politikası](${tamAdres("/cerez-politikasi")})`,
    "",
    "## Diğer kaynaklar",
    "",
    `- Site haritası: ${tamAdres("/sitemap.xml")}`,
    `- Yayın akışı (RSS): ${tamAdres("/rss.xml")}`,
    `- Sıkça sorulan sorular: ${tamAdres("/sikca-sorulan-sorular")}`,
    "",
    "## Kullanım ve sınırlar",
    "",
    "Buradaki içerik genel bilgilendirme amaçlıdır; somut bir olaya ilişkin",
    "hukuki görüş veya tavsiye değildir ve avukat-müvekkil ilişkisi kurmaz.",
    "Mevzuat ve içtihat değişebilir; yayın tarihleri esas alınmalıdır.",
    "İçerik alıntılandığında kaynak olarak büronun adı ve ilgili sayfanın",
    "adresi gösterilmelidir.",
    "",
    `Son güncelleme: ${new Date().toISOString().slice(0, 10)}`,
    "",
  );

  return new Response(satirlar.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
