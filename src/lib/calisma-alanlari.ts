/**
 * Calisma alanlarinin yerel yedegi.
 *
 * Yonetim paneli kurulunca bu icerik "Calisma Alanlari" belgelerinden gelir;
 * buradaki metinler ilk yayin ve CMS erisilemedigi durumlar icin durur.
 *
 * Dil kurali: her alan, hukuk egitimi olmayan bir okurun tek okumada
 * anlayacagi sadelikte yazilir. Sonuc taahhudu, ustunluk iddiasi ve
 * "en iyi / lider / garanti" gibi ifadeler kullanilmaz — Turkiye Barolar
 * Birligi Reklam Yasagi Yonetmeligi bunlari yasaklar.
 */

export type CalismaAlani = {
  slug: string;
  baslik: string;
  /** Menude ve kartlarda kullanilan kisa ad */
  kisaBaslik: string;
  ikon: string;
  /** Kart altindaki tek cumlelik ozet */
  ozet: string;
  /** Sayfanin acilis paragrafi */
  giris: string;
  /** "Bu alanda ne yapiyoruz" maddeleri */
  hizmetler: string[];
  /** "Kimler icin" maddeleri */
  kimlerIcin: string[];
  /**
   * Surec semasi.
   *
   * Yalnizca adimlari onceden bilinebilen isler icin doldurulur; her alanin
   * surec semasi olmaz. Sureler taahhut degil, tipik seyirdir — bu yuzden
   * hepsi aralik olarak yazilir.
   */
  surecBasligi?: string;
  surec?: { baslik: string; metin: string; sure?: string }[];
  /** Sayfa sonundaki sik sorulanlar */
  sorular: { soru: string; cevap: string }[];
  /** Arama motoru aciklamasi */
  seoAciklama: string;
};

export const calismaAlanlari: CalismaAlani[] = [
  {
    slug: "sirketler-ve-ticaret-hukuku",
    baslik: "Şirketler ve Ticaret Hukuku",
    kisaBaslik: "Şirketler Hukuku",
    ikon: "bina",
    ozet: "Şirketin kuruluşundan pay devrine, genel kuruldan ortaklar arası uyuşmazlığa kadar ticari hayatın hukuki tarafı.",
    giris:
      "Bir şirketin başına gelen sorunların büyük bölümü, kuruluş sırasında atlanan bir maddeden ya da hiç yazılmamış bir ortaklık sözleşmesinden doğar. Biz şirketleri iki noktada destekliyoruz: sorunu doğmadan önce yapıya yazmak ve doğduğunda hızlı, belgeye dayalı bir şekilde çözmek. Kuruluş evrakınızdan genel kurul tutanağınıza kadar her belgeyi, ileride bir mahkemede okunacağını bilerek hazırlıyoruz.",
    hizmetler: [
      "Anonim ve limited şirket kuruluşu, tür değiştirme, birleşme ve bölünme işlemleri",
      "Ana sözleşme hazırlanması, pay sahipleri (ortaklık) sözleşmeleri ve oy sözleşmeleri",
      "Pay devri, sermaye artırımı ve azaltımı işlemlerinin yürütülmesi",
      "Genel kurul ve yönetim kurulu toplantılarının hukuka uygun yürütülmesi, tutanak ve çağrı belgeleri",
      "Genel kurul kararlarının iptali, ortaklıktan çıkma ve çıkarma davaları",
      "Yönetim kurulu üyelerinin sorumluluğu ve şirkete karşı açılan davalar",
      "Ticari işletme devri, hisse devri ve şirket satın alma süreçlerinde hukuki inceleme (due diligence)",
      "Haksız rekabet ve ticari sır ihlallerine karşı hukuki koruma",
    ],
    kimlerIcin: [
      "Yeni şirket kuran girişimciler ve aile şirketleri",
      "Ortak alacak ya da ortaktan ayrılacak şirketler",
      "Yatırım alma sürecine giren işletmeler",
      "Ortakları arasında anlaşmazlık yaşayan şirketler",
    ],
    surecBasligi: "Şirket kuruluşu nasıl ilerler?",
    surec: [
      {
        baslik: "Yapı kararı",
        metin:
          "Anonim mi limited mi, ortaklık payları ve yönetim yapısı nasıl kurulacak — bunlar vergi ve sorumluluk sonuçlarıyla birlikte konuşulur.",
        sure: "1–2 gün",
      },
      {
        baslik: "Belgelerin hazırlanması",
        metin:
          "Ana sözleşme ve varsa ortaklık sözleşmesi yazılır; imza beyannamesi ve kuruluş evrakı toplanır.",
        sure: "2–5 gün",
      },
      {
        baslik: "Tescil ve ilan",
        metin:
          "MERSİS başvurusu yapılır, ticaret siciline tescil ve Türkiye Ticaret Sicili Gazetesi'nde ilan tamamlanır.",
        sure: "1–3 gün",
      },
      {
        baslik: "Faaliyet altyapısı",
        metin:
          "Vergi dairesi açılışı, defter tasdiki, e-imza ve banka hesabı; ardından ilk genel kurul takvimi belirlenir.",
        sure: "3–7 gün",
      },
    ],
    sorular: [
      {
        soru: "Ortaklık sözleşmesi olmadan şirket kurulur mu?",
        cevap:
          "Kurulur, ancak tavsiye etmiyoruz. Ana sözleşme şirketin kanuna karşı yüzüdür; ortaklık sözleşmesi ise ortakların birbirine karşı yüzüdür. Ortaklardan biri ayrılmak istediğinde, payını üçüncü bir kişiye satmak istediğinde ya da şirkete sermaye koymayı reddettiğinde ne olacağı ancak bu ikinci belgede yazar. Yokluğu, çoğu ortaklık uyuşmazlığının temel nedenidir.",
      },
      {
        soru: "Şirket hisse devrini noterde yapmak yeterli mi?",
        cevap:
          "Limited şirketlerde pay devri için noter onaylı devir sözleşmesi, genel kurul onayı ve pay defteri kaydı birlikte gerekir; ayrıca ticaret siciline tescil edilir. Bu adımlardan biri eksik kaldığında devir, şirkete karşı hüküm ifade etmeyebilir. Anonim şirketlerde ise pay senedinin bastırılıp bastırılmadığına göre usul değişir.",
      },
    ],
    seoAciklama:
      "Anonim ve limited şirket kuruluşu, pay devri, ortaklık sözleşmesi, genel kurul ve ortaklar arası uyuşmazlıklarda avukatlık ve danışmanlık.",
  },
  {
    slug: "vakiflar-ve-dernekler-hukuku",
    baslik: "Vakıflar ve Dernekler Hukuku",
    kisaBaslik: "Vakıflar ve Dernekler",
    ikon: "kurum",
    ozet: "Vakıf ve derneklerin kuruluşu, denetimi, iktisadi işletmeleri ve resmi makamlarla ilişkilerinde uçtan uca hukuki destek.",
    giris:
      "Vakıflar ve dernekler, ticari şirketlerden farklı bir mevzuata tabidir: senet ve tüzük hükümleri, Vakıflar Genel Müdürlüğü ile Sivil Toplumla İlişkiler Genel Müdürlüğü denetimleri, beyanname yükümlülükleri ve yardım toplama izinleri kendi başına bir uzmanlık alanıdır. Büromuz bu alanı yıllardır sürdürdüğü sürekli danışmanlıklarla tanır; kuruluş senedinin ilk cümlesinden yıllık denetim yazışmasına kadar süreci birlikte yürütür.",
    hizmetler: [
      "Vakıf kuruluşu, vakıf senedi hazırlanması ve tescil davasının yürütülmesi",
      "Dernek kuruluşu, tüzük hazırlanması ve tüzük değişikliklerinin tescili",
      "Vakıf senedi değişikliği davaları ve mahkeme sürecinin takibi",
      "Genel kurul ve mütevelli heyeti toplantılarının mevzuata uygun yürütülmesi",
      "Vakıf ve derneklere ait iktisadi işletme kuruluşu ve vergi yükümlülüklerinin planlanması",
      "Vergi muafiyeti ve kamu yararına çalışma statüsü başvurularının hazırlanması",
      "Yardım toplama izinleri, bağış ve şartlı bağış ilişkilerinin sözleşmeye bağlanması",
      "Denetim, uyarı ve idari yaptırım işlemlerine karşı itiraz ve iptal davaları",
      "Şube, temsilcilik ve platform kuruluşu; uluslararası kuruluşlarla iş birliği protokolleri",
    ],
    kimlerIcin: [
      "Yeni vakıf ya da dernek kurmayı planlayan kurucular",
      "Denetim yazısı almış veya idari yaptırımla karşılaşmış kuruluşlar",
      "Vergi muafiyeti ya da kamu yararı statüsü hedefleyen kuruluşlar",
      "İktisadi işletme kurmak isteyen dernek ve vakıflar",
    ],
    surecBasligi: "Vakıf kuruluşu nasıl ilerler?",
    surec: [
      {
        baslik: "Amaç ve malvarlığı",
        metin:
          "Vakfın amacı, faaliyet alanı ve tahsis edilecek malvarlığı belirlenir. Asgari tutar her yıl yeniden açıklanır.",
        sure: "1–2 hafta",
      },
      {
        baslik: "Vakıf senedi",
        metin:
          "Senet metni yazılır: amaç, organlar, mütevelli heyetinin oluşumu, denetim ve tasfiye hükümleri.",
        sure: "1–3 hafta",
      },
      {
        baslik: "Noter ve başvuru",
        metin:
          "Senet noterde düzenlenir, asliye hukuk mahkemesinde tescil davası açılır.",
        sure: "1 hafta",
      },
      {
        baslik: "Genel Müdürlük görüşü",
        metin:
          "Vakıflar Genel Müdürlüğü'nün görüşü alınır; gerekirse senette düzeltme yapılır.",
        sure: "Değişken",
      },
      {
        baslik: "Tescil ve ilan",
        metin:
          "Mahkeme kararıyla tüzel kişilik kazanılır, sicile kayıt ve Resmî Gazete ilanı yapılır.",
        sure: "Mahkemenin takvimine bağlı",
      },
    ],
    sorular: [
      {
        soru: "Vakıf mı kurmalıyım, dernek mi?",
        cevap:
          "Kısaca: vakıf bir mal topluluğudur, dernek bir kişi topluluğudur. Belirli bir malvarlığını kalıcı bir amaca tahsis etmek istiyorsanız vakıf; üyelerin katılımıyla süreklilik kazanacak bir faaliyet yürütecekseniz dernek uygundur. Vakıf kuruluşu mahkeme kararı ve asgari malvarlığı gerektirir; dernek kuruluşu daha hızlıdır. Doğru tercih, amacınıza ve kaynak yapınıza göre değişir.",
      },
      {
        soru: "Derneğimiz ticari faaliyet yapabilir mi?",
        cevap:
          "Dernek doğrudan ticaret yapamaz; ancak tüzüğünde yer alması koşuluyla iktisadi işletme kurarak gelir elde edebilir. Bu işletmenin ayrı defter tutması, vergi mükellefiyeti tesis ettirmesi ve elde ettiği geliri dernek amacına aktarması gerekir. Kurgunun baştan doğru yapılmaması, sonradan ciddi vergi ve denetim sorunları doğurur.",
      },
      {
        soru: "Vakıf senedi sonradan değiştirilebilir mi?",
        cevap:
          "Değiştirilebilir, ancak vakıf senedi değişikliği tek başına yönetim kurulu kararıyla olmaz; mahkemeye başvurularak ve Vakıflar Genel Müdürlüğü'nün görüşü alınarak yapılır. Amaç maddesindeki değişiklikler ayrıca daha sıkı bir denetime tabidir.",
      },
    ],
    seoAciklama:
      "Vakıf kuruluşu, dernek tüzüğü, vakıf senedi değişikliği, iktisadi işletme, vergi muafiyeti ve denetim süreçlerinde hukuki danışmanlık.",
  },
  {
    slug: "sozlesmeler-hukuku",
    baslik: "Sözleşmeler Hukuku",
    kisaBaslik: "Sözleşmeler",
    ikon: "sozlesme",
    ozet: "İmzalamadan önce okunan, uyuşmazlık çıktığında arkasında durulabilen sözleşmeler.",
    giris:
      "İyi sözleşme, taraflar arası ilişki bozulduğunda ne olacağını önceden yazan sözleşmedir. Şablon indirilerek hazırlanan metinlerin çoğu, işler yolundayken kimseyi rahatsız etmez; sorun çıktığında ise hiçbir şey söylemez. Biz sözleşmeleri, en kötü senaryoyu masaya koyarak yazıyoruz: hangi durumda kim, hangi süre içinde, neyi talep edebilecek?",
    hizmetler: [
      "Ticari sözleşmelerin hazırlanması, incelenmesi ve müzakere edilmesi",
      "Bayilik, distribütörlük, franchise ve tedarik sözleşmeleri",
      "Hizmet, eser, danışmanlık ve yazılım geliştirme sözleşmeleri",
      "Kira, ön ödemeli konut satışı ve gayrimenkul satış vaadi sözleşmeleri",
      "Gizlilik (NDA), rekabet yasağı ve niyet mektubu metinleri",
      "Yabancı unsurlu sözleşmelerde uygulanacak hukuk ve yetki maddelerinin kurgulanması",
      "Sözleşmeden dönme, fesih, cezai şart ve tazminat taleplerinin yürütülmesi",
    ],
    kimlerIcin: [
      "Düzenli olarak ticari sözleşme imzalayan işletmeler",
      "Karşı tarafın hazırladığı sözleşmeyi imzalamadan inceletmek isteyenler",
      "Sözleşmesi ihlal edilen ya da haksız yere fesihle karşılaşan taraflar",
    ],
    sorular: [
      {
        soru: "Karşı taraf 'standart sözleşmemiz, değiştiremeyiz' diyor. Ne yapmalıyım?",
        cevap:
          "Bu cümle çoğu zaman bir müzakere tekniğidir. Değiştirilemeyen sözleşmelerde bile ek protokol, yan mektup veya şerh yoluyla denge kurulabilir. Sözleşmeyi imzalamadan önce sorumluluk, fesih ve yetki maddelerinin incelenmesi, sonradan açılacak bir davadan çok daha ucuzdur.",
      },
      {
        soru: "Sözleşmeye cezai şart koymak yeterli koruma sağlar mı?",
        cevap:
          "Cezai şart güçlü bir araçtır, ancak fahiş bulunması hâlinde hâkim tarafından indirilebilir. Ayrıca cezai şartın hangi ihlal için, hangi tutarda ve tazminat hakkına ek mi yoksa onun yerine mi işleyeceği açıkça yazılmazsa, uygulamada tartışmalı hâle gelir.",
      },
    ],
    seoAciklama:
      "Ticari sözleşme hazırlama ve inceleme, bayilik, franchise, hizmet ve gizlilik sözleşmeleri, fesih ve tazminat süreçleri.",
  },
  {
    slug: "is-ve-sosyal-guvenlik-hukuku",
    baslik: "İş ve Sosyal Güvenlik Hukuku",
    kisaBaslik: "İş Hukuku",
    ikon: "calisan",
    ozet: "İşe alımdan çıkışa kadar işveren süreçlerinin kurulması ve işçilik alacağı ile işe iade davalarının yürütülmesi.",
    giris:
      "İş hukuku davalarının sonucunu çoğu zaman dava dilekçesi değil, yıllar önce imzalanan iş sözleşmesi ve tutulan kayıtlar belirler. Bordro, puantaj, fazla mesai onayı, savunma yazısı ve fesih bildirimi doğru kurgulandığında pek çok uyuşmazlık mahkemeye gitmeden çözülür. Büromuz hem işveren tarafında bu düzeni kurar hem de doğmuş uyuşmazlıklarda arabuluculuk ve dava sürecini yürütür.",
    hizmetler: [
      "İş sözleşmeleri, işyeri yönetmelikleri, rekabet yasağı ve gizlilik taahhütleri",
      "Fesih süreçlerinin planlanması: savunma alınması, ihtar ve fesih bildirimlerinin hazırlanması",
      "İşe iade davaları ve zorunlu arabuluculuk sürecinin yürütülmesi",
      "Kıdem, ihbar, fazla mesai, yıllık izin ve UBGT alacaklarına ilişkin davalar",
      "İş kazası ve meslek hastalığından doğan maddi-manevi tazminat ve rücu davaları",
      "Mobbing, eşit davranma yükümlülüğü ve haklı fesih iddialarının değerlendirilmesi",
      "SGK teftiş ve idari para cezalarına karşı itiraz ve iptal başvuruları",
      "Alt işveren (taşeron) ilişkilerinin muvazaa riskine karşı yapılandırılması",
    ],
    kimlerIcin: [
      "Personel istihdam eden her ölçekte işveren",
      "İşten çıkarılan ve alacaklarını talep etmek isteyen çalışanlar",
      "İş kazası geçiren çalışanlar ve yakınları",
      "SGK teftişi geçiren işyerleri",
    ],
    surecBasligi: "İşe iade süreci nasıl ilerler?",
    surec: [
      {
        baslik: "Fesih bildiriminin incelenmesi",
        metin:
          "Bildirimin tebliğ tarihi, sebebin açık ve kesin gösterilip gösterilmediği ve savunma alınıp alınmadığı incelenir.",
        sure: "İlk görüşme",
      },
      {
        baslik: "Arabuluculuk başvurusu",
        metin:
          "Tebliğden itibaren bir ay içinde başvurulur. Bu bir dava şartıdır.",
        sure: "1 ay içinde",
      },
      {
        baslik: "Arabuluculuk görüşmesi",
        metin:
          "Anlaşma sağlanırsa süreç burada biter ve tutanak ilam niteliğindedir.",
        sure: "3–4 hafta",
      },
      {
        baslik: "Dava",
        metin:
          "Anlaşmazlıkla sonuçlanırsa son tutanaktan itibaren iki hafta içinde iş mahkemesinde dava açılır.",
        sure: "2 hafta içinde",
      },
    ],
    sorular: [
      {
        soru: "İşe iade davası açmak için süre ne kadar?",
        cevap:
          "Fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulması gerekir. Arabuluculuk anlaşmazlıkla sonuçlanırsa, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde dava açılır. Bu süreler hak düşürücüdür; kaçırıldığında dava esasa girilmeden reddedilir.",
      },
      {
        soru: "Fazla mesai alacağı nasıl ispatlanır?",
        cevap:
          "Kural olarak fazla çalışmayı iddia eden taraf ispatla yükümlüdür. İşyerinde giriş-çıkış kaydı, puantaj veya elektronik kayıt varsa bunlar esas alınır; yoksa tanık beyanına başvurulur. Bordroda fazla mesai tahakkuku varsa ve bordro imzalıysa, ispat yükü değişir. Bu nedenle işveren tarafında kayıt düzeni, işçi tarafında ise kayıtların temini kritik önemdedir.",
      },
    ],
    seoAciklama:
      "İşe iade, kıdem ve ihbar tazminatı, fazla mesai alacağı, iş kazası tazminatı ve SGK uyuşmazlıklarında avukatlık hizmeti.",
  },
  {
    slug: "gayrimenkul-ve-insaat-hukuku",
    baslik: "Gayrimenkul ve İnşaat Hukuku",
    kisaBaslik: "Gayrimenkul ve İnşaat",
    ikon: "insaat",
    ozet: "Tapu, kat karşılığı inşaat, kentsel dönüşüm ve gayrimenkul uyuşmazlıklarında hukuki temsil.",
    giris:
      "Gayrimenkul, çoğu kişinin ve çoğu şirketin en büyük varlığıdır; buna karşılık en çok belge okunmadan imzalanan alan da burasıdır. Bir tapu kaydındaki şerh, bir imar durumu belgesindeki tek satır ya da kat karşılığı sözleşmesindeki teslim maddesi, yıllar sürecek bir uyuşmazlığın kaynağı olabilir. Biz alım öncesinde inceleme yapıyor, sonrasında ise hak kaybını önleyecek davaları yürütüyoruz.",
    hizmetler: [
      "Alım-satım öncesi tapu, imar ve yapı kayıt durumu incelemesi",
      "Kat karşılığı inşaat sözleşmeleri ve arsa payı düzenlemeleri",
      "Kentsel dönüşüm (6306 sayılı Kanun) süreçleri ve riskli yapı itirazları",
      "Tapu iptali ve tescil, muris muvazaası ve önalım (şufa) davaları",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "Ayıplı yapı, gecikme tazminatı ve teslim uyuşmazlıkları",
      "Kira tespiti, kira uyarlaması ve tahliye davaları",
      "Kamulaştırma, kamulaştırmasız el atma ve bedel artırım davaları",
    ],
    kimlerIcin: [
      "Gayrimenkul alan ya da satan gerçek ve tüzel kişiler",
      "Müteahhitler, arsa sahipleri ve kat malikleri",
      "Kentsel dönüşüm sürecindeki bina sakinleri",
      "Miras yoluyla ortak taşınmaza sahip olanlar",
    ],
    sorular: [
      {
        soru: "Kat karşılığı inşaat sözleşmesinde en kritik madde hangisi?",
        cevap:
          "Teslim tarihi ve gecikme yaptırımı. Bunun hemen ardından, arsa payının hangi aşamada devredileceği gelir. Arsa payının tamamı ruhsat aşamasında devredilmişse ve müteahhit inşaatı yarım bırakmışsa, arsa sahibinin eline geçen sonuç ile sözleşmedeki vaat arasında büyük fark oluşur. Bu nedenle devir, imalat seviyesine bağlanmalıdır.",
      },
      {
        soru: "Muris muvazaası davası ne kadar sürede açılmalı?",
        cevap:
          "Muris muvazaası (mirastan mal kaçırma) iddiasına dayalı tapu iptali ve tescil davası bir zamanaşımı süresine tabi değildir; miras bırakanın ölümünden sonra her zaman açılabilir. Ancak delillerin zamanla kaybolması nedeniyle beklemek pratikte aleyhe sonuç doğurur.",
      },
    ],
    seoAciklama:
      "Tapu iptali ve tescil, kat karşılığı inşaat sözleşmesi, kentsel dönüşüm, ortaklığın giderilmesi ve kira uyuşmazlıklarında avukatlık.",
  },
  {
    slug: "icra-iflas-ve-alacak-tahsili",
    baslik: "İcra, İflas ve Alacak Tahsili",
    kisaBaslik: "İcra ve Alacak",
    ikon: "tahsilat",
    ozet: "Tahsil edilemeyen alacakların takibi, borçlu tarafın korunması ve konkordato süreçleri.",
    giris:
      "Alacak takibinde belirleyici olan hız ve doğru araç seçimidir. Elinizdeki belge bir çek mi, fatura mı, yoksa sadece bir yazışma mı — bu, hangi takip yolunun açık olduğunu ve ne kadar sürede sonuç alınacağını belirler. Büromuz alacaklı tarafta tahsilata odaklanır; borçlu tarafta ise usulsüz takiplere ve haksız hacizlere karşı savunma yürütür.",
    hizmetler: [
      "İlamsız, ilamlı ve kambiyo senedine dayalı icra takipleri",
      "İhtiyati haciz ve ihtiyati tedbir talepleri",
      "İtirazın iptali, itirazın kaldırılması ve menfi tespit davaları",
      "Haciz, satış ve sıra cetveline itiraz süreçleri",
      "İstihkak davaları ve üçüncü kişilerin haklarının korunması",
      "İflas, iflasın ertelenmesi ve konkordato başvuruları",
      "Şirketler için düzenli alacak takip sisteminin kurulması ve raporlanması",
    ],
    kimlerIcin: [
      "Vadesi geçmiş alacağını tahsil edemeyen işletmeler",
      "Hakkında haksız icra takibi başlatılan kişi ve şirketler",
      "Mali güçlük içindeki ve yeniden yapılanma arayan şirketler",
    ],
    surecBasligi: "Alacak takibi nasıl ilerler?",
    surec: [
      {
        baslik: "Belgenin değerlendirilmesi",
        metin:
          "Elinizdeki belge çek/senet mi, fatura mı, yoksa yalnızca yazışma mı — bu, hangi takip yolunun açık olduğunu belirler.",
        sure: "İlk görüşme",
      },
      {
        baslik: "Takibin başlatılması",
        metin:
          "Uygun takip türü seçilerek icra dairesinde takip açılır, ödeme emri tebliğe çıkarılır.",
        sure: "1–2 hafta",
      },
      {
        baslik: "İtiraz süreci",
        metin:
          "Borçlu süresi içinde itiraz ederse takip durur; itirazın iptali veya kaldırılması yoluna gidilir.",
        sure: "İtiraza bağlı",
      },
      {
        baslik: "Haciz ve satış",
        metin:
          "Takip kesinleştiğinde haciz uygulanır, satış talep edilir ve tahsilat yapılır.",
        sure: "Değişken",
      },
    ],
    sorular: [
      {
        soru: "İcra takibine itiraz edilirse süreç durur mu?",
        cevap:
          "İlamsız takipte borçlunun süresi içinde yaptığı itiraz takibi durdurur. Bu durumda alacaklının itirazın kaldırılması ya da itirazın iptali yoluna başvurması gerekir. Bu nedenle takibe geçmeden önce elinizdeki belgenin niteliği doğru değerlendirilmelidir; doğru yol seçildiğinde aylar kazanılır.",
      },
      {
        soru: "Faturaya dayanarak icra takibi yapılabilir mi?",
        cevap:
          "Yapılabilir, ancak fatura tek başına kambiyo senedi değildir; borçlu itiraz ederse takip durur. Faturanın ticari defterlere kaydedilmiş olması, teslim belgeleri ve cari hesap mutabakatı, sonraki aşamada ispat gücünü belirler.",
      },
    ],
    seoAciklama:
      "İcra takibi, itirazın iptali, menfi tespit, ihtiyati haciz, konkordato ve şirketler için alacak tahsili hizmetleri.",
  },
  {
    slug: "bosanma-aile-ve-miras-hukuku",
    baslik: "Boşanma, Aile ve Miras Hukuku",
    kisaBaslik: "Boşanma ve Aile",
    ikon: "aile",
    ozet: "Boşanma, velayet, nafaka, mal rejiminin tasfiyesi ve miras paylaşımında ölçülü ve mahremiyete saygılı temsil.",
    giris:
      "Aile hukuku dosyaları, hukuki olduğu kadar insani dosyalardır. Burada iyi sonuç, yalnızca kazanılan dava değil; tarafların onurunu ve özellikle çocukların yararını koruyarak varılan çözümdür. Büromuz bu dosyalarda mahremiyeti esas alır, mümkün olduğunda anlaşmalı çözümü önerir, gerektiğinde ise hakkı sonuna kadar takip eder.",
    hizmetler: [
      "Anlaşmalı ve çekişmeli boşanma davaları",
      "Velayet, kişisel ilişki kurulması ve velayetin değiştirilmesi",
      "Tedbir, iştirak ve yoksulluk nafakası talepleri; nafaka artırım ve kaldırma davaları",
      "Mal rejiminin tasfiyesi, katılma ve katkı payı alacağı davaları",
      "Evlilik öncesi mal rejimi sözleşmeleri",
      "Aile içi şiddet hâlinde 6284 sayılı Kanun kapsamında koruma tedbirleri",
      "Mirasçılık belgesi, mirasın reddi ve tereke tespiti",
      "Vasiyetname düzenlenmesi, tenkis ve mirasın paylaştırılması davaları",
    ],
    kimlerIcin: [
      "Boşanma sürecine giren ya da boşanma davası açılan eşler",
      "Nafaka ve velayet konusunda hak arayan taraflar",
      "Miras paylaşımında anlaşmazlık yaşayan mirasçılar",
      "Malvarlığını yaşarken planlamak isteyen kişiler",
    ],
    surecBasligi: "Boşanma davası nasıl ilerler?",
    surec: [
      {
        baslik: "İlk değerlendirme",
        metin:
          "Anlaşmalı mı çekişmeli mi yürüyeceği; velayet, nafaka ve mal rejimi bakımından tarafların nerede durduğu konuşulur.",
        sure: "İlk görüşme",
      },
      {
        baslik: "Dava ve protokol",
        metin:
          "Anlaşmalı boşanmada protokol hazırlanır; çekişmeli dosyada dava dilekçesi ve deliller sunulur.",
        sure: "1–2 hafta",
      },
      {
        baslik: "Duruşmalar",
        metin:
          "Anlaşmalı dosya çoğunlukla tek duruşmada biter. Çekişmeli dosyada tanık, sosyal inceleme ve bilirkişi aşamaları olabilir.",
        sure: "Mahkemenin takvimine bağlı",
      },
      {
        baslik: "Karar ve kesinleşme",
        metin:
          "Karar verildikten sonra tebliğ ve kesinleşme süreci işler; nüfusa tescil bundan sonra yapılır.",
        sure: "Değişken",
      },
    ],
    sorular: [
      {
        soru: "Anlaşmalı boşanma ne kadar sürer?",
        cevap:
          "Tarafların evlilik birliğinin en az bir yıl sürmüş olması, protokolde tüm konularda anlaşmış olmaları ve duruşmada bizzat hazır bulunmaları hâlinde dosya çoğunlukla tek duruşmada sonuçlanır. Süreyi belirleyen asıl unsur mahkemenin duruşma günü aralığıdır.",
      },
      {
        soru: "Evlilik içinde alınan ev boşanmada nasıl paylaşılır?",
        cevap:
          "2002 sonrası evliliklerde kural olarak edinilmiş mallara katılma rejimi geçerlidir. Evlilik içinde edinilen malın tapuda kimin üzerine kayıtlı olduğu tek başına belirleyici değildir; malın hangi kaynakla alındığı (kişisel mal mı, edinilmiş mal mı) hesaplamayı değiştirir. Miras veya bağış yoluyla gelen değerler kişisel mal sayılır.",
      },
    ],
    seoAciklama:
      "Boşanma, velayet, nafaka, mal rejimi tasfiyesi, mirasçılık belgesi, vasiyetname ve miras paylaşımı davalarında avukatlık.",
  },
  {
    slug: "tazminat-ve-hukuk-davalari",
    baslik: "Tazminat ve Hukuk Davaları",
    kisaBaslik: "Tazminat ve Hukuk Davaları",
    ikon: "adalet",
    ozet: "Maddi ve manevi tazminat, alacak, tespit ve tapu davaları dahil hukuk yargılamasının bütünü.",
    giris:
      "Hukuk davaları, ceza yargılamasından farklı yürür: burada devlet değil, taraflar iddia eder ve ispatlar. Bu nedenle sonucu belirleyen şey çoğu zaman haklılık değil, haklılığın nasıl ortaya konduğudur. Hangi delilin hangi aşamada sunulduğu, hangi talebin dilekçede yer aldığı ve ıslah hakkının ne zaman kullanıldığı, aynı olayda birbirinden çok farklı sonuçlar doğurur.",
    hizmetler: [
      "Trafik kazasından doğan maddi ve manevi tazminat davaları",
      "İş kazası ve meslek hastalığı tazminatı",
      "Haksız fiil ve sözleşmeye aykırılıktan doğan tazminat talepleri",
      "Alacak, itirazın iptali ve menfi tespit davaları",
      "Tapu iptali ve tescil, ortaklığın giderilmesi davaları",
      "Kişilik haklarına saldırı ve manevi tazminat",
      "Tüketici hakem heyeti başvuruları ve tüketici mahkemesi davaları",
      "Dava şartı arabuluculuk süreçlerinin yürütülmesi",
      "İstinaf ve temyiz başvuruları",
    ],
    kimlerIcin: [
      "Kaza, haksız fiil veya sözleşme ihlali nedeniyle zarara uğrayanlar",
      "Aleyhine tazminat davası açılan kişi ve şirketler",
      "Alacağını tahsil edemeyen ya da haksız borçla karşılaşanlar",
      "İlk derece kararını kanun yoluna taşımak isteyenler",
    ],
    surecBasligi: "Hukuk davası nasıl ilerler?",
    surec: [
      {
        baslik: "Arabuluculuk",
        metin:
          "Ticari davalar, tüketici uyuşmazlıklarının bir kısmı ve kira uyuşmazlıklarında arabuluculuk dava şartıdır; bu yola başvurulmadan açılan dava usulden reddedilir.",
        sure: "3–4 hafta",
      },
      {
        baslik: "Dilekçeler teatisi",
        metin:
          "Dava, cevap, cevaba cevap ve ikinci cevap dilekçeleri verilir. İddia ve savunmanın çerçevesi bu aşamada kapanır.",
        sure: "2–3 ay",
      },
      {
        baslik: "Ön inceleme",
        metin: "Uyuşmazlık konuları belirlenir, deliller toplanır ve tahkikat aşamasına geçilir.",
        sure: "Mahkemenin takvimine bağlı",
      },
      {
        baslik: "Tahkikat ve hüküm",
        metin: "Tanık dinlenir, bilirkişi incelemesi yapılır ve karar verilir. Karara karşı istinaf yolu açıktır.",
        sure: "Değişken",
      },
    ],
    sorular: [
      {
        soru: "Tazminat davasında zamanaşımı ne kadar?",
        cevap:
          "Haksız fiilden doğan tazminat taleplerinde kural olarak zararı ve failini öğrenmeden itibaren iki yıl, her hâlde fiilin işlenmesinden itibaren on yıllık zamanaşımı uygulanır. Fiil aynı zamanda suç oluşturuyorsa ceza zamanaşımı süresi uygulanır ve süre uzar. Sözleşmeye aykırılıkta ise kural on yıldır.",
      },
      {
        soru: "Dava dilekçesinde talebimi eksik yazdım, artırabilir miyim?",
        cevap:
          "Belirsiz alacak davası olarak açılmışsa miktar sonradan artırılabilir. Aksi hâlde tahkikat sona erene kadar bir kez ıslah yoluna başvurularak talep artırılabilir. Bu hakkın bir kez kullanılabildiği ve süresi bulunduğu için, dava açılırken talep türünün doğru seçilmesi belirleyicidir.",
      },
      {
        soru: "Davayı kaybedersem karşı tarafın avukat ücretini öder miyim?",
        cevap:
          "Evet. Yargılama giderleri ve karşı taraf vekâlet ücreti, kural olarak haksız çıkan tarafa yüklenir. Kısmen kabul hâlinde giderler oranlanır. Bu risk, dava açmadan önce mutlaka hesaba katılmalıdır; ilk değerlendirmede bunu da paylaşırız.",
      },
    ],
    seoAciklama:
      "Trafik kazası ve iş kazası tazminatı, alacak ve menfi tespit davaları, tapu iptali, tüketici uyuşmazlıkları ve istinaf başvurularında avukatlık.",
  },
  {
    slug: "ceza-hukuku",
    baslik: "Ceza Hukuku",
    kisaBaslik: "Ceza Hukuku",
    ikon: "adalet",
    ozet: "Soruşturmanın ilk saatinden istinaf ve temyize kadar şüpheli, sanık ve mağdur vekilliği.",
    giris:
      "Ceza dosyalarında en değerli an, çoğu zaman ilk ifadedir. Kolluk aşamasında verilen bir cümle, yıllar sürecek yargılamanın seyrini belirleyebilir. Büromuz müdafilik ve mağdur vekilliği görevlerini, dosyanın ilk gününden itibaren aktif savunma anlayışıyla yürütür; müvekkilini süreç boyunca ne olacağını bilerek ilerleyecek şekilde bilgilendirir.",
    hizmetler: [
      "Soruşturma aşamasında müdafilik: ifade, gözaltı ve sorgu süreçleri",
      "Tutuklamaya itiraz, adli kontrol ve tahliye talepleri",
      "Ekonomik ve ticari suçlar: dolandırıcılık, güveni kötüye kullanma, sahtecilik",
      "Bilişim suçları ve dijital delillerin değerlendirilmesi",
      "Şerefe karşı suçlar: hakaret, iftira ve tehdit dosyaları",
      "Kovuşturma aşamasında savunma, istinaf ve temyiz başvuruları",
      "Mağdur ve katılan vekilliği; suç duyurusunda bulunulması",
      "Uzlaştırma ve önödeme kurumlarının değerlendirilmesi",
    ],
    kimlerIcin: [
      "Hakkında soruşturma başlatılan kişi ve şirket yetkilileri",
      "Suç mağduru olan ve hakkını arayan kişiler",
      "Ticari faaliyeti nedeniyle ceza soruşturmasıyla karşılaşan işletmeler",
    ],
    sorular: [
      {
        soru: "İfadeye çağrıldım, avukat olmadan gitsem olur mu?",
        cevap:
          "Hukuken mümkündür, ancak tavsiye edilmez. İfade tutanağı dosyanın en kalıcı belgelerinden biridir ve sonradan düzeltilmesi çok güçtür. Müdafi, isnadın ne olduğunu, hangi delillere dayandığını ve susma hakkının nasıl kullanılacağını değerlendirerek ifadenin doğru zeminde alınmasını sağlar.",
      },
      {
        soru: "Şikâyetten vazgeçersem dava düşer mi?",
        cevap:
          "Yalnızca takibi şikâyete bağlı suçlarda. Bu suçlarda şikâyetten vazgeçme soruşturmayı veya davayı sona erdirir. Kamu davası olarak yürüyen suçlarda ise vazgeçme davayı düşürmez; olsa olsa cezanın belirlenmesinde dikkate alınabilir.",
      },
    ],
    seoAciklama:
      "Ceza soruşturması ve kovuşturmasında müdafilik, tutuklamaya itiraz, ekonomik suçlar, bilişim suçları ve mağdur vekilliği.",
  },
  {
    slug: "idare-hukuku",
    baslik: "İdare Hukuku",
    kisaBaslik: "İdare Hukuku",
    ikon: "devlet",
    ozet: "İdari işlemlerin iptali, kamu ihaleleri, idari para cezaları ve memur işlemlerinde temsil.",
    giris:
      "Devletle olan uyuşmazlıklarda süreler kısa ve katıdır: çoğu idari işlem için tebliğden itibaren altmış gün. Bu süre kaçırıldığında, işlem ne kadar hukuka aykırı olursa olsun sonuç alınamaz. Bu nedenle idari bir yazı elinize geçtiği gün değerlendirilmelidir; beklemenin bedeli, çoğu dosyada davanın kendisinden ağırdır.",
    hizmetler: [
      "İdari işlemlerin iptali ve tam yargı (tazminat) davaları",
      "İdari para cezalarına itiraz ve iptal başvuruları",
      "Kamu ihale süreçleri, şikâyet ve itirazen şikâyet başvuruları (KİK)",
      "İmar, ruhsat ve yapı kayıt belgesi uyuşmazlıkları",
      "Memur disiplin soruşturmaları, atama ve görevden alma işlemleri",
      "Belediye işlemleri ve kamulaştırma uyuşmazlıkları",
      "Kamu görevlilerine açılan rücu davaları",
    ],
    kimlerIcin: [
      "İdari yaptırım veya para cezası ile karşılaşan kişi ve şirketler",
      "Kamu ihalelerine katılan yükleniciler",
      "Ruhsat ve imar işlemleri nedeniyle hak kaybına uğrayanlar",
      "Hakkında disiplin soruşturması yürütülen kamu görevlileri",
    ],
    sorular: [
      {
        soru: "İdari para cezasına itiraz süresi ne kadar?",
        cevap:
          "Kabahatler Kanunu kapsamındaki idari para cezalarında tebliğden itibaren on beş gün içinde sulh ceza hâkimliğine başvurulur. Ancak cezayı veren idareye ve dayandığı kanuna göre görevli merci ve süre değişebilir; bu nedenle tebligatın hangi kanuna dayandığı ilk bakılması gereken noktadır.",
      },
      {
        soru: "İptal davası açma süresini kaçırdım, yapılacak bir şey var mı?",
        cevap:
          "Kural olarak altmış günlük süre hak düşürücüdür ve geçtikten sonra iptal davası açılamaz. Ancak işlemin tebliğinin usulüne uygun yapılmamış olması, işlemin sürekli etkili olması ya da idareye yapılan bir başvurunun süreyi durdurmuş olması gibi ihtimaller vardır. Bu nedenle süre geçmiş görünse de tebligat evrakının incelenmesinde fayda vardır.",
      },
    ],
    seoAciklama:
      "İptal davası, tam yargı davası, idari para cezası itirazı, kamu ihalesi itirazen şikâyet ve imar uyuşmazlıklarında avukatlık.",
  },
  {
    slug: "kisisel-verilerin-korunmasi-ve-bilisim-hukuku",
    baslik: "Kişisel Verilerin Korunması ve Bilişim Hukuku",
    kisaBaslik: "KVKK ve Bilişim",
    ikon: "kalkan",
    ozet: "KVKK uyum projeleri, VERBİS kaydı, veri ihlali yönetimi ve dijital ortamdaki hak ihlalleri.",
    giris:
      "KVKK uyumu bir kerelik bir belge işi değil, sürdürülebilir bir düzendir. Aydınlatma metni yayımlamak tek başına yeterli değildir; verinin nereden geldiği, nerede durduğu, kimlerle paylaşıldığı ve ne zaman silineceği yazılı hâle gelmeden uyumdan söz edilemez. Büromuz uyum sürecini işletmenin gerçek iş akışına göre kurar, kâğıt üstünde kalan metinler üretmez.",
    hizmetler: [
      "KVKK uyum projesi: veri envanteri, işleme amaçları ve hukuki sebeplerin belirlenmesi",
      "Aydınlatma metinleri, açık rıza formları ve saklama-imha politikası hazırlanması",
      "VERBİS kaydı ve güncellemeleri",
      "Veri işleyen sözleşmeleri ve yurt dışına veri aktarım yapıları",
      "Veri ihlali bildirimi ve Kurul incelemelerinde temsil",
      "Kurul kararlarına ve idari para cezalarına karşı iptal davaları",
      "İnternette hakaret, itibar zedeleme ve içeriğin çıkarılması / erişimin engellenmesi başvuruları",
      "E-ticaret mevzuatı uyumu, mesafeli satış sözleşmeleri ve site metinleri",
    ],
    kimlerIcin: [
      "Müşteri veya çalışan verisi işleyen tüm işletmeler",
      "VERBİS yükümlülüğü bulunan veri sorumluları",
      "Veri ihlali yaşayan ya da Kurul incelemesiyle karşılaşan şirketler",
      "İnternette kişilik hakkı ihlaline uğrayan kişi ve kurumlar",
    ],
    surecBasligi: "KVKK uyum projesi nasıl ilerler?",
    surec: [
      {
        baslik: "Mevcut durum analizi",
        metin:
          "Birimlerle görüşülerek hangi verinin nereden geldiği, nerede tutulduğu ve kimlerle paylaşıldığı çıkarılır.",
        sure: "2–4 hafta",
      },
      {
        baslik: "Veri envanteri",
        metin:
          "Her işleme faaliyeti için amaç, hukuki sebep, saklama süresi ve alıcı grubu belirlenir.",
        sure: "2–3 hafta",
      },
      {
        baslik: "Belgelerin hazırlanması",
        metin:
          "Aydınlatma metinleri, açık rıza formları, saklama-imha politikası ve veri işleyen sözleşmeleri yazılır.",
        sure: "2–3 hafta",
      },
      {
        baslik: "VERBİS ve sürdürme",
        metin:
          "Kayıt yapılır veya güncellenir; başvuru yanıtlama ve periyodik imha süreçleri takvime bağlanır.",
        sure: "1 hafta + süreklilik",
      },
    ],
    sorular: [
      {
        soru: "Küçük bir işletmeyim, KVKK beni de bağlar mı?",
        cevap:
          "Evet. Kanun, çalışan veya müşteri verisi işleyen herkesi kapsar; ölçek yalnızca VERBİS kayıt yükümlülüğü gibi bazı istisnalarda rol oynar. Aydınlatma yükümlülüğü, veri güvenliği tedbirleri ve ilgili kişi başvurularını yanıtlama zorunluluğu işletme büyüklüğünden bağımsızdır.",
      },
      {
        soru: "Veri ihlali yaşandığında ne yapmalıyım?",
        cevap:
          "İhlali öğrendiğinizden itibaren gecikmeksizin ve en geç 72 saat içinde Kişisel Verileri Koruma Kurulu'na bildirim yapmanız gerekir; etkilenen ilgili kişilere de makul en kısa sürede bildirim yapılır. İlk saatlerde alınan teknik ve hukuki adımlar, sonraki idari yaptırımın ölçüsünü doğrudan etkiler.",
      },
    ],
    seoAciklama:
      "KVKK uyum danışmanlığı, VERBİS kaydı, aydınlatma metni, veri ihlali bildirimi ve internette içerik kaldırma başvuruları.",
  },
  {
    slug: "fikri-ve-sinai-mulkiyet-hukuku",
    baslik: "Fikri ve Sınai Mülkiyet Hukuku",
    kisaBaslik: "Fikri Mülkiyet",
    ikon: "marka",
    ozet: "Marka, patent, tasarım ve telif haklarının tescili, korunması ve ihlallere karşı takibi.",
    giris:
      "Bir markanın değeri, çoğu zaman tescil belgesinde değil; o belgenin arkasında durabilme kapasitesindedir. Tescil ettirmeden büyüyen markalar, ilk taklitle karşılaştıklarında ellerinde hiçbir hızlı araç bulamaz. Biz koruma zincirini baştan kuruyoruz: doğru sınıfta tescil, kullanım delillerinin arşivlenmesi ve ihlal hâlinde hızlı müdahale.",
    hizmetler: [
      "Marka, tasarım ve patent başvurularının hazırlanması ve takibi",
      "Benzerlik araştırması ve tescil öncesi risk değerlendirmesi",
      "Yayına itiraz, karara itiraz ve TÜRKPATENT nezdindeki süreçler",
      "Marka hükümsüzlüğü ve iptali davaları",
      "Marka ve tasarım hakkına tecavüzün önlenmesi, tazminat davaları",
      "Lisans, devir ve franchise kapsamında fikri hak düzenlemeleri",
      "Telif hakkı ihlalleri ve eser sahipliğinden doğan uyuşmazlıklar",
      "Alan adı (domain) uyuşmazlıkları ve haksız rekabet",
    ],
    kimlerIcin: [
      "Yeni marka oluşturan girişimci ve şirketler",
      "Markası taklit edilen hak sahipleri",
      "Yayına itirazla karşılaşan başvuru sahipleri",
      "Yazılım, tasarım ve içerik üreten işletmeler",
    ],
    surecBasligi: "Marka tescili nasıl ilerler?",
    surec: [
      {
        baslik: "Benzerlik araştırması",
        metin:
          "Aynı ve benzer markalar taranır, tescil edilecek sınıflar belirlenir. Bu adım ileride çıkacak itirazın en büyük önleyicisidir.",
        sure: "3–5 gün",
      },
      {
        baslik: "Başvuru",
        metin:
          "TÜRKPATENT'e başvuru yapılır ve şekli inceleme tamamlanır.",
        sure: "1 gün",
      },
      {
        baslik: "Yayın",
        metin:
          "Başvuru Resmî Marka Bülteni'nde yayımlanır ve iki aylık itiraz süresi işler.",
        sure: "2 ay",
      },
      {
        baslik: "Tescil",
        metin:
          "İtiraz gelmezse veya itiraz reddedilirse belge düzenlenir.",
        sure: "Değişken",
      },
    ],
    sorular: [
      {
        soru: "Şirket unvanımı ticaret siciline tescil ettirdim, marka tesciline gerek var mı?",
        cevap:
          "Var. Ticaret unvanı ile marka farklı korumalardır. Unvan tescili, aynı ibarenin bir başkası tarafından marka olarak tescil edilmesini kendiliğinden engellemez. Ticari hayatta kullandığınız isim, logo ve slogan için ayrıca marka tescili yaptırmak gerekir.",
      },
      {
        soru: "Marka tescili ne kadar sürer?",
        cevap:
          "İtiraz gelmeyen dosyalarda başvurudan belge aşamasına kadar geçen süre genellikle birkaç ayı bulur; yayına itiraz edilmesi hâlinde süreç önemli ölçüde uzar. Bu nedenle başvuru öncesi benzerlik araştırması, hem süre hem masraf açısından belirleyicidir.",
      },
    ],
    seoAciklama:
      "Marka tescili, yayına itiraz, marka hükümsüzlüğü, patent ve tasarım başvuruları ile telif hakkı ihlallerinde hukuki destek.",
  },
  {
    slug: "surekli-hukuki-danismanlik",
    baslik: "Sürekli Hukuki Danışmanlık",
    kisaBaslik: "Sürekli Danışmanlık",
    ikon: "danismanlik",
    ozet: "Şirketiniz, vakfınız veya derneğiniz için aylık sabit ücretle, ihtiyaç anında değil sürekli erişilebilen hukuk desteği.",
    giris:
      "Kurumsal danışmanlığın amacı dava kazanmak değil, dava gerektirmeyen bir düzen kurmaktır. Sürekli danışmanlık ilişkisinde imzalanacak sözleşmeleri önce biz okuruz, personel çıkışını fesihten önce planlarız, resmi yazılara süresi içinde yanıt veririz. Karar alma anında yanınızda olan bir hukukçu, sonradan gelen bir davadan her zaman daha ucuzdur.",
    hizmetler: [
      "Aylık sabit ücretle sınırsız hukuki görüş ve telefon desteği",
      "İmzalanacak tüm sözleşmelerin önceden incelenmesi ve revize edilmesi",
      "Yönetim kurulu ve genel kurul süreçlerinin takvimlenmesi",
      "İnsan kaynakları süreçlerinin (işe alım, disiplin, fesih) hukuka uygun yürütülmesi",
      "Resmi kurum yazışmalarının hazırlanması ve süre takibi",
      "Kurum içi bilgilendirme ve mevzuat değişikliği bültenleri",
      "Yıllık hukuki risk değerlendirmesi ve raporlama",
      "Doğan uyuşmazlıklarda dava ve icra süreçlerinin yürütülmesi",
    ],
    kimlerIcin: [
      "Düzenli sözleşme ve personel trafiği olan şirketler",
      "Vakıf ve dernekler ile iktisadi işletmeleri",
      "İç hukuk birimi bulunmayan orta ölçekli işletmeler",
      "Büyüme sürecinde kurumsallaşmak isteyen aile şirketleri",
    ],
    sorular: [
      {
        soru: "Sürekli danışmanlık dava ücretlerini de kapsar mı?",
        cevap:
          "Hayır. Sürekli danışmanlık; görüş, sözleşme incelemesi, yazışma ve süreç yönetimini kapsar. Dava ve icra takipleri, Avukatlık Asgari Ücret Tarifesi esas alınarak ayrıca ücretlendirilir. Danışmanlık müvekkillerimiz için bu dosyalarda özel koşullar uygulanır.",
      },
      {
        soru: "Küçük bir şirket için sürekli danışmanlık pahalı olmaz mı?",
        cevap:
          "Aylık danışmanlık bedeli, çalışan sayısı ve iş hacmine göre belirlenir. Karşılaştırma yapılırken tek bir işçilik alacağı davasının ya da yanlış kurgulanmış tek bir sözleşmenin maliyeti dikkate alınmalıdır. İlk görüşmede işletmenizin gerçek ihtiyacını birlikte ölçüyor, gerekmiyorsa danışmanlık önermiyoruz.",
      },
    ],
    seoAciklama:
      "Şirketler, vakıflar ve dernekler için aylık sürekli hukuki danışmanlık, sözleşme inceleme ve kurumsal risk yönetimi.",
  },
];

export function alanBul(slug: string) {
  return calismaAlanlari.find((alan) => alan.slug === slug) ?? null;
}
