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

Adres ve telefonlar büronun bildirdiği gerçek bilgilerdir:

| Alan | Değer | Durum |
|---|---|---|
| Adres | `Ehlibeyt Mah. Ceyhun Atuf Kansu Cad. No: 109, Kat: 2 No: 3, 06520 Çankaya / Ankara` | ✔ |
| Telefon (büro) | `+90 552 532 06 06` — Av. Ali Kaan KILIÇOĞLU | ✔ |
| Telefon (doğrudan) | `+90 505 390 46 75` — Av. Atakan DEMİRKAN | ✔ |
| WhatsApp | `905525320606` | ✔ |
| E-posta | `info@akkhukuk.com.tr` | Büroda kullanımda olduğu teyit edilsin |
| Alan adı | `www.akkhukuk.com.tr` | Gerçek alan adı (`NEXT_PUBLIC_SITE_URL`) |

Büroda santral yoktur; her avukatın doğrudan hattı vardır. İletişim
sayfası iki numarayı da avukatın adıyla birlikte listeler, her profil
sayfası kendi numarasını taşır. Üst menü, alt bilgi ve WhatsApp butonu
ise büro numarasını (kurucunun hattı) kullanır — bu, Site Ayarları →
İletişim altındaki **Telefon** alanıdır.

Bir numara yer tutucu değerde (`+90 (312) 000 00 00` /
`905000000000`) bırakılırsa sitede **hiç gösterilmez**; uydurma bir
numara siteyi eksik değil sahte gösterir.

Yerel aramada doğru görünmek için sokak, posta kodu, ilçe ve il ayrı
alanlarda tutulur (Site Ayarları → İletişim); yapısal veri bunları
`PostalAddress` olarak, telefonları da E.164 biçiminde yayımlar.

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
