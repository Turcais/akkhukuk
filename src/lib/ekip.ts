/**
 * Ekip profillerinin yerel yedegi.
 *
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │ YAYINDAN ONCE DOGRULANACAK ALANLAR                                  │
 * │ Asagidaki bilgiler kamuya acik kaynaklardan derlenmis taslaklardir. │
 * │ Bir avukatlik burosunun sitesinde yer alan ozgecmis bilgileri       │
 * │ dogrulanmadan yayimlanamaz. Her profil icin sunlar teyit edilmeli:  │
 * │   • baro sicil bilgisi ve kayit yili                                │
 * │   • lisans / yuksek lisans kurumlari ve mezuniyet yillari           │
 * │   • uyelikler, sertifikalar, yabanci diller                         │
 * │   • iletisim adresleri ve fotograflar                               │
 * │ Teyit sonrasi tum bu alanlar yonetim panelinden guncellenir;        │
 * │ bu dosyaya dokunmaya gerek yoktur.                                  │
 * │                                                                     │
 * │ Not: TBB Reklam Yasagi Yonetmeligi m.9 uyarinca avukatin siyasi     │
 * │ gorev ve kimligi mesleki tanitimda kullanilamaz. Bu nedenle siyasi  │
 * │ gorevlere burada yer verilmemistir.                                 │
 * └─────────────────────────────────────────────────────────────────────┘
 */

export type EkipUyesi = {
  slug: string;
  ad: string;
  unvan: string;
  /** public/ekip altindaki fotograf; yoksa monogram gosterilir */
  gorsel?: string;
  /** Kartlarda gorunen tek cumle */
  kisaTanitim: string;
  /** Profil sayfasindaki biyografi paragraflari */
  biyografi: string[];
  /** calisma-alanlari.ts icindeki slug degerleri */
  uzmanlikAlanlari: string[];
  egitim: string[];
  uyelikler: string[];
  diller: string[];
  eposta?: string;
  linkedin?: string;
  sira: number;
};

export const ekip: EkipUyesi[] = [
  {
    slug: "ali-kaan-kilicoglu",
    ad: "Av. Ali Kaan KILIÇOĞLU",
    unvan: "Kurucu Avukat",
    kisaTanitim:
      "Şirketler, vakıflar ve dernekler hukuku ile sürekli hukuki danışmanlık alanlarında çalışıyor.",
    biyografi: [
      "Av. Ali Kaan Kılıçoğlu, AKK Hukuk ve Danışmanlık'ın kurucusudur. Ankara 2 No'lu Barosu'na kayıtlı olarak avukatlık mesleğini sürdürmektedir.",
      "Mesleki çalışmalarını ağırlıklı olarak tüzel kişilerin hukuku üzerinde yoğunlaştırmıştır. Şirketlerin kuruluş ve yapılandırma süreçleri, ortaklık ilişkilerinin sözleşmeye bağlanması, vakıf ve derneklerin kuruluşu ile denetim yükümlülükleri ve bu kuruluşların iktisadi işletmeleri, düzenli olarak takip ettiği başlıklardır.",
      "Lisansüstü eğitimini Selçuk Üniversitesi Siyaset Bilimi ve Uluslararası İlişkiler alanında tamamlamıştır. Hukuk ve kamu yönetimi kesişimindeki konularda yazıları bulunmaktadır.",
      "Danışmanlık anlayışını, uyuşmazlık doğduktan sonra müdahale etmek yerine kurumun karar alma anında hukukçuyla birlikte hareket etmesi üzerine kurar. Müvekkil kurumlarla çalışırken önceliği, sürecin her aşamasının belgelenmesi ve ileride bir denetime ya da yargılamaya konu olduğunda arkasında durulabilir olmasıdır.",
    ],
    uzmanlikAlanlari: [
      "sirketler-ve-ticaret-hukuku",
      "vakiflar-ve-dernekler-hukuku",
      "sozlesmeler-hukuku",
      "surekli-hukuki-danismanlik",
      "idare-ve-vergi-hukuku",
    ],
    egitim: [
      "Yüksek Lisans — Siyaset Bilimi ve Uluslararası İlişkiler, Selçuk Üniversitesi",
      "Lisans — Hukuk Fakültesi",
    ],
    uyelikler: ["Ankara 2 No'lu Barosu"],
    diller: ["Türkçe", "İngilizce"],
    sira: 1,
  },
  {
    slug: "atakan-demirkan",
    ad: "Av. Atakan DEMİRKAN",
    unvan: "Avukat",
    kisaTanitim:
      "Uyuşmazlık çözümü, iş hukuku ve icra takibi dosyalarında dava ve takip süreçlerini yürütüyor.",
    biyografi: [
      "Av. Atakan Demirkan, AKK Hukuk ve Danışmanlık bünyesinde dava ve icra takibi süreçlerini yürütmektedir.",
      "Çalışmaları ağırlıklı olarak uyuşmazlık çözümü üzerinde yoğunlaşır: iş hukukundan doğan alacak ve işe iade davaları, ticari alacakların icra yoluyla takibi, gayrimenkul kaynaklı uyuşmazlıklar ve ceza yargılamasında müdafilik ile mağdur vekilliği görevlerini üstlenir.",
      "Mesleki faaliyetinin yanında hukuk öğrencileri ve gençlere yönelik kariyer etkinliklerine konuşmacı olarak katılmakta, avukatlık mesleğinin sorumlulukları üzerine sunumlar yapmaktadır.",
      "Dosya yürütme yaklaşımında müvekkilin süreci anlayarak takip etmesine öncelik verir; her aşamada atılan adımın nedenini ve sonraki adımın ne olduğunu müvekkile açık bir dille aktarır.",
    ],
    uzmanlikAlanlari: [
      "is-ve-sosyal-guvenlik-hukuku",
      "icra-iflas-ve-alacak-tahsili",
      "gayrimenkul-ve-insaat-hukuku",
      "ceza-hukuku",
      "aile-ve-miras-hukuku",
    ],
    egitim: ["Lisans — Hukuk Fakültesi"],
    uyelikler: ["Ankara Barosu"],
    diller: ["Türkçe", "İngilizce"],
    sira: 2,
  },
];

export function ekipUyesiBul(slug: string) {
  return ekip.find((uye) => uye.slug === slug) ?? null;
}

/** Ad soyaddan monogram uretir: "Av. Ali Kaan KILIÇOĞLU" -> "AK" */
export function monogram(ad: string) {
  const temiz = ad.replace(/^Av\.\s*/i, "").trim();
  const parcalar = temiz.split(/\s+/).filter(Boolean);
  if (parcalar.length === 0) return "AKK";
  const ilk = parcalar[0]?.[0] ?? "";
  const son = parcalar.length > 1 ? (parcalar[parcalar.length - 1]?.[0] ?? "") : "";
  return (ilk + son).toLocaleUpperCase("tr-TR");
}
