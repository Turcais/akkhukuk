import { AltBilgi } from "@/components/layout/alt-bilgi";
import { UstMenu } from "@/components/layout/ust-menu";
import { WhatsappButonu } from "@/components/layout/whatsapp-butonu";
import { BuroVerisi } from "@/components/yapisal-veri";
import { ayarlariGetir } from "@/lib/ayarlar";
import { calismaAlanlariGetir } from "@/lib/veri";

/** Site kabugu: ust menu, icerik, alt bilgi ve yapisal veri. */
export default async function SiteYerlesimi({ children }: { children: React.ReactNode }) {
  const [ayarlar, alanlar] = await Promise.all([ayarlariGetir(), calismaAlanlariGetir()]);
  const menuAlanlari = alanlar.map(({ slug, kisaBaslik }) => ({ slug, kisaBaslik }));

  return (
    <>
      <a href="#icerik" className="atlama-baglantisi">
        İçeriğe geç
      </a>

      <UstMenu
        buroAdi={ayarlar.buroAdi}
        slogan={ayarlar.slogan}
        logo={ayarlar.logo}
        telefon={ayarlar.telefon}
        telefonHref={ayarlar.telefonHref}
        eposta={ayarlar.eposta}
        alanlar={menuAlanlari}
      />

      <main id="icerik">{children}</main>

      <AltBilgi ayarlar={ayarlar} alanlar={menuAlanlari} />
      <WhatsappButonu adres={ayarlar.whatsappHref} />

      <BuroVerisi
        buroAdi={ayarlar.buroAdi}
        aciklama={ayarlar.seoAciklama}
        eposta={ayarlar.eposta}
        telefon={ayarlar.telefon}
        adresSatirlari={ayarlar.adresSatirlari}
        sosyal={ayarlar.sosyal.map((hesap) => hesap.adres)}
        alanBasliklari={alanlar.map((alan) => alan.baslik)}
      />
    </>
  );
}
