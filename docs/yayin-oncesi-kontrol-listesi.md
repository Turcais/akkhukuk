# Yayın öncesi kontrol listesi

Site teknik olarak yayına hazırdır. Aşağıdaki maddeler **büro tarafından
doğrulanmadan** yayına alınmamalıdır.

## Doğrulanması zorunlu bilgiler

Aşağıdaki alanlar kamuya açık kaynaklardan derlenmiş **taslaklardır**.
Bir avukatlık bürosunun sitesinde yer alan özgeçmiş bilgileri doğrulanmadan
yayımlanamaz.

- [ ] **Av. Ali Kaan KILIÇOĞLU** — baro sicil numarası, lisans mezuniyeti
      (üniversite ve yıl), yüksek lisans yılı, varsa sertifika ve üyelikler
- [ ] **Av. Atakan DEMİRKAN** — bağlı olduğu baro ve sicil numarası, lisans
      mezuniyeti (üniversite ve yıl), çalışma alanları
- [x] Her iki avukat için profil fotoğrafı — `public/ekip/` altında.
      Vesikalık beyazı, sitenin kâğıt tonuna yakın sıcak bir stüdyo
      zeminiyle değiştirildi. Panelden yüklenen fotoğraf bu dosyaların
      yerine geçer.
- [ ] Fotoğrafların hangi avukata ait olduğu teyit edilmeli
- [ ] Ekipte görünecek diğer meslektaşlar (varsa)

Kaynak dosya: `src/lib/ekip.ts` — doğrulama sonrası bilgiler **yönetim
panelinden** girilir, dosyaya dokunmaya gerek yoktur.

## İletişim bilgileri

Adres büronun bildirdiği gerçek adrestir. Kalanlar hâlâ yer tutucudur:

| Alan | Durum | Yapılacak |
|---|---|---|
| Adres | `Ehlibeyt Mah. Ceyhun Atuf Kansu Cad. No: 109, 06520 Çankaya / Ankara` | Kat / daire numarası varsa eklensin |
| Telefon | `+90 (312) 000 00 00` | Gerçek numara |
| WhatsApp | `905000000000` | Gerçek numara (ülke koduyla, rakam) |
| E-posta | `info@akkhukuk.com.tr` | Büroda kullanımda olduğu teyit edilsin |
| Alan adı | `www.akkhukuk.com.tr` | Gerçek alan adı (`NEXT_PUBLIC_SITE_URL`) |

Telefon ve WhatsApp yer tutucu kaldığı sürece sitede **hiç gösterilmez**;
uydurma bir numara siteyi eksik değil sahte gösterir. Panele gerçek numara
girildiği anda üst menüdeki, iletişim sayfasındaki ve WhatsApp butonundaki
bağlantılar kendiliğinden görünür.

Yerel aramada doğru görünmek için posta kodu, ilçe ve il ayrı alanlarda
tutulur (Site Ayarları → İletişim); yapısal veri bunları `PostalAddress`
olarak yayımlar.

Tamamı **Site Ayarları → İletişim** bölümünden girilir.

## Hukuk metinleri

Yasal Uyarı, KVKK Aydınlatma Metni, Gizlilik ve Çerez politikaları
mevzuatın gerektirdiği asgari içeriği karşılayacak biçimde hazırlanmıştır.
Yayından önce büro tarafından okunmalı ve şu noktalar netleştirilmelidir:

- [ ] Veri sorumlusunun tam unvanı ve açık adresi
- [ ] KVKK başvurularının yapılacağı adres ve varsa KEP adresi
- [ ] Saklama sürelerinin büronun fiilî uygulamasıyla uyumu
- [ ] Ölçüm/analitik aracı kullanılacaksa çerez politikasının güncellenmesi

## Mevzuat uyumu

- [ ] Sitede müvekkil ismi, dosya örneği, referans listesi veya başarı
      oranı **bulunmadığı** teyit edilmeli (bunlar TBB Reklam Yasağı
      Yönetmeliği'nce yasaktır — ayrıntı: `docs/mevzuat.md`)
- [ ] Panelden eklenecek yeni metinlerde sonuç taahhüdü ve üstünlük
      iddiası bulunmamalı
- [ ] Bağlı olunan baroya, sitenin yayına gireceği bildirilmeli
      (Yönetmelik m.13 uyarınca internet sitesi barodan bilgi verilerek açılır)

## Teknik

- [ ] `NEXT_PUBLIC_SITE_URL` gerçek alan adı olarak tanımlandı
- [ ] Sanity CORS listesinde gerçek alan adı var
- [ ] Resend'de alan adı doğrulandı, `CONTACT_FROM` gerçek adres
- [ ] İletişim formundan test başvurusu gönderildi; hem panele düştü hem
      e-posta ulaştı
- [ ] Google Search Console'a site haritası gönderildi
- [ ] Google Business Profile (Google'da İşletmem) kaydı açıldı
- [ ] `www` ve `www` olmayan adreslerden biri diğerine yönlendiriliyor
