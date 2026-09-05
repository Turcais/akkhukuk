# Kurulum

Bu belge sıfırdan yayına alma adımlarını anlatır. Teknik bilgi gerektiren
adımlar işaretlenmiştir; geri kalanı tarayıcıdan yapılabilir.

## 1. Sanity — yönetim paneli

Sitedeki tüm başlıklar, metinler, görseller, ekip profilleri ve yazılar
Sanity üzerinden yönetilir. Ücretsiz plan bu site için yeterlidir.

1. https://www.sanity.io adresinden hesap açın.
2. **Create new project** → proje adı: `AKK Hukuk`. Dataset: `production`.
3. Proje açıldıktan sonra **Project ID** değerini kopyalayın.
4. **API → CORS origins → Add CORS origin** ile şu adresleri ekleyin
   (her ikisinde de *Allow credentials* işaretli olmalı):
   - `http://localhost:3000`
   - `https://<alan-adiniz>` (Vercel adresi ve gerçek alan adı)
5. **API → Tokens → Add API token** → ad: `Site formu`, yetki: **Editor**.
   Üretilen anahtarı bir kez gösterilir, kaydedin.

Bu adımlardan çıkan iki değer:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<proje kimliği>
SANITY_API_WRITE_TOKEN=<editor yetkili anahtar>
```

> Panel, sitenin kendi adresinde `/studio` altında çalışır. Ayrı bir yere
> kurulum yapılmasına gerek yoktur. Panele girecek kişiler Sanity'de
> **Members** bölümünden davet edilir.

## 2. Resend — form bildirimleri

İletişim formundan gelen başvurular hem panele kaydedilir hem de e-posta
olarak iletilir. E-posta tarafı Resend ile çalışır.

1. https://resend.com adresinden hesap açın.
2. **API Keys → Create API Key** → değeri kaydedin.
3. **Domains** bölümünden alan adınızı doğrulayın (DNS kayıtları eklenir).
   Doğrulama tamamlanana kadar gönderen adresi olarak
   `AKK Hukuk <onboarding@resend.dev>` kullanılabilir.

```
RESEND_API_KEY=<anahtar>
CONTACT_FROM="AKK Hukuk <bildirim@alan-adiniz>"
CONTACT_TO=<başvuruların düşeceği adres>
```

## 3. Vercel — yayın

1. https://vercel.com adresinde GitHub hesabıyla giriş yapın.
2. **Add New → Project** → bu depoyu seçin. Next.js otomatik tanınır.
3. **Environment Variables** bölümüne `.env.example` içindeki tüm
   değişkenleri girin. `NEXT_PUBLIC_SITE_URL` değerini gerçek alan adı
   olarak yazın (sonunda `/` olmadan).
4. **Deploy**.
5. **Settings → Domains** bölümünden alan adını bağlayın. Alan adı
   sağlayıcınızda Vercel'in verdiği DNS kayıtlarını tanımlayın.

> `NEXT_PUBLIC_SITE_URL` yanlış girilirse site haritası, kanonik adresler
> ve paylaşım görselleri yanlış adrese işaret eder. Bu değer doğru olmalıdır.

## 4. Google Search Console

1. https://search.google.com/search-console adresine alan adını ekleyin.
2. Doğrulamayı DNS kaydıyla yapın (Vercel'de zaten DNS kontrolü sizdedir).
3. **Sitemaps** bölümüne `sitemap.xml` girin.
4. Ana sayfa ve çalışma alanı sayfaları için **URL Inspection → Request
   Indexing** yapın.

## 5. İçeriğin panele taşınması

Site ilk gün koddaki içerikle yayına girer. Panelden bir kayıt
oluşturulduğu anda o bölüm panelden okunmaya başlar. Önerilen sıra:

1. **Site Ayarları** — gerçek telefon, e-posta, adres, çalışma saatleri.
2. **Ekip** — her avukat için profil, fotoğraf ve doğrulanmış özgeçmiş.
3. **Çalışma Alanları** — metinleri büronun kendi diliyle gözden geçirin.
4. **Sayfa Metinleri** — ana sayfa başlıkları.
5. **Kurumsal Metinler** — hukuk metinlerinin son hâli.
6. **Yayınlar** — yeni yazılar.

> Önemli: Bir çalışma alanı panelde oluşturulduğunda, koddaki 12 alanın
> tamamı devre dışı kalır ve yalnızca panelde tanımlı alanlar gösterilir.
> Bu nedenle alanları panele taşımaya başladıysanız hepsini taşıyın.
> Aynı kural ekip, yayınlar ve sıkça sorulan sorular için de geçerlidir.
