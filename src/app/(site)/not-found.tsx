import Link from "next/link";
import { Motif } from "@/components/brand/motif";
import { ButonBaglanti } from "@/components/ui/buton";
import { Kapsayici } from "@/components/ui/bolum";
import { anaMenu } from "@/lib/site";

export default function Bulunamadi() {
  return (
    <div className="doku-kagit">
      <Kapsayici className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-[4.5rem] leading-none text-altin/40">404</p>
        <Motif className="mt-6 w-40" />
        <h1 className="mt-8 text-[2rem] sm:text-[2.4rem]">Aradığınız sayfa bulunamadı</h1>
        <p className="mt-5 max-w-md leading-relaxed text-metin-soluk">
          Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Aşağıdaki bölümlerden devam edebilirsiniz.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButonBaglanti href="/">Ana sayfaya dön</ButonBaglanti>
          <ButonBaglanti href="/iletisim" gorunum="cizgili">
            Bize yazın
          </ButonBaglanti>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.88rem]">
          {anaMenu.map((oge) => (
            <li key={oge.adres}>
              <Link href={oge.adres} className="text-metin-soluk transition-colors hover:text-kirmizi">
                {oge.baslik}
              </Link>
            </li>
          ))}
        </ul>
      </Kapsayici>
    </div>
  );
}
