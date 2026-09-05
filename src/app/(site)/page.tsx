import { Alanlar } from "@/components/anasayfa/alanlar";
import { Cagri } from "@/components/anasayfa/cagri";
import { Giris } from "@/components/anasayfa/giris";
import { GuvenSeridi } from "@/components/anasayfa/guven-seridi";
import { Tanitim } from "@/components/anasayfa/tanitim";
import { Yontem } from "@/components/anasayfa/yontem";
import { EkipKarti } from "@/components/ekip-karti";
import { YaziKarti } from "@/components/yazi-karti";
import { Bolum, BolumBasligi, IzgaraDolgusu } from "@/components/ui/bolum";
import { ButonBaglanti } from "@/components/ui/buton";
import { ayarlariGetir } from "@/lib/ayarlar";
import { anaSayfa } from "@/lib/icerik";
import { calismaAlanlariGetir, ekipGetir, sayfaMetniGetir, sec, yazilarGetir } from "@/lib/veri";

export const revalidate = 300;

/**
 * Ana sayfa.
 *
 * Her bolumun basligi ve metni yonetim panelindeki "Sayfa Metinleri"
 * bolumunden gelir; panelde karsiligi yoksa src/lib/icerik.ts icindeki
 * varsayilan kullanilir.
 */
export default async function AnaSayfa() {
  const [ayarlar, alanlar, ekip, yazilar, hero, guven, tanitim, alanBaslik, yontem, ekipBaslik, yayinBaslik, cagri] =
    await Promise.all([
      ayarlariGetir(),
      calismaAlanlariGetir(),
      ekipGetir(),
      yazilarGetir(),
      sayfaMetniGetir("anasayfa-hero"),
      sayfaMetniGetir("anasayfa-guven"),
      sayfaMetniGetir("anasayfa-tanitim"),
      sayfaMetniGetir("anasayfa-alanlar"),
      sayfaMetniGetir("anasayfa-yontem"),
      sayfaMetniGetir("anasayfa-ekip"),
      sayfaMetniGetir("anasayfa-yayinlar"),
      sayfaMetniGetir("anasayfa-cagri"),
    ]);

  const guvenMaddeleri = sec(
    guven.maddeler?.map((madde) => ({ baslik: madde.baslik ?? "", metin: madde.metin ?? "" })),
    anaSayfa.guvenSeridi.map((madde) => ({ baslik: madde.deger, metin: madde.etiket })),
  );

  const tanitimMaddeleri = sec(
    tanitim.maddeler?.map((madde) => ({ baslik: madde.baslik ?? "", metin: madde.metin ?? "" })),
    anaSayfa.tanitim.maddeler,
  );

  const yontemAdimlari = sec(
    yontem.maddeler?.map((madde, sira) => ({
      etiket: madde.etiket ?? String(sira + 1).padStart(2, "0"),
      baslik: madde.baslik ?? "",
      metin: madde.metin ?? "",
    })),
    anaSayfa.yontem.adimlar.map((adim) => ({ etiket: adim.numara, baslik: adim.baslik, metin: adim.metin })),
  );

  return (
    <>
      <Giris
        ustBaslik={sec(hero.ustBaslik, anaSayfa.hero.ustBaslik)}
        baslik={sec(hero.baslik, anaSayfa.hero.baslik)}
        altBaslik={sec(hero.altBaslik, anaSayfa.hero.altBaslik)}
        birinciButon={{
          metin: sec(hero.birinciButonMetni, anaSayfa.hero.birinciButon.metin),
          adres: sec(hero.birinciButonAdresi, anaSayfa.hero.birinciButon.adres),
        }}
        ikinciButon={{
          metin: sec(hero.ikinciButonMetni, anaSayfa.hero.ikinciButon.metin),
          adres: sec(hero.ikinciButonAdresi, anaSayfa.hero.ikinciButon.adres),
        }}
        baro={ayarlar.baro}
      />

      <GuvenSeridi maddeler={guvenMaddeleri} />

      <Tanitim
        ustBaslik={sec(tanitim.ustBaslik, anaSayfa.tanitim.ustBaslik)}
        baslik={sec(tanitim.baslik, anaSayfa.tanitim.baslik)}
        paragraflar={sec(tanitim.paragraflar, anaSayfa.tanitim.paragraflar)}
        maddeler={tanitimMaddeleri}
      />

      <Alanlar
        ustBaslik={sec(alanBaslik.ustBaslik, anaSayfa.alanlarBolumu.ustBaslik)}
        baslik={sec(alanBaslik.baslik, anaSayfa.alanlarBolumu.baslik)}
        aciklama={sec(alanBaslik.altBaslik, anaSayfa.alanlarBolumu.aciklama)}
        alanlar={alanlar}
      />

      <Yontem
        ustBaslik={sec(yontem.ustBaslik, anaSayfa.yontem.ustBaslik)}
        baslik={sec(yontem.baslik, anaSayfa.yontem.baslik)}
        adimlar={yontemAdimlari}
      />

      {ekip.length > 0 ? (
        <Bolum className="border-y border-cizgi bg-kagit-koyu/40">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <BolumBasligi
              ustBaslik={sec(ekipBaslik.ustBaslik, anaSayfa.ekipBolumu.ustBaslik)}
              baslik={sec(ekipBaslik.baslik, anaSayfa.ekipBolumu.baslik)}
              aciklama={sec(ekipBaslik.altBaslik, anaSayfa.ekipBolumu.aciklama)}
            />
            <ButonBaglanti href="/ekibimiz" gorunum="cizgili" className="shrink-0">
              Ekibin tamamı
            </ButonBaglanti>
          </div>

          <div className="mt-14 grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2 lg:grid-cols-3">
            {ekip.slice(0, 3).map((uye) => (
              <EkipKarti key={uye.slug} uye={uye} />
            ))}
            <IzgaraDolgusu adet={Math.min(ekip.length, 3)} />
          </div>
        </Bolum>
      ) : null}

      {yazilar.length > 0 ? (
        <Bolum>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <BolumBasligi
              ustBaslik={sec(yayinBaslik.ustBaslik, anaSayfa.yayinBolumu.ustBaslik)}
              baslik={sec(yayinBaslik.baslik, anaSayfa.yayinBolumu.baslik)}
              aciklama={sec(yayinBaslik.altBaslik, anaSayfa.yayinBolumu.aciklama)}
            />
            <ButonBaglanti href="/yayinlar" gorunum="cizgili" className="shrink-0">
              Tüm yazılar
            </ButonBaglanti>
          </div>

          <div className="mt-14 grid gap-px border border-cizgi bg-cizgi sm:grid-cols-2 lg:grid-cols-3">
            {yazilar.slice(0, 3).map((yazi) => (
              <YaziKarti key={yazi.slug} yazi={yazi} />
            ))}
            <IzgaraDolgusu adet={Math.min(yazilar.length, 3)} />
          </div>
        </Bolum>
      ) : null}

      <Cagri
        baslik={sec(cagri.baslik, anaSayfa.cagri.baslik)}
        metin={sec(cagri.altBaslik, anaSayfa.cagri.metin)}
        butonMetni={sec(cagri.birinciButonMetni, anaSayfa.cagri.butonMetni)}
        telefon={ayarlar.telefon}
        telefonHref={ayarlar.telefonHref}
      />
    </>
  );
}
