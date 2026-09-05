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

Osmanlı bezeme geleneğinden üç unsur alınmıştır; hiçbiri süs olarak
serbest bırakılmamış, her biri bir işleve bağlanmıştır.

| Unsur | Nerede | İşlev |
|---|---|---|
| **Nişan** — şemse (madalyon) formundan türetilmiş sivri oval mühür | Logo, ekip kartlarında fotoğrafsız profil, 404 | Kimlik işareti |
| **Motif** — dört yapraklı hatayi çekirdeği ve iki yana uzanan altın çizgi | Bölüm ayracı, kapanış çağrısı | Ritim ve nefes |
| **Örüntü** — sekiz kollu yıldız ve baklava ağı | Koyu bölümlerin zemininde %6 opaklıkta | Derinlik, dokunun hissedilmesi |

Kural: motifler hiçbir zaman metnin okunabilirliğini düşürecek yoğunlukta
kullanılmaz ve `aria-hidden` ile ekran okuyuculardan gizlenir.

## Düzen

- Kart ızgaralarında hücre çizgileri, 1 px boşluklardan kapsayıcının arka
  planının görünmesiyle elde edilir. Son satır eksik kaldığında
  `IzgaraDolgusu` bileşeni boşlukları kâğıt rengiyle kapatır.
- Köşeler keskindir (`--radius-soft: 2px`). Yuvarlatılmış köşe, bu markanın
  kurmak istediği ciddiyetle çelişir.
- Gölge neredeyse yoktur; katman hissi çizgiyle kurulur.
- Hareket: sayfa girişinde animasyon yoktur. Yalnızca üzerine gelme
  durumlarında 200–700 ms arası geçişler kullanılır. Bunun nedeni yalnızca
  estetik değildir: giriş animasyonu içeriği geçici olarak görünmez
  kıldığından hem tarama motorları hem yazdırma için risk üretir.
