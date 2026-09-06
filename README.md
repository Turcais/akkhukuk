# AKK Hukuk ve Danışmanlık

Ankara'da faaliyet gösteren avukatlık ve hukuki danışmanlık bürosunun kurumsal internet sitesi.

## Teknoloji

| Katman | Seçim |
|---|---|
| Çatı | Next.js 16 (App Router) + TypeScript |
| Stil | Tailwind CSS v4 |
| İçerik yönetimi | Sanity — `/studio` adresinde gömülü panel |
| Form e-postası | Resend |
| Barındırma | Vercel |

## Geliştirme

```bash
npm install
cp .env.example .env.local   # değerleri doldurun
npm run dev
```

- Site: http://localhost:3000
- Yönetim paneli: http://localhost:3000/studio

Ortam değişkenlerinin nasıl alınacağı [docs/kurulum.md](docs/kurulum.md) içinde adım adım anlatılıyor.

## Sayfalar

Ana Sayfa · Hakkımızda · Çalışma Alanlarımız (+12 alt sayfa) · Ekibimiz (+kişi sayfaları) ·
Yayınlar (+yazı sayfaları) · Sıkça Sorulan Sorular · İletişim ·
Yasal Uyarı · KVKK Aydınlatma Metni · Gizlilik Politikası · Çerez Politikası

## İçerik mimarisi

Site, yönetim paneli kurulmadan da eksiksiz çalışır: her içerik türünün
`src/lib/` altında yerel bir karşılığı vardır. Panel kurulduğunda içerik
otomatik olarak panelden okunur, panelde boş bırakılan alanlar yerel
varsayılana düşer. Panel geçici olarak erişilemezse site ayakta kalır.

| İçerik | Yerel kaynak | Panel belgesi |
|---|---|---|
| Büro bilgileri | `src/lib/site.ts`, `src/lib/ayarlar.ts` | Site Ayarları |
| Sayfa başlıkları ve metinleri | `src/lib/icerik.ts` | Sayfa Metinleri |
| Çalışma alanları | `src/lib/calisma-alanlari.ts` | Çalışma Alanları |
| Ekip | `src/lib/ekip.ts` | Ekip |
| Yayınlar | `src/lib/yazilar.ts` | Yayınlar |
| Sıkça sorulan sorular | `src/lib/icerik.ts` | Sıkça Sorulan Sorular |
| Kurumsal metinler | `src/lib/yasal-metinler.ts` | Kurumsal Metinler |

## Belgeler

- [docs/kurulum.md](docs/kurulum.md) — Sanity, Resend ve Vercel kurulumu
- [docs/yonetim-paneli.md](docs/yonetim-paneli.md) — panelin günlük kullanımı
- [docs/yayin-oncesi-kontrol-listesi.md](docs/yayin-oncesi-kontrol-listesi.md) — yayına almadan önce yapılacaklar
- [docs/seo.md](docs/seo.md) — arama motoru stratejisi ve yapılanlar
- [docs/marka.md](docs/marka.md) — renk, tipografi ve motif sistemi
- [docs/mevzuat.md](docs/mevzuat.md) — avukatlık reklam yasağı çerçevesinde site kuralları

## Tema

Aydınlık ve karanlık tema. Varsayılan, ziyaretçinin işletim sistemi
tercihidir; üst menüdeki anahtar bunu geçersiz kılar ve seçim tarayıcıda
saklanır. Renk sistemi tamamen CSS değişkenleri üzerinden kurulu olduğu
için tema değişimi tek bir sınıfla (`.karanlik`) gerçekleşir.

## Erişilebilirlik

- İki temada da WCAG 2.2 AA kontrast hedefi
- Klavye navigasyonu ve görünür odak halkası
- Her sayfada "İçeriğe geç" atlama bağlantısı
- `prefers-reduced-motion` desteği
- Gövde metinlerinde 68 karakterlik okuma genişliği

## Komutlar

```bash
npm run dev     # geliştirme sunucusu
npm run build   # üretim derlemesi
npm run lint    # kod denetimi
```
