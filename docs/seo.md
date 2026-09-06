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
| Şema | Nerede | Ne sağlar |
|---|---|---|
| `LegalService` | Her sayfa | Büro kimliği, `knowsAbout` (12 çalışma alanı), çalışma saatleri, iletişim noktası, bağlı olunan baro, hizmet dili |
| `WebSite` | Her sayfa | Site kimliği |
| `BreadcrumbList` | Tüm iç sayfalar | Sonuçlarda yol izi |
| `ItemList` | Çalışma alanları ve ekip dizinleri | 12 alanın tek liste olarak anlaşılması |
| `Service` | Çalışma alanı sayfaları | Hizmetin adı, sağlayıcısı, hizmet bölgesi |
| `FAQPage` + `speakable` | Alan sayfaları ve S.S.S. | Sorunun altında cevabın görünmesi; sesli asistanların okuyabilmesi |
| `Attorney` | Ekip profilleri | Avukat kimliği, uzmanlık, dil, dış bağlantılar |
| `Article` + `abstract` + `citation` | Yayınlar | Yazının özeti ve dayandığı mevzuat |

### Makine okunur çıktılar
| Adres | Ne için |
|---|---|
| `/sitemap.xml` | Tüm sayfaların listesi. `lastmod` uydurulmaz: yazılar için gerçek yayın tarihi kullanılır. Yanlış bir `lastmod`, arama motorunun bu alanı tümden yok saymasına yol açar. |
| `/rss.xml` | Yayın akışı. Meslektaşlar, haber toplayıcılar ve içerik tarayıcıları için. |
| `/llms.txt` | Dil modelleri için düz metin büro künyesi: kimlik, iletişim, 12 çalışma alanının kapsamı ve sık sorulanları, ekip, yayınlar. |
| `/robots.txt` | Arama motorlarının yanında yapay zekâ tarayıcılarına da **açık izin**. |

Üçü de aynı kaynaktan (`src/lib/seo.ts`) beslenir; birinin güncellenip
diğerinin unutulması mümkün değildir.

### Yapay zekâ cevaplarında çıkmak

Bir kullanıcı arama yerine bir dil modeline sorduğunda, cevabın kaynağı
olmak için gereken şey anahtar kelime değil **çıkarılabilir içeriktir.**
Sitede bunun için yapılanlar:

1. **Kısa cevap bloğu.** Her yayının en üstünde, sorulan soruya iki-üç
   cümlede doğrudan cevap veren çerçeveli bir bölüm. Kendi başına ayakta
   durur — "yukarıda anlatıldığı gibi" demez. Aynı metin `Article`
   şemasında `abstract` olarak da verilir. Özetleyen sistemlerin
   alıntıladığı bölüm çoğunlukla budur.
2. **Soru biçiminde başlıklar.** Ara başlıklar ("İşe iade davası açmak
   için süre ne kadar?") kullanıcının yazdığı soruyla birebir eşleşir.
3. **Dayanak mevzuat.** Her yazının sonunda kanun ve madde numaraları
   listelenir; `citation` olarak da işaretlenir. Kaynaklı metin hem okur
   hem sistemler için daha güvenilirdir.
4. **Süreç şemaları.** Adımlar, tipik süreler ve sıra; "vakıf kuruluşu
   kaç aşamadır" türü sorulara doğrudan cevap verir.
5. **Sunucuda üretilen HTML.** İçeriğin tamamı ilk yanıtta gelir;
   JavaScript çalıştırmayan tarayıcılar da tam metni görür.
6. **`llms.txt`.** Modelin siteyi tek dosyadan doğru anlaması için.
7. **Varlık tutarlılığı.** Büro adı, adres ve telefon sitede, yapısal
   veride ve `llms.txt`'te birebir aynıdır; farklı yazımlar modelin iki
   ayrı büro olduğunu düşünmesine yol açar.

> Bunların hiçbiri bir garanti değildir; hiçbir teknik de değildir.
> Yapay zekâ cevabında kaynak gösterilmenin tek yolu, o soruya internetteki
> en açık cevabı vermiş olmaktır. Altyapı bunu görünür kılar, içeriğin
> yerine geçmez.

## Yapılmayanlar ve nedeni

**Gizli anahtar kelime / cümle listesi sayfası yapılmamıştır.**

Kastedilen teknik, 2000'lerin ortasında yaygın olan yöntemdir: bir XML ya
da gizli sayfa içinde "ankara avukat", "ankara boşanma avukatı" gibi
binlerce ifadenin listelenmesi. O yıllarda arama motorları büyük ölçüde
terim sıklığına bakıyordu ve yöntem işe yarıyordu. Bugün yaramamasının üç
ayrı nedeni var:

1. **Sinyal olarak ölü.** Meta anahtar kelime etiketi 2009'dan beri
   Google sıralamasında kullanılmıyor. Görünmez metin ise sayfanın
   tamamının değerlendirme dışı bırakılmasına yol açıyor. 2011 (Panda) ve
   2012 (Penguin) güncellemeleri ince içeriği ve aşırı optimizasyonu
   hedefledi; 2015'teki "doorway page" güncellemesi ise tam olarak bu
   kalıbı — tek bir hedefe yönlendiren, kendi başına değeri olmayan
   çoğaltılmış sayfaları — cezalandırmak için yayımlandı.
2. **Yaptırımı geri dönüşsüz.** Sıra kaybı değil, elle uygulanan
   kaldırma (manual action). Bir hukuk bürosu için alan adının aramadan
   çıkması, kazanılacak trafiğin çok üzerinde bir kayıp ve düzelmesi
   aylar sürer.
3. **Meslek kuralına aykırı.** TBB Reklam Yasağı Yönetmeliği, arama
   motorunda öne çıkmak amacıyla ilgisiz anahtar kelime ve meta etiket
   kullanımını doğrudan disiplin konusu yapar. Yaptırım siteye değil,
   avukatın siciline işler (bkz. `docs/mevzuat.md`).

**Aynı hedefe bugün nasıl gidiliyor?** O tekniğin amacı uzun kuyruk
sorgularını toplamaktı; bu amaç meşru ve sitede bunun için çalışılıyor.
Fark şu: liste değil, cevap. Sitede hâlihazırda **412 ayrı yazılı ifade**
var ve her biri gerçek içeriğin parçası:

| Kaynak | Adet |
|---|---|
| Çalışma alanı sayfası | 13 |
| Hizmet satırı | 178 |
| Alan sayfalarındaki soru-cevap | 71 |
| Süreç şeması adımı | 46 |
| Genel sıkça sorulan soru | 13 |
| Yayınlardaki ara başlık | 27 |
| Rehber başlığı ve maddesi | 77 |

Bu 412 ifadenin tamamı sayfada görünür durumda, `FAQPage` ve `ItemList`
olarak işaretli ve `llms.txt` ile dil modellerine açık. Yani gizli bir
listede saklanan 2000 kelimenin yapmaya çalıştığı işi, görünür ve
savunulabilir 412 ifade yapıyor — üstelik tıklandığında okurun aradığı
cevabı da veriyor.

Bu sayı, aşağıdaki içerik programıyla her ay artar. Kapasite sınırı yok:
her yeni soru-cevap yeni bir uzun kuyruk sorgusu demek.

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
