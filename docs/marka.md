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

## Tipografi

| Rol | Yazı tipi | Neden |
|---|---|---|
| Başlık | **Bodoni Moda** | Yüksek kontrastlı didone; geç Osmanlı ve erken Cumhuriyet baskısının havası. Otorite kurar, dekoratif değildir. |
| Gövde ve arayüz | **Inter** | Ekranda en yorulmadan okunan tarafsız gövde. Türkçe karakter desteği tam. |

Her ikisi de `latin-ext` alt kümesiyle yüklenir (ğ ş ı İ ö ü ç). Yazı
tipleri projeyle birlikte sunulur; harici font isteği yapılmaz.

Ölçek: gövde 17 px / 1.7 satır. Başlıklar `text-wrap: balance`, paragraflar
`text-wrap: pretty` ile kırılır. Okuma genişliği 68 karakterle sınırlıdır.

## Motif

Osmanlı bezeme geleneğinden beş unsur alınmıştır; hiçbiri süs olarak
serbest bırakılmamış, her biri bir işleve bağlanmıştır.

| Unsur | Nerede | İşlev |
|---|---|---|
| **Nişan** — şemse (madalyon) formundan türetilmiş sivri oval mühür | Logo, fotoğrafsız profiller, 404 | Kimlik işareti |
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

**Fihrist kartları.** Çalışma alanları numaralı bir fihrist gibi dizilir:
solda sıra numarası, sağda konunun simgesi, altta başlık, altın kesme
çizgisi ve tek cümlelik özet. Üzerine gelindiğinde girih örüntüsü %5,5
opaklıkta belirir — kart bir çini karoya dönüşür.

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
- Hareket: sayfa girişinde animasyon yoktur. Yalnızca üzerine gelme
  durumlarında 200–700 ms arası geçişler kullanılır. Bunun nedeni yalnızca
  estetik değildir: giriş animasyonu içeriği geçici olarak görünmez
  kıldığından hem tarama motorları hem yazdırma için risk üretir.
