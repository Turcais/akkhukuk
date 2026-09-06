import Link from "next/link";
import { Nisan } from "@/components/brand/nisan";

/** Panel icin ortam degiskeni eksikken gosterilen yonlendirme ekrani. */
export function KurulumGerekli() {
  const adimlar = [
    {
      baslik: "Sanity projesi açın",
      metin: "sanity.io üzerinden ücretsiz bir proje oluşturun ve Project ID değerini kopyalayın.",
    },
    {
      baslik: "Ortam değişkenlerini tanımlayın",
      metin:
        "Yerelde .env.local, Vercel'de Settings → Environment Variables altına NEXT_PUBLIC_SANITY_PROJECT_ID ve SANITY_API_WRITE_TOKEN girin.",
    },
    {
      baslik: "Site adresini CORS listesine ekleyin",
      metin: "Sanity → API → CORS origins bölümüne sitenin adresini, “Allow credentials” işaretli olarak ekleyin.",
    },
  ];

  return (
    <div className="flex min-h-dvh items-center justify-center bg-koyu-zemin px-6 py-16">
      <div className="w-full max-w-xl">
        <Nisan className="h-16 w-12 text-altin-parlak" harfSinifi="text-[0.7rem] text-white" />

        <h1 className="mt-8 text-[1.9rem] text-white">Yönetim paneli henüz bağlı değil</h1>
        <p className="mt-5 leading-relaxed text-white/60">
          Panel, içerik altyapısına (Sanity) bağlandığında burada açılır. Bağlanana kadar site
          yayında kalmaya devam eder ve içeriğini kod içindeki yedekten okur — hiçbir sayfa boş kalmaz.
        </p>

        <ol className="mt-10 border-t border-white/10">
          {adimlar.map((adim, sira) => (
            <li key={adim.baslik} className="flex gap-5 border-b border-white/10 py-5">
              <span className="shrink-0 font-display text-[1.1rem] leading-none text-altin-parlak">
                {String(sira + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-[1.02rem] text-white">{adim.baslik}</h2>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-white/55">{adim.metin}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-[0.85rem] leading-relaxed text-white/40">
          Adımların tamamı depodaki <span className="text-altin-parlak/80">docs/kurulum.md</span> dosyasında
          ekran ekran anlatılıyor.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 border border-altin/50 px-6 py-3 text-[0.9rem] text-altin-parlak transition-colors hover:bg-altin/10"
        >
          Siteye dön
        </Link>
      </div>
    </div>
  );
}
