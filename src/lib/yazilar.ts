/**
 * Yayin (blog) yazilarinin yerel yedegi.
 *
 * Bu yazilar genel hukuki bilgilendirme amaci tasir; somut bir olaya iliskin
 * hukuki gorus degildir ve avukat-muvekkil iliskisi kurmaz. Yonetim panelinden
 * yeni yazi eklendiginde liste otomatik olarak panelden beslenir.
 */

export type YaziBlogu =
  | { tur: "paragraf"; metin: string }
  | { tur: "altBaslik"; metin: string }
  | { tur: "liste"; maddeler: string[] }
  | { tur: "vurgu"; metin: string };

export type Yazi = {
  slug: string;
  baslik: string;
  ozet: string;
  /**
   * Yazinin sordugu soruya iki-uc cumlede verilen dogrudan cevap.
   *
   * Hem okur icin (sayfanin en ustunde durur, tikladigi anda cevabini
   * alir) hem de arama ve yapay zeka cevaplari icin yazilir: bir dil
   * modeli sayfayi ozetlerken buradaki cumleyi alintilar. Bu yuzden
   * kendi basina ayakta durmali, "yukarida anlatildigi gibi" dememeli.
   */
  kisaCevap: string;
  kategori: string;
  /**
   * Yazinin dayandigi mevzuat.
   *
   * Hukuk metninde kaynagin gorunur olmasi, okurun metni dogrulayabilmesini
   * saglar; arama ve ozetleme sistemleri de kaynakli metni daha guvenilir
   * degerlendirir. Madde numaralari yayindan once teyit edilmelidir.
   */
  kaynaklar?: { baslik: string; adres?: string }[];
  yazarSlug: string;
  tarih: string;
  govde: YaziBlogu[];
};

export const yazilar: Yazi[] = [
  {
    slug: "ise-iade-davasinda-sureler",
    baslik: "İşe İade Davasında Süreler: Bir Ayı Kaçırmamak",
    ozet:
      "İşe iade davalarının önemli bir bölümü esasa girilmeden reddediliyor. Nedeni çoğu zaman haksızlık değil, kaçırılmış bir süre.",
    kisaCevap:
      "İşe iade davasında birbirini izleyen iki katı süre vardır: fesih bildiriminin tebliğinden itibaren bir ay içinde arabulucuya başvurulmalı, arabuluculuk anlaşmazlıkla sonuçlanırsa son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılmalıdır. Her iki süre de hak düşürücüdür; kaçırıldığında dava esasa girilmeden reddedilir ve hâkim bu süreleri kendiliğinden gözetir.",
    kategori: "İş Hukuku",
    kaynaklar: [
      { baslik: "4857 sayılı İş Kanunu m.18–21 — feshin geçerli sebebe dayandırılması ve işe iade" },
      { baslik: "7036 sayılı İş Mahkemeleri Kanunu m.3 — dava şartı olarak arabuluculuk" },
      { baslik: "4857 sayılı İş Kanunu m.20 — ispat yükü" },
    ],
    yazarSlug: "atakan-demirkan",
    tarih: "2026-08-18",
    govde: [
      {
        tur: "paragraf",
        metin:
          "İş güvencesi hükümlerinden yararlanan bir çalışan işten çıkarıldığında, feshin geçersizliğini ileri sürerek işe iadesini talep edebilir. Bu hakkın kullanımı, İş Kanunu'nda birbirini izleyen iki katı süreye bağlanmıştır ve bu sürelerin kaçırılması hakkın tamamen kaybına yol açar.",
      },
      { tur: "altBaslik", metin: "Birinci süre: bir ay içinde arabulucuya başvuru" },
      {
        tur: "paragraf",
        metin:
          "Fesih bildiriminin çalışana tebliğ edildiği tarihten itibaren bir ay içinde arabulucuya başvurulması gerekir. Bu bir dava şartıdır: arabuluculuğa başvurulmadan doğrudan açılan işe iade davası, esasa girilmeden usulden reddedilir. Sürenin başlangıcı fesih bildiriminin yapıldığı gün değil, çalışana ulaştığı gündür; bu ayrım özellikle posta veya noter yoluyla yapılan fesihlerde önem taşır.",
      },
      { tur: "altBaslik", metin: "İkinci süre: iki hafta içinde dava" },
      {
        tur: "paragraf",
        metin:
          "Arabuluculuk görüşmesi anlaşmazlıkla sonuçlanırsa, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılmalıdır. Uygulamada en sık yapılan hata, arabuluculuk sürecinin sona ermesinden sonra dosyanın rafa kaldırılması ve bu iki haftalık sürenin fark edilmeden geçmesidir.",
      },
      {
        tur: "vurgu",
        metin:
          "Her iki süre de hak düşürücü niteliktedir. Hâkim bu süreleri kendiliğinden gözetir; karşı tarafın itiraz etmesine gerek yoktur.",
      },
      { tur: "altBaslik", metin: "Kimler işe iade davası açabilir?" },
      {
        tur: "liste",
        maddeler: [
          "İşyerinde otuz veya daha fazla işçi çalıştırılıyor olmalıdır.",
          "Çalışanın en az altı aylık kıdemi bulunmalıdır (yer altı işlerinde bu şart aranmaz).",
          "İş sözleşmesi belirsiz süreli olmalıdır.",
          "Fesih, işveren tarafından yapılmış olmalıdır.",
          "Çalışan, işveren vekili niteliğinde bir konumda bulunmamalıdır.",
        ],
      },
      { tur: "altBaslik", metin: "Feshin geçerli sebebe dayandığını kim ispatlar?" },
      {
        tur: "paragraf",
        metin:
          "İspat yükü işverendedir. İşveren, feshin işletmenin gereklerinden veya çalışanın yetersizliğinden ya da davranışlarından kaynaklanan geçerli bir sebebe dayandığını ortaya koymak zorundadır. Bu nedenle işveren tarafında savunma alınması, yazılı uyarıların dosyalanması ve fesih bildiriminde sebebin açık ve kesin biçimde gösterilmesi belirleyicidir.",
      },
      { tur: "altBaslik", metin: "Dava kazanılırsa ne olur?" },
      {
        tur: "paragraf",
        metin:
          "Mahkeme feshin geçersizliğine karar verirse, çalışanın kesinleşen kararın kendisine tebliğinden itibaren on iş günü içinde işverene başvurarak işe başlama talebinde bulunması gerekir. İşveren bir ay içinde işe başlatmazsa, mahkemenin belirlediği işe başlatmama tazminatı ile boşta geçen süreye ilişkin ücret ödenir. Bu son adımın atlanması, kazanılmış bir davanın sonuçsuz kalmasına yol açar.",
      },
      {
        tur: "paragraf",
        metin:
          "Bu yazı genel bilgilendirme amacı taşır. Somut durumunuzun değerlendirilmesi için fesih bildirimi, iş sözleşmesi ve bordrolarınızla birlikte bir avukata başvurmanız gerekir.",
      },
    ],
  },
  {
    slug: "vakif-mi-dernek-mi",
    baslik: "Vakıf mı, Dernek mi? Kuruluş Öncesi Karar Rehberi",
    ozet:
      "İkisi de kâr amacı gütmez, ikisi de tüzel kişiliğe sahiptir. Ancak kuruluş şartları, denetim rejimi ve karar organları birbirinden ayrılır.",
    kisaCevap:
      "Vakıf bir mal topluluğu, dernek bir kişi topluluğudur. Belirli bir malvarlığını kalıcı olarak bir amaca tahsis edecekseniz vakıf, üyelerin katılımıyla süreklilik kazanacak bir faaliyet yürütecekseniz dernek uygundur. Dernek kuruluşu mülki idare amirliğine başvuruyla haftalar içinde tamamlanır ve asgari malvarlığı aranmaz; vakıf kuruluşu ise mahkeme kararı ve asgari malvarlığı gerektirir, aylar sürer ve amaç maddesinin sonradan değiştirilmesi güçtür.",
    kategori: "Vakıflar ve Dernekler",
    kaynaklar: [
      { baslik: "4721 sayılı Türk Medeni Kanunu m.56–100 — dernekler" },
      { baslik: "4721 sayılı Türk Medeni Kanunu m.101–117 — vakıflar" },
      { baslik: "5253 sayılı Dernekler Kanunu" },
      { baslik: "5737 sayılı Vakıflar Kanunu" },
    ],
    yazarSlug: "ali-kaan-kilicoglu",
    tarih: "2026-07-29",
    govde: [
      {
        tur: "paragraf",
        metin:
          "Bir amacı kurumsal bir yapıya kavuşturmak isteyen kurucuların önündeki ilk soru budur. Karar, yalnızca hukuki bir tercih değil; kaynak yapısını, karar organlarını ve gelecekteki denetim yükünü belirleyen bir kurgu tercihidir.",
      },
      { tur: "altBaslik", metin: "Temel ayrım: mal topluluğu ve kişi topluluğu" },
      {
        tur: "paragraf",
        metin:
          "Vakıf bir mal topluluğudur: belirli bir malvarlığının, kalıcı olarak belirli bir amaca tahsis edilmesiyle kurulur. Dernek ise bir kişi topluluğudur: ortak bir amaç etrafında bir araya gelen en az yedi gerçek veya tüzel kişinin birleşmesiyle doğar. Bu ayrım, kurumun ilerideki tüm işleyişini belirler.",
      },
      { tur: "altBaslik", metin: "Kuruluş süreci" },
      {
        tur: "liste",
        maddeler: [
          "Vakıf: Noterde düzenlenen vakıf senedi ile asliye hukuk mahkemesinde tescil davası açılır. Vakıflar Genel Müdürlüğü'nün görüşü alınır. Amaca özgülenen asgari bir malvarlığı bulunması gerekir; bu tutar her yıl yeniden belirlenir.",
          "Dernek: Kurucuların hazırladığı tüzük ve kuruluş bildirimi ile mülki idare amirliğine başvurulur. Tüzel kişilik, başvuru anında kazanılır. Asgari malvarlığı şartı yoktur.",
        ],
      },
      {
        tur: "vurgu",
        metin:
          "Pratik sonuç: dernek kuruluşu haftalar, vakıf kuruluşu aylar sürer. Vakıf kurulduktan sonra ise amaç maddesinin değiştirilmesi mahkeme kararına bağlıdır ve oldukça güçtür.",
      },
      { tur: "altBaslik", metin: "Karar organları" },
      {
        tur: "paragraf",
        metin:
          "Dernekte en yetkili organ, üyelerden oluşan genel kuruldur; yönetim genel kurula karşı sorumludur ve üyeler yönetimi değiştirebilir. Vakıfta ise üyelik yoktur; senette belirlenen mütevelli heyeti karar organıdır ve heyetin nasıl oluşacağı senetle sabitlenir. Kurucuların kontrolü uzun vadede korumak istediği yapılarda vakıf, katılımcı bir yapı hedeflenen durumlarda dernek öne çıkar.",
      },
      { tur: "altBaslik", metin: "Gelir ve iktisadi faaliyet" },
      {
        tur: "paragraf",
        metin:
          "Her iki yapı da doğrudan ticaret yapamaz; ancak tüzük veya senette yer alması koşuluyla iktisadi işletme kurarak gelir elde edebilir. Bu işletmenin ayrı vergi mükellefiyeti tesis ettirmesi ve defter tutması gerekir. Kurgunun baştan doğru yapılmaması, sonradan geriye dönük vergi tarhiyatı ve cezayla sonuçlanabilir.",
      },
      { tur: "altBaslik", metin: "Vergi muafiyeti ve kamu yararı" },
      {
        tur: "paragraf",
        metin:
          "Vakıflar için Cumhurbaşkanı kararıyla vergi muafiyeti, dernekler için kamu yararına çalışma statüsü tanınabilir. Her iki statü de belirli bir faaliyet geçmişi, gelir düzeyi ve amaca yönelik harcama oranı şartına bağlıdır. Bu statüler kuruluşta değil, sonraki yıllarda kazanılır; ancak senet ve tüzük metinleri bu hedefi baştan gözeterek yazılmalıdır.",
      },
      {
        tur: "paragraf",
        metin:
          "Kuruluş belgesi bir kez yazılıp mahkemeye ya da idareye sunulduktan sonra değiştirilmesi hem zaman hem masraf gerektirir. Bu nedenle senet ve tüzük metinlerinin, kurumun beş yıl sonraki hâli düşünülerek hazırlanması yerinde olur.",
      },
    ],
  },
  {
    slug: "kat-karsiligi-insaat-sozlesmesi-arsa-sahibi",
    baslik: "Kat Karşılığı İnşaat Sözleşmesinde Arsa Sahibini Koruyan Beş Madde",
    ozet:
      "Arsa sahibi için asıl risk inşaatın gecikmesi değil; arsa payının, karşılığı alınmadan devredilmiş olmasıdır.",
    kisaCevap:
      "Kat karşılığı inşaat sözleşmesinde arsa sahibini koruyan en kritik madde, arsa payının tamamının ruhsat aşamasında değil imalat seviyesine bağlı olarak kademeli devredilmesidir. Bunun yanında teslim tarihi ile gecikme yaptırımı, hangi bağımsız bölümün kime ait olacağı, müteahhidin devir yasağı ve fesih hâlinde tapunun akıbeti açıkça yazılmalıdır. Sözleşmenin tapu kütüğüne şerh edilmesi, hakkın üçüncü kişilere karşı ileri sürülebilmesini sağlar.",
    kategori: "Gayrimenkul",
    kaynaklar: [
      { baslik: "6098 sayılı Türk Borçlar Kanunu m.470 vd. — eser sözleşmesi" },
      { baslik: "4721 sayılı Türk Medeni Kanunu m.1009 — şahsi hakların tapuya şerhi" },
      { baslik: "634 sayılı Kat Mülkiyeti Kanunu" },
    ],
    yazarSlug: "atakan-demirkan",
    tarih: "2026-06-11",
    govde: [
      {
        tur: "paragraf",
        metin:
          "Kat karşılığı inşaat sözleşmesi, arsa sahibinin taşınmazının bir bölümünü devretmesi karşılığında müteahhidin bağımsız bölüm teslim etmeyi üstlendiği çift taraflı bir sözleşmedir. Sözleşmenin resmî şekilde, yani noterde düzenleme şeklinde yapılması geçerlilik şartıdır. Ancak şekil şartına uyulması tek başına arsa sahibini korumaz; koruma, metnin içeriğinden gelir.",
      },
      { tur: "altBaslik", metin: "1. Arsa payı devri imalat seviyesine bağlanmalı" },
      {
        tur: "paragraf",
        metin:
          "Uygulamada en ağır sonuçlu hata, arsa payının tamamının ruhsat aşamasında müteahhide devredilmesidir. İnşaat yarım kaldığında arsa sahibi hem taşınmazının bir bölümünü kaybetmiş hem de karşılığını alamamış olur. Devir, imalat seviyesine kademelendirilmelidir: kaba inşaat tamamlandığında belirli bir oran, iskân alındığında kalanı.",
      },
      { tur: "altBaslik", metin: "2. Teslim tarihi ve gecikme yaptırımı açık olmalı" },
      {
        tur: "paragraf",
        metin:
          "Teslim tarihi, ruhsat alınmasına bağlı belirsiz bir ifadeyle değil; belirli bir tarihe ya da ruhsat tarihinden itibaren belirli bir ay sayısına bağlanmalıdır. Gecikme hâlinde günlük veya aylık kira bedeli üzerinden tazminat öngörülmeli, bu tazminatın cezai şart mı yoksa gerçek zarar tazmini mi olduğu ve ikisinin birlikte istenip istenemeyeceği yazılmalıdır.",
      },
      { tur: "altBaslik", metin: "3. Hangi bağımsız bölümün kime ait olacağı belirlenmeli" },
      {
        tur: "paragraf",
        metin:
          "\"Arsa sahibine yüzde kırk verilecektir\" ifadesi tek başına yetersizdir. Hangi blokta, hangi katta, hangi cephede ve kaç metrekarelik bağımsız bölümlerin arsa sahibine ait olacağı, mimari projeye atıfla ve bağımsız bölüm numaralarıyla belirlenmelidir. Aksi hâlde paylaşım aşamasında yeni bir uyuşmazlık doğar.",
      },
      { tur: "altBaslik", metin: "4. Devir yasağı ve alt yükleniciye ilişkin hüküm" },
      {
        tur: "paragraf",
        metin:
          "Müteahhidin sözleşmeden doğan haklarını arsa sahibinin yazılı onayı olmadan üçüncü kişilere devredemeyeceği açıkça yazılmalıdır. Aksi hâlde arsa sahibi, hiç tanımadığı ve mali durumunu bilmediği bir yüklenici ile karşı karşıya kalabilir.",
      },
      { tur: "altBaslik", metin: "5. Fesih hâlinde tapunun akıbeti" },
      {
        tur: "paragraf",
        metin:
          "Sözleşmenin haklı sebeple feshi hâlinde devredilmiş arsa paylarının iadesi, hangi usulle ve hangi sürede gerçekleşeceği yazılmalıdır. Ayrıca müteahhidin üçüncü kişilere yaptığı satışların akıbeti düzenlenmelidir; aksi hâlde iyiniyetli üçüncü kişilerin kazanımı nedeniyle arsa sahibi sadece tazminatla yetinmek zorunda kalabilir.",
      },
      {
        tur: "vurgu",
        metin:
          "Tapuya şerh: Kat karşılığı inşaat sözleşmesinin tapu kütüğüne şerh edilmesi, arsa sahibinin hakkını üçüncü kişilere karşı ileri sürebilmesini sağlar. Şerhsiz sözleşme yalnızca taraflar arasında sonuç doğurur.",
      },
    ],
  },
  {
    slug: "kvkk-uyumunda-sik-yapilan-hatalar",
    baslik: "KVKK Uyumunda İşletmelerin Sık Yaptığı Yedi Hata",
    ozet:
      "Aydınlatma metni yayımlamak uyum değildir. Kurul kararlarında en sık karşılaşılan eksiklikler ve bunların pratik karşılıkları.",
    kisaCevap:
      "KVKK uyumu bir belge seti değil, sürdürülebilir bir düzendir. Uygulamada en sık yapılan yedi hata şunlardır: her veri işlemeyi açık rızaya dayandırmak, aydınlatma ile açık rızayı tek kutucukta birleştirmek, veri envanteri çıkarmadan metin yazmak, saklama ve imha politikasını fiilen uygulamamak, veri işleyenlerle yazılı sözleşme yapmamak, ilgili kişi başvurularını otuz gün içinde yanıtlamamak ve veri ihlalinde yetmiş iki saatlik bildirim süresini kaçırmak.",
    kategori: "KVKK ve Bilişim",
    kaynaklar: [
      { baslik: "6698 sayılı Kişisel Verilerin Korunması Kanunu m.5 — işleme şartları" },
      { baslik: "6698 sayılı KVKK m.10 — aydınlatma yükümlülüğü" },
      { baslik: "6698 sayılı KVKK m.11 ve m.13 — ilgili kişinin hakları ve başvuru" },
      { baslik: "6698 sayılı KVKK m.12 — veri güvenliği ve ihlal bildirimi" },
      { baslik: "Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ" },
    ],
    yazarSlug: "ali-kaan-kilicoglu",
    tarih: "2026-05-20",
    govde: [
      {
        tur: "paragraf",
        metin:
          "6698 sayılı Kanun yürürlüğe gireli yıllar oldu; buna karşılık idari para cezasına konu olan eksiklikler büyük ölçüde aynı başlıklar altında tekrarlanıyor. Aşağıda, uygulamada en sık karşılaştığımız yedi hatayı ve bunların nasıl giderileceğini sıraladık.",
      },
      { tur: "altBaslik", metin: "1. Açık rızayı her şeyin dayanağı sanmak" },
      {
        tur: "paragraf",
        metin:
          "Açık rıza, işleme şartlarından yalnızca biridir ve çoğu zaman en zayıf olanıdır; her an geri alınabilir. Bir sözleşmenin ifası için zorunlu olan veri işleme faaliyetinde açık rıza aranması, hem gereksizdir hem de rıza geri alındığında işletmeyi dayanaksız bırakır. Doğru yaklaşım, her işleme faaliyeti için uygun hukuki sebebi ayrı ayrı belirlemektir.",
      },
      { tur: "altBaslik", metin: "2. Aydınlatma ile açık rızayı aynı metinde birleştirmek" },
      {
        tur: "paragraf",
        metin:
          "Aydınlatma yükümlülüğü ile açık rıza alınması iki ayrı işlemdir ve ayrı ayrı belgelenmelidir. Tek bir kutucukta \"aydınlatma metnini okudum ve açık rıza veriyorum\" ifadesi, Kurul kararlarında geçerli bir rıza olarak kabul edilmemektedir.",
      },
      { tur: "altBaslik", metin: "3. Veri envanteri çıkarmadan metin yazmak" },
      {
        tur: "paragraf",
        metin:
          "Hangi verinin nereden geldiği, hangi sistemde tutulduğu, kimlerle paylaşıldığı ve ne zaman silineceği bilinmeden yazılan aydınlatma metni gerçeği yansıtmaz. Kurul incelemelerinde metin ile fiilî durum arasındaki uyumsuzluk, tek başına yaptırım sebebidir.",
      },
      { tur: "altBaslik", metin: "4. Saklama ve imha politikasını uygulamamak" },
      {
        tur: "paragraf",
        metin:
          "Politikada altı ay sonra silineceği yazılan verinin sistemde yıllarca durması sık rastlanan bir durumdur. Periyodik imha süreleri takvime bağlanmalı ve imha işlemi tutanakla kayıt altına alınmalıdır.",
      },
      { tur: "altBaslik", metin: "5. Veri işleyenlerle sözleşme yapmamak" },
      {
        tur: "paragraf",
        metin:
          "Muhasebe bürosu, bulut hizmet sağlayıcısı, çağrı merkezi, kargo firması — bunların hepsi veri işleyendir. Aralarındaki ilişkinin yazılı bir sözleşmeyle düzenlenmesi ve veri güvenliğine ilişkin yükümlülüklerin bu sözleşmede yer alması gerekir.",
      },
      { tur: "altBaslik", metin: "6. İlgili kişi başvurularını yanıtsız bırakmak" },
      {
        tur: "paragraf",
        metin:
          "Veri sorumlusuna yapılan başvurular en geç otuz gün içinde yanıtlanmalıdır. Başvuruların hangi kanaldan alınacağı, kimin yanıtlayacağı ve nasıl kayıt altına alınacağı önceden belirlenmemişse süre kolaylıkla kaçırılır. Kurula yapılan şikâyetlerin önemli bir bölümü bu nedenden doğar.",
      },
      { tur: "altBaslik", metin: "7. Veri ihlalinde 72 saati beklemek" },
      {
        tur: "paragraf",
        metin:
          "İhlal öğrenildiğinde gecikmeksizin ve en geç yetmiş iki saat içinde Kurula bildirim yapılmalıdır. Bu süre, olayın tam olarak aydınlatılmasını beklemek için değil; ilk bildirimi yapmak içindir. İlk saatlerde alınan teknik ve hukuki önlemlerin belgelenmesi, sonraki yaptırımın ölçüsünü doğrudan etkiler.",
      },
      {
        tur: "vurgu",
        metin:
          "Uyum bir belge seti değil, sürdürülebilir bir düzendir. Yılda bir kez gözden geçirilmeyen bir uyum programı, ikinci yılın sonunda fiilî durumdan kopar.",
      },
    ],
  },
  {
    slug: "ortaklik-sozlesmesi-neden-gerekli",
    baslik: "Ortaklık Sözleşmesi Olmadan Kurulan Şirketlerin Ödediği Bedel",
    ozet:
      "Ana sözleşme şirketin kanuna karşı yüzüdür. Ortakların birbirine karşı yüzü ise çoğu şirkette hiç yazılmaz.",
    kisaCevap:
      "Ana sözleşme şirketin kanuna karşı yüzü, ortaklık sözleşmesi ise ortakların birbirine karşı yüzüdür. Pay devri kısıtlamaları, ayrılma hâlinde payın nasıl değerleneceği, rekabet etmeme taahhüdü, kâr dağıtım politikası ve iki eşit ortağın anlaşamaması hâlinde uygulanacak kilitlenme çözümü ancak bu ikinci belgede yazar. Yazılması için en doğru zaman, kimsenin sayısal üstünlüğü olmadığı kuruluş anıdır.",
    kategori: "Şirketler Hukuku",
    kaynaklar: [
      { baslik: "6102 sayılı Türk Ticaret Kanunu m.339 — anonim şirket esas sözleşmesi" },
      { baslik: "6102 sayılı TTK m.493 — pay devrinin sınırlandırılması" },
      { baslik: "6102 sayılı TTK m.531 — haklı sebeple fesih" },
      { baslik: "6102 sayılı TTK m.575 ve m.638 — limited şirkette pay devri, çıkma ve çıkarılma" },
    ],
    yazarSlug: "ali-kaan-kilicoglu",
    tarih: "2026-04-09",
    govde: [
      {
        tur: "paragraf",
        metin:
          "Şirket kuruluşu genellikle hızlı ilerler: ana sözleşme örneği doldurulur, sicilde tescil yapılır, faaliyete başlanır. Bu aşamada kimse ortaklardan birinin üç yıl sonra ayrılmak isteyeceğini, bir diğerinin payını rakip bir şirkete satacağını ya da şirkete koyacağı sermayeyi getirmeyeceğini düşünmez. Ortaklık sözleşmesi tam olarak bu ihtimaller için yazılır.",
      },
      { tur: "altBaslik", metin: "Ana sözleşme neden yetmez?" },
      {
        tur: "paragraf",
        metin:
          "Ana sözleşme, ticaret siciline tescil edilen ve herkese açık olan kurucu belgedir; kapsamı kanunun izin verdiği konularla sınırlıdır. Ortaklar arasındaki ilişkinin ayrıntısı — kimin ne kadar süre şirkette çalışacağı, kâr dağıtım politikası, ayrılma hâlinde payın nasıl değerleneceği — ana sözleşmeye yazılmaz veya yazılması pratik değildir. Bu ayrıntılar ayrı bir ortaklık sözleşmesinde düzenlenir.",
      },
      { tur: "altBaslik", metin: "Sözleşmede mutlaka bulunması gerekenler" },
      {
        tur: "liste",
        maddeler: [
          "Pay devri kısıtlamaları: önalım hakkı, birlikte satma hakkı ve sürükleme hakkı.",
          "Ayrılma ve çıkarma hâlleri ile pay değerinin hangi yöntemle hesaplanacağı.",
          "Ortakların şirkette çalışma yükümlülüğü ve rekabet etmeme taahhüdü.",
          "Kâr dağıtım politikası ve yeniden yatırım kararlarının nasıl alınacağı.",
          "Kilitlenme (deadlock) hâlinde uygulanacak çözüm mekanizması.",
          "Uyuşmazlıkların çözüm yeri: mahkeme mi, tahkim mi?",
        ],
      },
      { tur: "altBaslik", metin: "Kilitlenme: yüzde ellilik ortaklıkların sessiz riski" },
      {
        tur: "paragraf",
        metin:
          "İki ortaklı ve payları eşit şirketlerde ortaklar anlaşamadığında genel kurul karar alamaz; şirket fiilen işlemez hâle gelir. Bu durumda tek çıkış yolu çoğu zaman şirketin feshi davasıdır ve bu dava yıllar sürer. Oysa sözleşmeye konulacak basit bir mekanizma — örneğin taraflardan birinin belirlediği fiyattan diğerinin alma ya da satma zorunda kalması — sorunu haftalar içinde çözer.",
      },
      { tur: "altBaslik", metin: "Ne zaman yazılmalı?" },
      {
        tur: "paragraf",
        metin:
          "En doğru zaman kuruluş anıdır; çünkü o aşamada henüz kimsenin sayısal bir avantajı yoktur ve taraflar iyi niyetlidir. Uyuşmazlık doğduktan sonra ortaklık sözleşmesi müzakere etmek neredeyse imkânsızdır. Mevcut şirketlerde ise, ilk fırsatta — örneğin sermaye artırımı veya yeni ortak alımı sırasında — bu metnin masaya konulması gerekir.",
      },
      {
        tur: "paragraf",
        metin:
          "Ortaklık sözleşmesi bir güvensizlik belgesi değildir. Aksine, ilişkinin en iyi olduğu anda kurulan ve zor günlerde tarafları koruyan bir çerçevedir.",
      },
    ],
  },
];

export function yaziBul(slug: string) {
  return yazilar.find((yazi) => yazi.slug === slug) ?? null;
}

/** Yazinin kelime sayisindan okuma suresi hesaplar. */
export function yaziKelimeSayisi(yazi: Yazi) {
  return yazi.govde.reduce((toplam, blok) => {
    const metin = blok.tur === "liste" ? blok.maddeler.join(" ") : blok.metin;
    return toplam + metin.trim().split(/\s+/).length;
  }, 0);
}
