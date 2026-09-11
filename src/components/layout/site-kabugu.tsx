import { AltBilgi } from "@/components/layout/alt-bilgi";
import { KemerTanimi } from "@/components/brand/motif";
import { Cetvel } from "@/components/ui/bolum";
import { UstMenu } from "@/components/layout/ust-menu";
import { WhatsappButonu } from "@/components/layout/whatsapp-butonu";
import { BuroVerisi } from "@/components/yapisal-veri";
import { ayarlariGetir } from "@/lib/ayarlar";
import { calismaAlanlariGetir } from "@/lib/veri";

/**
 * Site kabugu: ust menu, icerik, alt bilgi ve yapisal veri.
 *
 * Hem (site) yerlesimi hem de kok 404 sayfasi bunu kullanir. Eslesmeyen
 * adreslerde Next, rota grubunun degil kok dizinin not-found dosyasini
 * calistirir; kabuk burada olmasaydi 404 sayfasi ust menusuz ve alt
 * bilgisiz — Next'in Ingilizce varsayilan sayfasi olarak — cikardi.
 */
export async function SiteKabugu({ children }: { children: React.ReactNode }) {
  const [ayarlar, alanlar] = await Promise.all([ayarlariGetir(), calismaAlanlariGetir()]);
  const menuAlanlari = alanlar.map(({ slug, kisaBaslik }) => ({ slug, kisaBaslik }));

  return (
    <>
      <a href="#icerik" className="atlama-baglantisi">
        İçeriğe geç
      </a>

      {/* Mihrap kemeri kirpma tanimi belgede bir kez bulunur. */}
      <KemerTanimi />
      <Cetvel />

      <UstMenu
        buroAdi={ayarlar.buroAdi}
        slogan={ayarlar.slogan}
        logo={ayarlar.logo}
        telefon={ayarlar.telefonVar ? ayarlar.telefon : ""}
        telefonHref={ayarlar.telefonHref}
        telefonVar={ayarlar.telefonVar}
        eposta={ayarlar.eposta}
        alanlar={menuAlanlari}
      />

      <main id="icerik">
        {/* Yalnızca çıktıda görünen künye: kâğıda düşen sayfa kimsiz kalmasın */}
        <div className="yazdirma-kunyesi">
          {ayarlar.buroAdi} · {ayarlar.baro}
          {ayarlar.adresTekSatir ? ` · ${ayarlar.adresTekSatir}` : ""}
          <br />
          Bu belge bilgilendirme amaçlıdır; hukuki görüş niteliği taşımaz.
        </div>
        {children}
      </main>

      <AltBilgi ayarlar={ayarlar} alanlar={menuAlanlari} />
      {/* Yer tutucu numarayla calismayan bir buton gostermeyiz. */}
      {ayarlar.whatsappVar ? <WhatsappButonu adres={ayarlar.whatsappHref} /> : null}

      <BuroVerisi
        buroAdi={ayarlar.buroAdi}
        aciklama={ayarlar.seoAciklama}
        eposta={ayarlar.eposta}
        telefon={ayarlar.telefonVar ? ayarlar.telefon : ""}
        adresSatirlari={ayarlar.adresSatirlari}
        postaKodu={ayarlar.postaKodu}
        ilce={ayarlar.ilce}
        il={ayarlar.il}
        sosyal={ayarlar.sosyal.map((hesap) => hesap.adres)}
        alanBasliklari={alanlar.map((alan) => alan.baslik)}
        baro={ayarlar.baro}
      />
    </>
  );
}
