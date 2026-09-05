# Arama motoru stratejisi

Hedef: "ankara şirketler hukuku avukatı", "vakıf kuruluşu avukat",
"dernek tüzüğü avukat", "işe iade davası avukat ankara" gibi **niyet
taşıyan** aramalarda ilk sayfada görünmek.

Bu hedefe giden yol, sayfa sayısını şişirmek değil; her sayfanın tek bir
soruya eksiksiz cevap vermesidir. Aşağıda sitede uygulanmış olanlar ve
yayın sonrasında yapılması gerekenler ayrı ayrı listelenmiştir.

## Sitede uygulananlar

### Teknik temel
- Next.js App Router ile sunucu tarafında üretilen statik sayfalar
  (`generateStaticParams` ile tüm alan, ekip ve yazı sayfaları önceden
  derlenir) — Core Web Vitals için en hızlı zemin
- `next/font` ile yerel barındırılan yazı tipleri (harici font isteği yok)
- AVIF/WebP görsel dönüşümü, `next/image` ile boyut ve `sizes` tanımları
- Gizli metin, gizli sayfa ve gecikmeli yüklenen gövde metni **yok**;
  tarayıcı JavaScript çalıştırmasa dahi içeriğin tamamı ilk HTML'de
- `sitemap.xml` panel içeriğinden otomatik üretilir
- `robots.txt` yönetim panelini kapatır, geri kalanı açar
- Güvenlik başlıkları (`X-Content-Type-Options`, `Referrer-Policy` vb.)

### Sayfa düzeyinde
- Her sayfada tek `h1`, hiyerarşik `h2`/`h3` düzeni
- Her sayfa için ayrı `title`, `description` ve **kanonik adres**
- Open Graph ve Twitter kartları; `opengraph-image` ile otomatik üretilen
  paylaşım görseli
- Sayfa yolu (breadcrumb) hem görsel hem yapısal veri olarak
- 68 karakterlik okuma genişliği ve gerçek metin derinliği
  (her çalışma alanı sayfası ortalama 400+ kelime özgün içerik)

### Yapısal veri (JSON-LD)
| Şema | Nerede |
|---|---|
| `LegalService` + `OfferCatalog` | Her sayfa (site kabuğu) |
| `WebSite` | Her sayfa |
| `BreadcrumbList` | Tüm iç sayfalar |
| `Service` | Çalışma alanı sayfaları |
| `FAQPage` | Çalışma alanı sayfaları ve S.S.S. sayfası |
| `Attorney` (Person) | Ekip profilleri |
| `Article` | Yayın sayfaları |

`FAQPage` işaretlemesi, arama sonuçlarında sorunun altında cevabın da
görünmesini sağlayan yapıdır; hukuk aramalarında tıklama oranını en çok
artıran unsurlardan biridir.

### İç bağlantı mimarisi
```
Ana Sayfa
 ├─ Çalışma Alanları (12) ──┬─ ilgili avukat profiline
 │                          ├─ diğer alanlara (yatay bağlantı)
 │                          └─ iletişime
 ├─ Ekip ────────────────────── her profil kendi uzmanlık alanlarına
 └─ Yayınlar ───────────────── her yazı yazarına ve ilgili alana
```
Her sayfa en az üç iç bağlantı alır; hiçbir sayfa yalıtılmış değildir.

## Yapılmayanlar ve nedeni

**Gizli anahtar kelime / cümle listesi sayfası yapılmamıştır.**

Bu teknik iki ayrı nedenle sitenin aleyhinedir:

1. **Google Spam Politikaları** gizli metni ve anahtar kelime yığınını
   açıkça yasaklar. Yaptırımı algoritmik bir sıra kaybı değil, elle
   uygulanan (manual action) tam kaldırmadır. Bir hukuk bürosu için alan
   adının arama sonuçlarından çıkması, kazanılacak her trafiğin çok
   üzerinde bir kayıptır ve geri alınması aylar sürer.
2. **TBB Reklam Yasağı Yönetmeliği**, arama motorunda öne çıkmak amacıyla
   ilgisiz anahtar kelime ve meta etiket kullanımını doğrudan disiplin
   konusu yapar (bkz. `docs/mevzuat.md`).

Aynı hedefe (yüksek ve **kalıcı** organik trafik) götüren meşru yol,
aşağıdaki içerik programıdır.

## Yayın sonrası yapılacaklar

### 1. Yerel arama (en yüksek getirili adım)
- **Google Business Profile** kaydı: kategori "Avukat" + "Hukuk Bürosu",
  gerçek adres, çalışma saatleri, fotoğraflar
- Ankara Barosu ve ilgili meslek rehberlerinde tutarlı isim-adres-telefon
  (NAP tutarlılığı yerel sıralamada belirleyicidir)

### 2. İçerik programı — ayda 2 yazı
Her yazı tek bir arama niyetini hedefler ve şu kalıba oturur:
soru → kısa cevap → süre/şart tablosu → sık yapılan hata → ne yapmalı.

İlk on iki ay için önerilen başlıklar:

| Ay | Konu | Hedef arama |
|---|---|---|
| 1 | Vakıf senedi nasıl hazırlanır? | vakıf kuruluşu avukat |
| 2 | Dernek tüzüğünde bulunması zorunlu maddeler | dernek tüzüğü örnek |
| 3 | Limited şirkette pay devri adım adım | limited şirket hisse devri |
| 4 | İşe iade davası süreleri | işe iade davası süre |
| 5 | Kira tespit davası nasıl açılır? | kira tespit davası |
| 6 | KVKK'da veri ihlali bildirimi | veri ihlali bildirimi 72 saat |
| 7 | Ortaklıktan çıkma ve çıkarılma | ortaklıktan çıkarma davası |
| 8 | Muris muvazaası davası | mirastan mal kaçırma |
| 9 | İdari para cezasına itiraz süresi | idari para cezası itiraz |
| 10 | Marka tesciline yayına itiraz | marka yayına itiraz |
| 11 | Kat karşılığı inşaatta gecikme | müteahhit gecikme tazminatı |
| 12 | Konkordato başvurusu şartları | konkordato şartları |

### 3. Ölçüm
- Search Console'da **sorgu bazlı** takip: hangi soruda kaçıncı sıradayız?
- 8–20. sırada görünen sorgular öncelikli iyileştirme listesidir; o sorguya
  cevap veren sayfa derinleştirilir.
- Ayda bir: tıklanma oranı düşük ama sıralaması iyi olan sayfaların
  `title` ve `description` metinleri yeniden yazılır.

### 4. Dış bağlantı (backlink)
Hukuk alanında en değerli bağlantılar: baro yayınları, üniversite
etkinlikleri, sektörel dernek sayfaları, ciddi haber kaynaklarında uzman
görüşü. Dizin sitelerine toplu kayıt ve satın alınmış bağlantı, bu alanda
fayda değil risk üretir.

## Beklenti

Yeni bir alan adında hukuk aramalarında ilk sayfa görünürlüğü tipik olarak
4–8 ayda başlar; rekabetin yüksek olduğu genel aramalarda ("ankara avukat")
daha uzun sürer. Buna karşılık uzun kuyruk aramalarda ("dernek iktisadi
işletme kurulumu") ilk sonuçlar 6–10 haftada görülebilir. Yukarıdaki
içerik programı bu ikinci grubu hedefler; site otoritesi oradan büyür.
