/**
 * Sayfa metinlerinin yerel yedegi.
 *
 * Her baslik, alt baslik ve paragraf yonetim panelindeki karsiligiyla
 * ayni anahtar altinda durur. Panel bos birakilirsa buradaki metin gecerlidir.
 */

export const anaSayfa = {
  hero: {
    ustBaslik: "Ankara · Hukuk ve Danışmanlık",
    baslik: "Hukuk, doğru zamanda başlar.",
    altBaslik:
      "AKK Hukuk ve Danışmanlık; şirketlere, vakıf ve derneklere, gerçek kişilere uyuşmazlık doğmadan önce yön veren, doğduğunda ise sonuna kadar takip eden bir hukuk bürosudur.",
    birinciButon: { metin: "Görüşme talep edin", adres: "/iletisim" },
    ikinciButon: { metin: "Çalışma alanlarımız", adres: "/calisma-alanlarimiz" },
  },

  guvenSeridi: [
    { deger: "Ankara 2 No'lu Barosu", etiket: "Kayıtlı avukatlık bürosu" },
    { deger: "Şirket, vakıf ve dernek", etiket: "Sürekli danışmanlık müvekkilleri" },
    { deger: "12 çalışma alanı", etiket: "Dava, icra takibi ve danışmanlık" },
  ],

  tanitim: {
    ustBaslik: "Büro Hakkında",
    baslik: "Bir hukukçunun asıl işi dava kazanmak değildir.",
    paragraflar: [
      "Asıl iş, davaya gerek kalmayan bir düzen kurmaktır. Bir sözleşme imzalanmadan önce okunduğunda, bir personel çıkışı fesihten önce planlandığında, bir resmi yazıya süresi içinde cevap verildiğinde ortadan kalkan uyuşmazlık sayısı, kazanılan davalardan fazladır. Büromuz hukuki desteği bu yüzden kriz anına sıkıştırmaz; kurumun gündelik karar mekanizmasının içine yerleştirir.",
      "Ankara'da faaliyet gösteriyoruz. Şirketlere, vakıf ve derneklere, gerçek kişilere avukatlık ve sürekli hukuki danışmanlık hizmeti veriyoruz. Uyuşmazlık doğduğunda da dosyayı sonuna kadar takip ediyoruz — ancak bunu, dosyanın nasıl buraya geldiğini bilerek yapıyoruz.",
    ],
    maddeler: [
      {
        baslik: "Dava açmanın aleyhinize olduğu durumu da söyleriz",
        metin:
          "Bir davanın kazanılma ihtimalini olduğundan yüksek göstermek kısa vadede müvekkil kazandırır, uzun vadede güveni bitirir. Uzlaşmanın, arabuluculuğun ya da hiçbir şey yapmamanın daha doğru olduğu dosyalar vardır; bunu ilk görüşmede söyleriz.",
      },
      {
        baslik: "Dosyanızı yürüten avukatın adını bilirsiniz",
        metin:
          "Her dosyanın sorumlu avukatı bellidir ve ona doğrudan ulaşırsınız. Süreci kimin takip ettiğini aramanıza gerek kalmaz.",
      },
      {
        baslik: "İmzalayacağınız belgeyi önce birlikte okuruz",
        metin:
          "Ne olduğunu anlamadığınız bir metni imzalamanızı istemeyiz. Hukuki belgeleri, hukukçu olmayan bir okurun anlayacağı biçimde özetleriz.",
      },
    ],
  },

  levha: {
    soz: "Bir dosyanın nasıl biteceğini çoğu zaman dava dilekçesi değil, yıllar önce imzalanan sözleşme ve o gün tutulan kayıt belirler.",
    kunye: "AKK Hukuk ve Danışmanlık",
  },

  alanlarBolumu: {
    ustBaslik: "Çalışma Alanlarımız",
    baslik: "Hangi konuda destek arıyorsunuz?",
    aciklama:
      "Her alan için ne yaptığımızı, kimler için yaptığımızı ve en sık sorulan soruların yanıtlarını ayrı ayrı yazdık.",
  },

  yontem: {
    ustBaslik: "Çalışma Yöntemimiz",
    baslik: "İlk görüşmeden dosyanın kapanışına",
    adimlar: [
      {
        numara: "01",
        baslik: "İlk görüşme",
        metin:
          "Konuyu ve elinizdeki belgeleri dinleriz. Bu görüşmede henüz bir vekâlet ilişkisi kurulmaz; amacımız meselenin hukuki çerçevesini birlikte netleştirmektir.",
      },
      {
        numara: "02",
        baslik: "Değerlendirme ve yol haritası",
        metin:
          "Dosyayı inceler, olası yolları ve her birinin gerçekçi sonucunu yazılı olarak paylaşırız. Takvim ve maliyet bu aşamada netleşir.",
      },
      {
        numara: "03",
        baslik: "Vekâlet ve yürütme",
        metin:
          "Avukatlık sözleşmesi imzalanır, vekâletname düzenlenir ve süreç başlar. Her önemli gelişme size aynı gün iletilir.",
      },
      {
        numara: "04",
        baslik: "Sonuç ve sonrası",
        metin:
          "Dosya sonuçlandığında kararın ne anlama geldiğini ve bundan sonra atılması gereken adımları açıklarız. Gerekiyorsa kanun yoluna başvururuz.",
      },
    ],
  },

  ekipBolumu: {
    ustBaslik: "Ekibimiz",
    baslik: "Dosyanızı kim yürütüyor?",
    aciklama:
      "Büromuzda her dosyanın sorumlu avukatı bellidir. Ekibimizin özgeçmişlerine ve çalışma alanlarına buradan ulaşabilirsiniz.",
  },

  yayinBolumu: {
    ustBaslik: "Yayınlar",
    baslik: "Hukuki bilgilendirme yazıları",
    aciklama:
      "Sık karşılaştığımız soruları ve mevzuattaki değişiklikleri, dosya sırlarına girmeden ve genel bilgilendirme sınırları içinde yazıyoruz.",
  },

  cagri: {
    baslik: "Konunuzu bir hukukçuyla konuşun.",
    metin:
      "Formu doldurun, mesai saatleri içinde size dönelim. İlk görüşmede meselenizin hukuki çerçevesini birlikte netleştiririz.",
    butonMetni: "Görüşme talep edin",
  },
};

export const hakkimizdaSayfasi = {
  ustBaslik: "Hakkımızda",
  baslik: "Kurumların hukuk aklı",
  girisMetni:
    "AKK Hukuk ve Danışmanlık, Ankara'da faaliyet gösteren bir avukatlık ve hukuki danışmanlık bürosudur. Şirketler, vakıflar ve dernekler başta olmak üzere tüzel kişilere ve gerçek kişilere avukatlık hizmeti sunar.",
  bolumler: [
    {
      baslik: "Büromuz",
      paragraflar: [
        "Büromuz, hukuki desteği yalnızca uyuşmazlık anında devreye giren bir hizmet olarak görmez. Kurumların gündelik kararlarında — bir sözleşme imzalanırken, bir personel işe alınırken ya da işten çıkarılırken, bir resmi yazıya cevap verilirken — hukukçunun masada olması, sonradan yürütülecek onlarca dosyanın önüne geçer.",
        "Bu anlayışla, sürekli hukuki danışmanlık ilişkilerine özel önem veriyoruz. Müvekkil kurumun iş akışını, karar organlarını ve belge düzenini tanımadan verilen hukuki görüşün pratikte karşılığı olmadığını biliyoruz.",
      ],
    },
    {
      baslik: "Yaklaşımımız",
      paragraflar: [
        "Her dosyada üç şeyi baştan konuşuruz: gerçekçi takvim, olası sonuçların tamamı ve maliyetin nasıl hesaplanacağı. Bir davanın kazanılma ihtimalini olduğundan yüksek göstermek, kısa vadede müvekkil kazandırır; uzun vadede güveni bitirir.",
        "Dava açmanın müvekkil aleyhine olduğu durumlar vardır. Bu durumlarda uzlaşma, arabuluculuk ya da hiçbir şey yapmamak seçeneklerini de açıkça masaya koyarız.",
      ],
    },
    {
      baslik: "Gizlilik",
      paragraflar: [
        "Avukatlık mesleğinin temeli sır saklama yükümlülüğüdür. Müvekkilimizin adı, dosyasının konusu ve bize aktardığı hiçbir bilgi — dosya sonuçlandıktan sonra dahi — üçüncü kişilerle paylaşılmaz.",
        "Bu nedenle bu sitede müvekkil isimlerine, dosya örneklerine veya referans listelerine yer verilmemiştir. Avukatlık mesleğine ilişkin düzenlemeler de bunu gerektirir.",
      ],
    },
  ],
  ilkeler: [
    "Müvekkile olası sonuçların en iyisini değil, tamamını söyleriz. Bir dosyanın zayıf tarafını ilk biz söylemezsek, karşı taraf söyler.",
    "Duruşmaya, görüşmeye ve müzakereye dosyayı bilerek gideriz. Hazırlıksız girilen bir duruşma, kaybedilmiş bir duruşmadır.",
    "Dosya kapandığında ilişki bitmez. Kararın ne anlama geldiğini ve bundan sonra ne yapılması gerektiğini de anlatırız.",
  ],
};

export type SikSorulanSoru = { soru: string; cevap: string; kategori: string };

export const sikSorulanlar: SikSorulanSoru[] = [
  {
    kategori: "Çalışma Usulü",
    soru: "İlk görüşme ücretli mi?",
    cevap:
      "İlk görüşmede meselenin hukuki çerçevesini birlikte netleştiririz. Görüşmenin kapsamı ve ücretlendirme, konunun niteliğine göre değişir; randevu öncesinde bunu açıkça bildiririz. Dosya incelemesi ve yazılı hukuki görüş gerektiren talepler ayrıca ücretlendirilir.",
  },
  {
    kategori: "Çalışma Usulü",
    soru: "Avukatlık ücreti nasıl belirleniyor?",
    cevap:
      "Avukatlık ücreti, Türkiye Barolar Birliği tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi'nin altında olmamak kaydıyla; dosyanın kapsamı, süresi, gerektirdiği emek ve dava değeri dikkate alınarak belirlenir ve avukatlık sözleşmesiyle yazılı hâle getirilir. Sürpriz kalem çıkmaması için tüm masraf kalemleri sözleşmede ayrıca gösterilir.",
  },
  {
    kategori: "Çalışma Usulü",
    soru: "Türkiye'nin başka bir şehrindeyim, çalışabilir miyiz?",
    cevap:
      "Evet. Görüşmeler çevrim içi yapılabilir, belgeler elektronik ortamda paylaşılabilir. Dosyanın görüldüğü yer Ankara dışındaysa, duruşmalarda talimat yoluyla veya o ildeki meslektaşlarımızla iş birliği içinde temsil sağlanır. Bu durumda oluşacak ek masraflar baştan bildirilir.",
  },
  {
    kategori: "Vekâlet",
    soru: "Vekâletname nasıl çıkarılır?",
    cevap:
      "Vekâletname noterden düzenlenir. Noterde avukatın adı, soyadı, baro sicil numarası ve vergi kimlik numarası istenir; bu bilgileri size önceden iletiriz. Boşanma ve tanıma-tenfiz gibi bazı dosyalarda fotoğraflı vekâletname zorunludur. Şirketler için imza sirküleri ve yetki belgesi de gerekir.",
  },
  {
    kategori: "Vekâlet",
    soru: "Vekâlet verdikten sonra her duruşmaya katılmam gerekir mi?",
    cevap:
      "Kural olarak hayır; vekâletname verildiğinde duruşmalarda avukatınız sizi temsil eder. Ancak anlaşmalı boşanma duruşması, tarafın bizzat dinlenmesine karar verilen hâller ve isticvap gibi durumlarda bizzat hazır bulunmanız gerekir. Böyle bir zorunluluk doğduğunda önceden bilgilendirilirsiniz.",
  },
  {
    kategori: "Süreç",
    soru: "Davam ne kadar sürer?",
    cevap:
      "Süre; mahkemenin iş yüküne, delil durumuna, bilirkişi incelemesi gerekip gerekmediğine ve kanun yoluna başvurulup başvurulmayacağına göre değişir. Hiçbir avukat kesin süre veremez. Biz ilk değerlendirmede benzer dosyalardaki tipik seyri paylaşır, sürecin uzamasına yol açabilecek noktaları önceden işaret ederiz.",
  },
  {
    kategori: "Süreç",
    soru: "Dosyamın durumunu nasıl öğrenirim?",
    cevap:
      "Her önemli gelişme — duruşma sonucu, bilirkişi raporu, karar tebliği — size aynı gün iletilir. Ayrıca dosyanızın sorumlu avukatına doğrudan ulaşabilirsiniz; sekreterlik üzerinden randevu sırası beklemeniz gerekmez.",
  },
  {
    kategori: "Süreç",
    soru: "Arabuluculuk zorunlu mu?",
    cevap:
      "İş hukukundan doğan alacak ve işe iade talepleri, ticari davalar ve tüketici uyuşmazlıklarının bir kısmında arabuluculuk dava şartıdır; bu yola başvurulmadan açılan dava usulden reddedilir. Aile hukuku ve kira uyuşmazlıklarının bir bölümünde de zorunlu arabuluculuk uygulanır. Dosyanızın hangi kapsamda olduğunu ilk değerlendirmede belirtiriz.",
  },
  {
    kategori: "Kurumsal",
    soru: "Şirketimiz için sürekli danışmanlık nasıl işliyor?",
    cevap:
      "Aylık sabit bir bedel karşılığında; hukuki görüş, sözleşme incelemesi, resmi yazışma ve süreç takibi kapsanır. İhtiyaç duyduğunuzda randevu almadan telefonla ulaşabilirsiniz. Dava ve icra takipleri bu kapsamın dışındadır ve ayrıca ücretlendirilir; danışmanlık müvekkillerimiz için bu dosyalarda özel koşullar uygulanır.",
  },
  {
    kategori: "Kurumsal",
    soru: "Vakıf veya derneğimiz denetim yazısı aldı, ne yapmalıyız?",
    cevap:
      "Denetim yazılarında verilen süreler kısadır ve yanıtın kapsamı sonraki idari işlemin yönünü belirler. Yazıyı, ekleriyle birlikte en kısa sürede bize iletin; hangi belgelerin isteneceğini, hangi eksikliklerin giderilebileceğini ve yanıtın nasıl kurgulanacağını birlikte planlayalım. Süre geçtikten sonra yapılan itirazlar çoğu zaman sonuç vermez.",
  },
  {
    kategori: "Gizlilik",
    soru: "Anlattıklarım gizli kalır mı?",
    cevap:
      "Evet. Avukatlık Kanunu uyarınca avukatın sır saklama yükümlülüğü, vekâlet ilişkisi kurulmasa dahi ilk görüşmeden itibaren başlar ve dosya kapandıktan sonra da devam eder. Bu yükümlülük süresizdir.",
  },
  {
    kategori: "Gizlilik",
    soru: "Sitede neden müvekkil referansı yok?",
    cevap:
      "Avukatlık mesleğine ilişkin düzenlemeler, müvekkil isimlerinin ve dosya örneklerinin tanıtım amacıyla paylaşılmasını yasaklar. Sır saklama yükümlülüğü de buna izin vermez. Bu nedenle sitemizde referans listesi, müvekkil yorumu veya kazanılmış dava istatistiği yer almaz.",
  },
];

/** SSS'leri kategorilere gore gruplar. */
export function sorulariGrupla(sorular: SikSorulanSoru[]) {
  const gruplar = new Map<string, SikSorulanSoru[]>();
  for (const soru of sorular) {
    const mevcut = gruplar.get(soru.kategori) ?? [];
    mevcut.push(soru);
    gruplar.set(soru.kategori, mevcut);
  }
  return Array.from(gruplar, ([kategori, liste]) => ({ kategori, liste }));
}
