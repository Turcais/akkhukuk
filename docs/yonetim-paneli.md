# Yönetim paneli kullanımı

Panel adresi: `https://<alan-adiniz>/studio`

Giriş, Sanity hesabıyla yapılır. Yeni kişi eklemek için Sanity
projesindeki **Members** bölümünden davet gönderilir.

Bir değişiklik yaptıktan sonra **Publish** demeyi unutmayın. Yayımlanmayan
değişiklikler sitede görünmez. Sitede güncelleme birkaç dakika içinde
belirir (sayfalar 5 dakikada bir tazelenir).

---

## Site Ayarları

Büronun kimlik ve iletişim bilgileri. Sitenin her yerinde kullanılır:
üst menü, alt bilgi, iletişim sayfası, WhatsApp butonu ve arama motoruna
verilen yapısal veri buradan beslenir.

- **Kimlik**: büro adı, slogan, logo, alt bilgi açıklaması, baro ve sicil
- **İletişim**: telefon, e-posta, WhatsApp, adres, harita araması, saatler
- **Sosyal Medya**: hesap ekleyin, ikon otomatik seçilir
- **Arama Motoru**: Google sonuçlarında görünen açıklama

> WhatsApp numarası **yalnızca rakam**, ülke koduyla yazılır: `905321234567`

---

## Sayfa Metinleri

Ana sayfadaki her bölümün ve iç sayfaların başlıkları. Her kayıt bir
**anahtar** ile siteye bağlıdır; anahtar oluşturduktan sonra değişmez.

Örnek: ana sayfanın en üstündeki başlığı değiştirmek için
`Ana sayfa — üst bölüm` kaydını açın, **Başlık** alanını yazın, Publish.

Boş bıraktığınız her alan sitedeki varsayılan metne düşer. Yani yalnızca
değiştirmek istediğiniz alanı doldurmanız yeterlidir.

**Maddeler** alanı, başlıklı listeler içindir (ana sayfadaki dört ilke,
dört adımlı çalışma yöntemi, güven şeridi). Sıra, maddelerin sırasıdır.

---

## Çalışma Alanları

Her alan kendi sayfasını oluşturur ve menüde görünür.

Yeni alan eklemek: **Çalışma Alanları → yeni kayıt**

| Alan | Ne işe yarar |
|---|---|
| Başlık | Sayfa başlığı ve `h1` |
| Kısa başlık | Menü ve alt bilgide görünen kısa ad |
| Adres (slug) | Sayfanın internet adresi. **Yayına girdikten sonra değiştirmeyin** — eski adres kırılır. |
| Sıra | Küçük sayı önce görünür |
| Simge | Kartta görünen ikon |
| Özet | Kartın altındaki tek cümle |
| Giriş paragrafı | Sayfanın açılış metni |
| Bu alanda ne yapıyoruz | Madde madde hizmetler |
| Kimler için | Sağ sütundaki kutu |
| Sık sorulan sorular | Sayfada açılır kapanır; **ayrıca Google sonuçlarında görünür** |

> Sık sorulan sorular bölümü, arama sonuçlarında sorunun altında cevabın da
> çıkmasını sağlar. Her alana en az iki soru eklemek görünürlüğü artırır.

---

## Ekip

Yeni bir avukat işe başladığında buradan eklenir; siteye kendiliğinden
düşer, kod değişikliği gerekmez.

- **Ad soyad**: unvanla birlikte yazın — `Av. Ayşe YILMAZ`
- **Görev / unvan**: Kurucu Avukat, Avukat, Stajyer Avukat
- **Sitede görünsün**: kapatıldığında profil siteden kalkar, kayıt silinmez
- **Fotoğraf**: dikey (4:5), sade zeminli portre. Yoksa baş harfler
  büronun mühür formunda gösterilir — profil boş görünmez.
- **Biyografi**: paragraf paragraf yazın
- **Uzmanlık alanları**: çalışma alanlarından seçilir; hem profilde
  hem de o alanın sayfasında karşılıklı bağlantı oluşur
- **Eğitim / Üyelikler / Sertifikalar / Diller**: her satır ayrı madde

> Özgeçmiş bilgileri doğrulanmadan yayımlanmamalıdır.

---

## Yayınlar

Bilgilendirme yazıları.

- **Özet**: listelerde ve paylaşımlarda görünür, 300 karakteri geçmesin
- **Kapak görseli**: isteğe bağlı. Yoksa kart tipografik olarak gösterilir.
- **Yazı**: ara başlık, madde listesi, alıntı ve görsel kullanabilirsiniz
- **Yazar**: ekipten seçilir, profil sayfasına bağlanır
- **İlgili çalışma alanı**: seçilirse yazı o alanın sayfasına da bağlanır
- **Ana sayfada öne çıkar**: ana sayfadaki üç yazıdan biri olur

Yazı yayımlandığında site haritası kendiliğinden güncellenir.

---

## Sıkça Sorulan Sorular

S.S.S. sayfasındaki sorular. **Başlık grubu** alanı, sorunun hangi başlık
altında görüneceğini belirler.

---

## Kurumsal Metinler

Yasal Uyarı, KVKK Aydınlatma Metni, Gizlilik ve Çerez politikaları.
Metin değiştirdiğinizde **Son güncelleme** tarihini de güncelleyin;
sayfada görünür.

---

## Gelen Mesajlar

İletişim formundan gelen başvurular. Salt okunurdur; panelden
silinmez ve değiştirilemez, böylece kayıt bütünlüğü korunur.

Başvurular aynı anda e-posta olarak da iletilir. E-posta ulaşmıyorsa
Resend ayarlarını kontrol edin (`docs/kurulum.md`).

---

## Sık karşılaşılan durumlar

**Değişiklik sitede görünmüyor.**
Publish yapıldı mı? Yapıldıysa 5 dakika bekleyin; sayfalar bu aralıkla
tazelenir.

**Bir çalışma alanı ekledim, diğerleri kayboldu.**
Beklenen davranış: panelde tek bir alan bile oluşturulduğunda site
tamamen panelden okumaya geçer. Kalan alanları da panele ekleyin.
Aynı kural ekip, yayınlar ve sıkça sorulan sorular için geçerlidir.

**Görsel yükleyemiyorum.**
Sanity'de görsel için boyut sınırı yüksektir; sorun genelde dosya
biçimidir. JPG, PNG veya WebP kullanın.

**Sayfanın adresini değiştirdim, bağlantı kırıldı.**
Yayına girmiş bir sayfanın slug'ı değiştirilmemelidir. Zorunluysa eski
adresten yenisine yönlendirme tanımlanması gerekir; geliştiriciye
başvurun.
