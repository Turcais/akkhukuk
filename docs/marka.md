# Marka sistemi

## Renk

Üç renkli, dar bir palet. Altın geniş yüzeylerde asla kullanılmaz;
yalnızca saç teli kalınlığında çizgilerde, küçük başlıklarda ve motiflerde
görünür — kıymetli olduğu için az kullanılır.

| Rol | Değer | Kullanım |
|---|---|---|
| Edirne kırmızısı | `#9e1b32` | Birincil eylem, vurgu, bağlantı |
| Kırmızı — koyu | `#7c1226` | Üzerine gelme durumu |
| Altın | `#a8873c` | Çizgi, motif, ayraç |
| Altın — parlak | `#c9a961` | Koyu zeminde küçük başlık |
| Altın — metin | `#7a6224` | Açık zeminde okunabilir altın |
| Kâğıt | `#fbf8f3` | Sayfa zemini |
| Kâğıt — koyu | `#f4efe5` | Bölüm ayrımı |
| Yüzey | `#ffffff` | Kart ve form zemini |
| Koyu zemin | `#16110d` | Üst bant, alt bilgi, çağrı bölümü |
| Mürekkep | `#17130f` | Başlık metni |
| Metin | `#3a322c` | Gövde metni |

Kontrast: gövde metni kâğıt üzerinde 10:1'in üzerinde; küçük altın metin
için `--altin-metin` kullanılır (AA'yı geçer). Parlak altın yalnızca koyu
zeminde ve 14 px üzeri boyutta kullanılır.

## Karanlık tema

Palet ters çevrilmez, **yeniden dengelenir.** Kâğıt yerine mürekkep geçer;
ama iki renk olduğu gibi kalamaz:

| Jeton | Aydınlık | Karanlık | Neden değişti |
|---|---|---|---|
| Kâğıt (sayfa) | `#fbf8f3` | `#16130f` | — |
| Yüzey (kart, form) | `#ffffff` | `#201a15` | Sayfadan bir tık açık kalır |
| Koyu zemin (bant) | `#16110d` | `#0b0807` | Sayfadan **daha derine** çekilir; yoksa açılış ve çalışma yöntemi bantları sayfayla birleşir |
| Metin kırmızısı | `#9e1b32` | `#dd6376` | `#9e1b32` koyu zeminde 3,7:1 kalıyor — okunmaz. Açılan ton 5:1'i geçer |
| Buton dolgusu | `#9e1b32` | `#a81f38` | Dolgunun koyu kalması gerekir; metin kırmızısı bu iş için fazla açık |
| Altın (metin) | `#7a6224` | `#d0af69` | Aydınlıkta koyulaştırılır, karanlıkta açılır — ikisi de kontrast için |

Buradaki asıl karar, **buton dolgusunun metin kırmızısından ayrılması**
(`--dolgu`). Tek jetonla iki problem birden çözülemiyor: koyu zeminde metnin
açılması, dolgunun ise koyu kalması gerekiyor.

Tarayıcının kendi çizimleri de temaya uyar (`color-scheme`): kaydırma
çubuğu, otomatik doldurma ve odak halkası. Onay kutusu ise tarayıcıya
bırakılmaz — kendi kutumuz çizilir ve işaret, motif dilindeki baklavadır.

Varsayılan **sistem tercihi**: ziyaretçinin işletim sistemi koyu temadaysa
site koyu açılır. Üst menüdeki anahtar bunu geçersiz kılar; simgeler şems
(güneş) ve hilaldir. Anahtarın hangi simgeyi göstereceği CSS ile seçilir;
böylece ilk boyada boş kutu ya da yanlış simge görünmez.

## Tipografi

| Rol | Yazı tipi | Neden |
|---|---|---|
| Başlık | **Bodoni Moda** | Yüksek kontrastlı didone; geç Osmanlı ve erken Cumhuriyet baskısının havası. Otorite kurar, dekoratif değildir. |
| Gövde ve arayüz | **Inter** | Ekranda en yorulmadan okunan tarafsız gövde. Türkçe karakter desteği tam. |

Her ikisi de `latin-ext` alt kümesiyle yüklenir (ğ ş ı İ ö ü ç). Yazı
tipleri projeyle birlikte sunulur; harici font isteği yapılmaz.

Ölçek: gövde 17 px / 1.7 satır. Başlıklar `text-wrap: balance`, paragraflar
`text-wrap: pretty` ile kırılır. Okuma genişliği 68 karakterle sınırlıdır.

## Logo

Büronun kendi kurumsal işareti kullanılır: sekiz kollu yıldız (mühr-ü
Süleyman) içinde çift başlı altın kartal ve AKK kelime işareti. Kaynak,
CorelDRAW ile çizilmiş vektör bir PDF'tir; yol verileri çıkarılıp SVG'ye
taşındığı için her ölçüde keskin kalır ve tek dosya hem açık hem koyu
zeminde çalışır.

| Dosya | Nerede | Not |
|---|---|---|
| `public/marka/akk-logo.svg` | Üst menü, alt bilgi | Tam logo: yıldız, kartal, AKK |
| `public/marka/akk-muhur.svg` | Paylaşım görseli (OG) | Sadeleştirilmiş: yıldız + kartal |
| `src/app/icon.svg` | Tarayıcı sekmesi | `akk-muhur.svg` ile aynı |
| `src/app/favicon.ico` | Eski tarayıcılar, arama motorları | 16 / 32 / 48 piksel |
| `src/app/apple-icon.png` | iOS ana ekran | 180×180, koyu zemin üstüne yerleştirilmiş |

Özgün çizimde yıldızın iç hattı beyazdır. Sitede bu hat **altına**
çevrildi: beyaz hat koyu zeminde yıldızın gövdesini yutuyor, altın hat
ise her iki zeminde de formu ayırıyor. Böylece tek dosya yetiyor ve
paletle de aynı dili konuşuyor.

Küçük ölçekte kelime işareti lekeye dönüştüğü için sekme ikonu ve mühür
sadeleştirilmiş sürümü kullanır. Dar ekranda üst menüde yalnızca işaret
kalır; büro adı bağlantının `aria-label` değerinde durur.

Logo yönetim panelinden değiştirilebilir (Site Ayarları → Logo). Panelden
bir görsel yüklendiğinde yanındaki yazılı büro adı kaldırılır; yüklenen
logolar çoğu zaman adı zaten içerir.

## Motif

Osmanlı bezeme geleneğinden beş unsur alınmıştır; hiçbiri süs olarak
serbest bırakılmamış, her biri bir işleve bağlanmıştır.

| Unsur | Nerede | İşlev |
|---|---|---|
| **Nişan** — şemse (madalyon) formundan türetilmiş sivri oval mühür | Fotoğrafsız profiller, 404 | Kimlik işareti |
| **Mihrap kemeri** — sivri kemer siluetli niş | Açılıştaki mühür panosu, ekip portreleri, avukat profili | Portreyi ve mührü çerçeveleyen niş; sitenin en belirleyici formu |
| **Zencerek bordür** — birbirini kesen iki dalga ve kesişme baklavaları | Koyu ve açık bölümlerin buluştuğu her sınır | "Su yolu" şeridi: geçişi kesilmiş değil, çerçeveye alınmış gösterir |
| **Köşebent** — kutuların dört köşesine oturan çerçeve parçaları | Kenar sütunundaki kutular, iletişim sayfası | Cilt ve kitabe düzeninin köşe bezemesi |
| **Girih örüntüsü** — sekiz kollu yıldız (mühr-ü Süleyman) ve baklava ağı | Koyu bölümlerin zemininde %6–9 opaklıkta | Derinlik, dokunun hissedilmesi |

Buna ek olarak sayfa zemininde ince taneli bir **kâğıt dokusu** vardır
(SVG `feTurbulence`, ~%3 algılanan yoğunluk). Ebru ve aharlı kâğıdın yüzey
hissini verir; hiçbir görsel dosyası yüklemez.

Kemer yolu tek bir yerde tanımlanır (`KEMER_YOLU`, `components/brand/motif.tsx`)
ve hem kırpma hem altın iç hat aynı yolu kullanır; oran değişse de form bozulmaz.

Kural: motifler hiçbir zaman metnin okunabilirliğini düşürecek yoğunlukta
kullanılmaz ve `aria-hidden` ile ekran okuyuculardan gizlenir.

## Sayfa yapısı

Osmanlı tarafı yalnızca bezemede değil, sayfanın kuruluşunda da vardır.

**Cetvel.** Tezhipli sayfalarda metni çevreleyen ince kenar hattı. Sitede
1440 pikselin üzerindeki ekranlarda, sayfanın iki yanından geçen altın bir
hairline ve dört köşe işareti olarak belirir. Dar ekranlarda hiç çizilmez —
bir gösteri değil, geniş ekranın hakkını veren bir çerçevedir.

**Bölüm numaraları.** Her ana bölüm kitabe satırı gibi açılır:
`01 —— BÜRO HAKKINDA`. Numara, altın cetvel çizgisi, sonra üst başlık.
Sayfa böylece bir cilt gibi okunur; okur hangi bölümde olduğunu bilir.

**Levha.** Sayfanın ortasında, hat levhası düzeninde tek cümlelik bir durak:
köşebentli çerçeve, girih filigranı, Bodoni ile büyük punto tespit, altında
künye. İddia değil, bakış açısı bildirir. Metni panelden değiştirilir.

**Işık ritmi.** Sayfa tek renkte akmaz; koyu ve açık bantlar sırayla gelir:

```
koyu açılış → açık güven şeridi → açık tanıtım → levha
→ açık fihrist → KOYU çalışma yöntemi → açık ekip
→ açık yayınlar → koyu çağrı → koyu alt bilgi
```

Ortadaki koyu "çalışma yöntemi" bandı, sayfanın nefes aldığı yerdir; içi
boş altın rakamlar (yalnızca kontur) ve dikey altın hatlarla kurulur.

**Fihrist.** Çalışma alanları kart ızgarası değil, satır satır dizilmiş bir
fihristtir: numara, küçük simge, başlık ve tek cümlelik özet. Bu bir biçim
tercihi değil: on iki eşit kart, on iki eşit ağırlıkta konu olduğu izlenimi
verir ve okur hiçbirine tutunamaz. Kitap fihristi gibi dizildiğinde göz
başlıklarda aşağı iner ve ilgilendiği satırda durur. Satırın altında,
üzerine gelindiğinde soldan çizilen altın bir hat belirir.

**Eşit kutulardan kaçınma.** Aynı gerekçeyle büro tanıtımındaki ilkeler ve
"Çalışma ilkelerimiz" bölümü de kutu ızgarası değil, çizgiyle ayrılmış
listedir; ilk madde daha büyük punto alır. Arka arkaya üç "eşit kutu
ızgarası" bölümü, sayfanın en şablon görünen yeriydi.

**Başharf.** Uzun metinlerin ilk harfi, müzehhep başharflerin modern
karşılığı olarak Edirne kırmızısında ve Bodoni ile büyütülür. Yalnızca
çalışma alanı giriş paragrafında ve yayın gövdesinde kullanılır; kısa
bloklarda dengeyi bozar.

## Düzen ve ayrıntı

- Kart ızgaralarında hücre çizgileri, 1 px boşluklardan kapsayıcının arka
  planının görünmesiyle elde edilir. Son satır eksik kaldığında
  `IzgaraDolgusu` bileşeni boşlukları kâğıt rengiyle kapatır.
- Köşeler keskindir (`--radius-soft: 2px`). Yuvarlatılmış köşe, bu markanın
  kurmak istediği ciddiyetle çelişir.
- Gölge neredeyse yoktur; katman hissi çizgiyle kurulur.
- Üst menü bağlantılarının altında, üzerine gelindiğinde soldan çizilen bir
  altın hat belirir; bulunulan sayfada bu hat çizili kalır.
- Hareket süreleri tek yerde tanımlıdır (`--sure-ani`, `--sure-normal`,
  `--sure-uzun` ve iki eğri); bileşenler kendi sürelerini uydurmaz.

## Hareket

Sitede iki tür hareket vardır ve ikisinin de gerekçesi aynıdır: okura
nerede olduğunu söylemek. Süsleme amaçlı hiçbir hareket yoktur.

**Sayfa geçişi — "yaprak".** Gezinmede giden sayfa hafifçe bulanıklaşıp
sola kayarak çekilir, gelen sayfa sağdan yerine oturur. Üst menü sabit
kalır: okurun bir dayanak noktası olmalı, kayan şey sayfanın gövdesidir.
Yol izi, logo ve "tümü" bağlantıları kendilerini **geri** olarak işaretler
ve yaprak ters yöne döner — yön, nereye gidildiğini söyler.

Bu geçiş tarayıcının View Transitions API'si üzerinden yürür: **DOM
gizlenmez**, yalnızca tarayıcının aldığı anlık görüntü canlandırılır.
Tarama motorları, ekran okuyucular ve yazdırma çıktısı bundan hiç
etkilenmez. Sitede daha önce giriş animasyonları vardı ve tam da bu
nedenle kaldırılmıştı; bu yöntemde o sorun yoktur.

Kayma mesafesi bilinçli olarak 40 pikselle sınırlı. İki sayfanın
yüksekliği farklı olduğunda tarayıcının anlık görüntü geometrisi birebir
örtüşmüyor; kısa mesafede bu fark görünmez, uzun mesafede metin kayması
olarak okunur. Yön duygusu 40 pikselde zaten kuruluyor.

**Okuma çubuğu.** Uzun metinlerde (yayınlar ve rehberler) sayfanın
üstünde ince bir hat, kaydırdıkça kırmızıdan altına doğru dolar.
Kaydırma tabanlı CSS animasyonuyla çalışır: JavaScript kullanmaz, ana iş
parçacığını meşgul etmez. Tarayıcı desteklemiyorsa hiç görünmez.

Her ikisi de `prefers-reduced-motion` tercihine uyar: hareket azaltma
açıkken sayfa anında değişir ve çubuk çizilmez.
