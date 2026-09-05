/**
 * Kurumsal metinler.
 *
 * Bu metinler mevzuatin gerektirdigi asgari icerigi karsilayacak sekilde
 * hazirlanmis taslaklardir. Yayindan once buro tarafindan gozden gecirilmeli,
 * unvan / adres / veri sorumlusu bilgileri kesinlestirilmelidir.
 * Tumu yonetim panelindeki "Kurumsal Metinler" bolumunden duzenlenebilir.
 */

export type MetinBlogu =
  | { tur: "paragraf"; metin: string }
  | { tur: "altBaslik"; metin: string }
  | { tur: "liste"; maddeler: string[] };

export type YasalMetin = {
  slug: string;
  baslik: string;
  ozet: string;
  guncelleme: string;
  govde: MetinBlogu[];
};

export const yasalMetinler: YasalMetin[] = [
  {
    slug: "yasal-uyari",
    baslik: "Yasal Uyarı",
    ozet: "Bu sitedeki içeriklerin niteliği ve sınırları hakkında bilgilendirme.",
    guncelleme: "2026-09-01",
    govde: [
      { tur: "altBaslik", metin: "İçeriğin niteliği" },
      {
        tur: "paragraf",
        metin:
          "Bu internet sitesinde yer alan bilgiler yalnızca genel bilgilendirme amacı taşır. Hiçbir içerik, somut bir olaya ilişkin hukuki görüş, tavsiye veya yönlendirme niteliğinde değildir. Sitedeki bilgilere dayanılarak alınan kararlardan doğabilecek sonuçlardan büromuz sorumlu tutulamaz.",
      },
      { tur: "altBaslik", metin: "Avukat-müvekkil ilişkisi" },
      {
        tur: "paragraf",
        metin:
          "Bu sitenin ziyaret edilmesi, iletişim formunun doldurulması veya büromuza e-posta gönderilmesi tek başına avukat-müvekkil ilişkisi kurmaz. Vekâlet ilişkisi, ancak taraflar arasında yazılı avukatlık sözleşmesi imzalanması ve usulüne uygun vekâletname düzenlenmesiyle doğar.",
      },
      { tur: "altBaslik", metin: "Reklam yasağı" },
      {
        tur: "paragraf",
        metin:
          "1136 sayılı Avukatlık Kanunu ve Türkiye Barolar Birliği Reklam Yasağı Yönetmeliği uyarınca avukatlar iş elde etmeye yönelik reklam yapamaz. Bu site, mesleki faaliyet alanları ve iletişim bilgileri hakkında bilgilendirme amacıyla hazırlanmıştır; hiçbir bölümü iş sağlama, teklif veya vaat niteliğinde değildir. Sitede müvekkil ismine, dosya örneğine, başarı oranına veya sonuç taahhüdüne yer verilmemektedir.",
      },
      { tur: "altBaslik", metin: "Güncellik" },
      {
        tur: "paragraf",
        metin:
          "Mevzuat ve yargı kararları sürekli değişmektedir. Sitedeki yazıların yayımlandığı tarihte güncel olan bilgiler, sonradan geçerliliğini yitirmiş olabilir. Her yazının başında yayım tarihi belirtilmektedir.",
      },
      { tur: "altBaslik", metin: "Fikri haklar" },
      {
        tur: "paragraf",
        metin:
          "Sitede yer alan yazılar, görseller, logo ve tasarım unsurları üzerindeki fikri haklar büromuza aittir. Kaynak gösterilmeksizin kısmen veya tamamen çoğaltılamaz, yayımlanamaz veya ticari amaçla kullanılamaz.",
      },
      { tur: "altBaslik", metin: "Bağlantı verilen siteler" },
      {
        tur: "paragraf",
        metin:
          "Sitemizde üçüncü kişilere ait internet sitelerine bağlantı verilebilir. Bu sitelerin içeriğinden ve gizlilik uygulamalarından büromuz sorumlu değildir.",
      },
    ],
  },
  {
    slug: "kvkk-aydinlatma-metni",
    baslik: "KVKK Aydınlatma Metni",
    ozet: "6698 sayılı Kanun kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma.",
    guncelleme: "2026-09-01",
    govde: [
      { tur: "altBaslik", metin: "Veri sorumlusu" },
      {
        tur: "paragraf",
        metin:
          "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"Kanun\") uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla AKK Hukuk ve Danışmanlık tarafından aşağıda açıklanan kapsamda işlenmektedir.",
      },
      { tur: "altBaslik", metin: "İşlenen kişisel veriler" },
      {
        tur: "liste",
        maddeler: [
          "Kimlik verisi: ad, soyad.",
          "İletişim verisi: e-posta adresi, telefon numarası.",
          "Talep içeriği: iletişim formu aracılığıyla tarafımıza ilettiğiniz mesaj metni ve varsa ekleri.",
          "İşlem güvenliği verisi: site ziyaretine ilişkin teknik kayıtlar (IP adresi, tarayıcı bilgisi, ziyaret zamanı).",
        ],
      },
      { tur: "altBaslik", metin: "İşleme amaçları" },
      {
        tur: "liste",
        maddeler: [
          "Tarafımıza iletilen talep ve soruların yanıtlanması.",
          "Randevu ve görüşme süreçlerinin yürütülmesi.",
          "Avukatlık sözleşmesi kurulması hâlinde vekâlet ilişkisinin ifası.",
          "Hukuki yükümlülüklerimizin yerine getirilmesi ve olası uyuşmazlıklarda delil oluşturulması.",
          "Site güvenliğinin sağlanması.",
        ],
      },
      { tur: "altBaslik", metin: "Hukuki sebepler" },
      {
        tur: "paragraf",
        metin:
          "Kişisel verileriniz; Kanun'un 5. maddesinde düzenlenen \"bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması\", \"veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması\", \"bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması\" ve \"ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için zorunlu olması\" hukuki sebeplerine dayanılarak işlenmektedir.",
      },
      { tur: "altBaslik", metin: "Aktarım" },
      {
        tur: "paragraf",
        metin:
          "Kişisel verileriniz, hizmet aldığımız barındırma ve altyapı sağlayıcıları ile e-posta hizmet sağlayıcılarına, yalnızca hizmetin sunulması için gerekli ölçüde aktarılmaktadır. Ayrıca kanunen yetkili kamu kurum ve kuruluşlarına, talep hâlinde ve mevzuatın öngördüğü sınırlar içinde aktarım yapılabilir. Bunun dışında üçüncü kişilerle paylaşım yapılmaz.",
      },
      { tur: "altBaslik", metin: "Saklama süresi" },
      {
        tur: "paragraf",
        metin:
          "Verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri sona erene kadar saklanır. Sürenin sona ermesinin ardından silinir, yok edilir veya anonim hâle getirilir.",
      },
      { tur: "altBaslik", metin: "Haklarınız" },
      {
        tur: "paragraf",
        metin:
          "Kanun'un 11. maddesi uyarınca; kişisel verinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme, bu işlemlerin aktarım yapılan üçüncü kişilere bildirilmesini isteme, münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.",
      },
      {
        tur: "paragraf",
        metin:
          "Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'de öngörülen usullere uygun olarak büromuzun iletişim adreslerine iletebilirsiniz. Başvurunuz en geç otuz gün içinde sonuçlandırılır.",
      },
    ],
  },
  {
    slug: "gizlilik-politikasi",
    baslik: "Gizlilik Politikası",
    ozet: "Site üzerinden toplanan bilgilerin nasıl korunduğu.",
    guncelleme: "2026-09-01",
    govde: [
      { tur: "altBaslik", metin: "Genel ilke" },
      {
        tur: "paragraf",
        metin:
          "Büromuz, kendisine ulaşan her bilgiyi avukatlık mesleğinin sır saklama yükümlülüğü çerçevesinde korur. Bu yükümlülük, vekâlet ilişkisi kurulmamış olsa dahi ilk temas anından itibaren geçerlidir ve süresizdir.",
      },
      { tur: "altBaslik", metin: "Toplanan bilgiler" },
      {
        tur: "paragraf",
        metin:
          "Site üzerinden yalnızca iletişim formunda kendi isteğinizle paylaştığınız bilgiler ile teknik olarak zorunlu sunucu kayıtları toplanır. Site, pazarlama amaçlı izleme veya profilleme yapmaz.",
      },
      { tur: "altBaslik", metin: "Formla gönderilen bilgiler" },
      {
        tur: "paragraf",
        metin:
          "İletişim formuna, dosyanızın esasına ilişkin ayrıntılı bilgi ve belge yazmamanızı öneririz. Formun amacı yalnızca ilk teması kurmaktır. Ayrıntılı bilgi paylaşımı için yüz yüze ya da çevrim içi görüşme daha güvenlidir.",
      },
      { tur: "altBaslik", metin: "Güvenlik önlemleri" },
      {
        tur: "liste",
        maddeler: [
          "Site trafiği uçtan uca şifrelenmiş bağlantı (HTTPS) üzerinden yürütülür.",
          "Form kayıtlarına yalnızca yetkilendirilmiş büro personeli erişebilir.",
          "Erişim yetkileri kişiye özeldir ve düzenli olarak gözden geçirilir.",
        ],
      },
      { tur: "altBaslik", metin: "Üçüncü taraf hizmetler" },
      {
        tur: "paragraf",
        metin:
          "Sitenin yayımlanması için barındırma ve e-posta hizmeti alınan sağlayıcılar, sözleşmesel olarak veri gizliliğiyle yükümlüdür. Bu sağlayıcılar verileri yalnızca hizmetin sunulması amacıyla işler.",
      },
    ],
  },
  {
    slug: "cerez-politikasi",
    baslik: "Çerez Politikası",
    ozet: "Sitede kullanılan çerezler ve tarayıcı ayarları.",
    guncelleme: "2026-09-01",
    govde: [
      { tur: "altBaslik", metin: "Çerez nedir?" },
      {
        tur: "paragraf",
        metin:
          "Çerez (cookie), ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Sitelerin düzgün çalışmasını sağlamak, tercihleri hatırlamak ve trafiği ölçmek için kullanılır.",
      },
      { tur: "altBaslik", metin: "Bu sitede kullanılan çerezler" },
      {
        tur: "paragraf",
        metin:
          "Sitemiz, çalışması için gerekli olan zorunlu çerezler dışında çerez kullanmaz. Reklam, yeniden hedefleme veya üçüncü taraf pazarlama çerezleri yerleştirilmemektedir.",
      },
      {
        tur: "liste",
        maddeler: [
          "Zorunlu çerezler: Oturum güvenliği ve sayfa işlevselliği için gereklidir; kapatılamaz.",
          "Ölçüm çerezleri: Kullanılması hâlinde ayrıca bilgilendirme yapılır ve onayınız alınır.",
        ],
      },
      { tur: "altBaslik", metin: "Çerezleri nasıl yönetirsiniz?" },
      {
        tur: "paragraf",
        metin:
          "Tarayıcınızın ayarlar bölümünden çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi hâlinde sitenin bazı bölümleri düzgün çalışmayabilir.",
      },
    ],
  },
];

export function yasalMetinBul(slug: string) {
  return yasalMetinler.find((metin) => metin.slug === slug) ?? null;
}
