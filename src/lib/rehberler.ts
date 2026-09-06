import type { YaziBlogu } from "./yazilar";

/**
 * Rehberler.
 *
 * Avukatlik bürosu sitelerinde en cok aranan ama neredeyse hicbirinde
 * bulunmayan icerik: "vekaletname icin ne lazim", "goruşmeye ne
 * getireyim". Bu sorular her gun telefonla soruluyor; yazili durduklarinda
 * hem muvekkilin isini kolaylastiriyor hem burodan zaman kazandiriyor.
 *
 * Yeni rehber eklemek icin yonetim panelindeki "Rehberler" bolumu yeterli;
 * buradaki metinler yalnizca yedektir.
 */

export type Rehber = {
  slug: string;
  baslik: string;
  ozet: string;
  ikon: string;
  sira: number;
  guncelleme: string;
  govde: YaziBlogu[];
  seoAciklama: string;
};

export const rehberler: Rehber[] = [
  {
    slug: "vekaletname-nasil-cikarilir",
    baslik: "Vekâletname nasıl çıkarılır?",
    ozet: "Noterde hangi bilgiler istenir, hangi dosyalarda fotoğraflı vekâletname gerekir, özel yetki nedir?",
    ikon: "sozlesme",
    sira: 1,
    guncelleme: "2026-09-01",
    seoAciklama:
      "Avukata vekâletname çıkarmak için noterde istenen bilgiler, özel yetki gerektiren işler, fotoğraflı vekâletname ve şirketler için gereken belgeler.",
    govde: [
      {
        tur: "paragraf",
        metin:
          "Vekâletname, avukatın sizin adınıza işlem yapabilmesini sağlayan noterde düzenlenen belgedir. Avukatlık sözleşmesi tarafların birbirine karşı yükümlülüğünü, vekâletname ise avukatın üçüncü kişilere ve mahkemeye karşı yetkisini gösterir. İkisi ayrı belgelerdir ve ikisi de gereklidir.",
      },
      { tur: "altBaslik", metin: "Noterde hangi bilgiler istenir?" },
      {
        tur: "paragraf",
        metin:
          "Notere gitmeden önce avukatınızdan şu bilgileri isteyin; tamamı olmadan vekâletname düzenlenmez:",
      },
      {
        tur: "liste",
        maddeler: [
          "Avukatın adı ve soyadı",
          "T.C. kimlik numarası",
          "Bağlı olduğu baro ve baro sicil numarası",
          "Vergi dairesi ve vergi kimlik numarası",
          "Büro adresi",
        ],
      },
      {
        tur: "paragraf",
        metin:
          "Yanınızda kimliğinizi (nüfus cüzdanı, pasaport veya ehliyet) bulundurmanız yeterlidir. Vekâletname birden fazla avukat adına birlikte düzenlenebilir; büromuzda dosyanızı yürütecek meslektaşın adı görüşmede size bildirilir.",
      },
      { tur: "altBaslik", metin: "Fotoğraflı vekâletname hangi dosyalarda zorunlu?" },
      {
        tur: "paragraf",
        metin:
          "Bazı işlerde vekâletnamenin üzerinde vekâlet verenin fotoğrafı bulunması aranır. Başlıcaları boşanma davaları ile yabancı mahkeme kararlarının tanınması ve tenfizidir. Bu dosyalarda notere iki adet vesikalık fotoğrafla gitmeniz gerekir. Fotoğrafsız düzenlenen vekâletname mahkemece kabul edilmez ve süreç en baştan tekrarlanır.",
      },
      { tur: "altBaslik", metin: "Özel yetki nedir, neden önemlidir?" },
      {
        tur: "paragraf",
        metin:
          "Genel dava vekâletnamesi, avukata davayı yürütme yetkisi verir; ancak bazı işlemler için vekâletnamede ayrıca ve açıkça yazılması gereken özel yetkiler vardır. Vekâletnamede yer almayan bir özel yetki, o işlemin yapılamaması anlamına gelir:",
      },
      {
        tur: "liste",
        maddeler: [
          "Davadan feragat, davayı kabul ve sulh olma",
          "Tahkim ve hakem sözleşmesi yapma",
          "Karşı tarafı ibra etme",
          "Ahzu kabz — dosyadan çıkacak parayı tahsil etme",
          "Boşanma davası açma",
          "Taşınmaz satışı, ipotek tesisi ve benzeri tasarruf işlemleri",
          "Şikâyetten vazgeçme ve uzlaşmayı kabul",
        ],
      },
      {
        tur: "vurgu",
        metin:
          "Uygulamada en sık yaşanan aksaklık, ahzu kabz yetkisinin unutulmasıdır. Dava kazanılmış ancak tahsilat için müvekkilin yeniden notere gitmesi gerekmiştir. Vekâletnameyi çıkarmadan önce avukatınıza hangi yetkilerin gerektiğini sorun.",
      },
      { tur: "altBaslik", metin: "Şirketler için ne gerekir?" },
      {
        tur: "liste",
        maddeler: [
          "Güncel imza sirküleri",
          "Ticaret sicil tasdiknamesi veya faaliyet belgesi",
          "Vekâletnameyi imzalayacak yetkilinin kimliği",
          "Yetkinin süresi dolmuşsa yenilenmiş yetki belgesi",
        ],
      },
      { tur: "altBaslik", metin: "Yurt dışındaysanız" },
      {
        tur: "paragraf",
        metin:
          "Türkiye'nin yurt dışı temsilciliklerinden (konsolosluk) vekâletname düzenlenebilir. Bulunduğunuz ülkenin noterinden düzenletmeniz hâlinde ise belgenin apostil şerhi taşıması ve yeminli tercümesinin yapılması gerekir. Bu yol daha uzun sürer; mümkünse konsolosluk tercih edilmelidir.",
      },
      { tur: "altBaslik", metin: "Vekâletten azil ve istifa" },
      {
        tur: "paragraf",
        metin:
          "Vekâlet ilişkisi her iki taraf için de sona erdirilebilir. Müvekkil noterden azilname düzenleyerek vekâleti geri alabilir; avukat da usulüne uygun bildirimle istifa edebilir. Her iki hâlde de dosyanın bulunduğu mercie bildirim yapılması ve süreler bakımından boşluk oluşmaması gerekir.",
      },
      {
        tur: "paragraf",
        metin:
          "Bu rehber genel bilgilendirme amaçlıdır. Dosyanızın türüne göre gereken yetkiler değişir; vekâletname çıkarmadan önce bizimle görüşmeniz, ikinci kez notere gitmenizi önler.",
      },
    ],
  },
  {
    slug: "ilk-gorusmeye-ne-getirmeliyim",
    baslik: "İlk görüşmeye ne getirmeliyim?",
    ozet: "Dosya türüne göre hazırlık listesi. Doğru belgelerle gelmek, ilk görüşmeyi tahmine değil değerlendirmeye çevirir.",
    ikon: "danismanlik",
    sira: 2,
    guncelleme: "2026-09-01",
    seoAciklama:
      "Avukatla ilk görüşmeye hangi belgelerle gidilmeli? İş, boşanma, ticari, gayrimenkul, icra ve ceza dosyaları için hazırlık listesi.",
    govde: [
      {
        tur: "paragraf",
        metin:
          "İlk görüşmenin verimi, getirdiğiniz belgelere bağlıdır. Belgesiz bir görüşmede söyleyebileceğimiz şey genel bilgiden ibaret kalır; oysa elinizdeki tek bir tebligat, sürecin takvimini ve seçeneklerini o gün netleştirebilir. Aşağıdaki listeler dosya türüne göre asgari hazırlığı gösterir.",
      },
      {
        tur: "vurgu",
        metin:
          "Her dosya türünde ortak kural: üzerinde tarih ve tebliğ şerhi bulunan her evrakı getirin. Süreler bu tarihlerden işler ve çoğu hak kaybı burada yaşanır.",
      },
      { tur: "altBaslik", metin: "İş hukuku — işçi tarafı" },
      {
        tur: "liste",
        maddeler: [
          "İş sözleşmesi ve varsa ekleri",
          "Fesih bildirimi ve tebliğ tarihini gösteren evrak",
          "Son bir yıla ait bordrolar ve banka hesap hareketleri",
          "SGK hizmet dökümü (e-Devlet'ten alınabilir)",
          "Varsa savunma yazıları, uyarı ve tutanaklar",
          "İşe giriş-çıkış kayıtları, mesai çizelgeleri",
        ],
      },
      { tur: "altBaslik", metin: "İş hukuku — işveren tarafı" },
      {
        tur: "liste",
        maddeler: [
          "İş sözleşmesi, işyeri yönetmeliği ve varsa disiplin yönergesi",
          "Savunma istem yazısı ve alınan savunma",
          "Fesih bildirimi ve tebliğ belgesi",
          "Bordro, puantaj ve izin kayıtları",
          "Varsa arabuluculuk son tutanağı",
        ],
      },
      { tur: "altBaslik", metin: "Boşanma ve aile" },
      {
        tur: "liste",
        maddeler: [
          "Nüfus kayıt örneği (e-Devlet)",
          "Evlilik cüzdanı fotokopisi",
          "Varsa daha önce açılmış dava dosyalarına ilişkin evrak",
          "Mal rejimi için: tapu kayıtları, araç ruhsatı, banka bilgileri",
          "Varsa 6284 sayılı Kanun kapsamında alınmış tedbir kararı",
          "Fotoğraflı vekâletname için iki vesikalık fotoğraf",
        ],
      },
      { tur: "altBaslik", metin: "Ticari ve şirket dosyaları" },
      {
        tur: "liste",
        maddeler: [
          "Ana sözleşme ve varsa ortaklık sözleşmesi",
          "İmza sirküleri ve ticaret sicil tasdiknamesi",
          "Uyuşmazlığa konu sözleşme ve ekleri",
          "Fatura, irsaliye, cari hesap mutabakatı",
          "Taraflar arasındaki yazışmalar (e-posta dahil)",
        ],
      },
      { tur: "altBaslik", metin: "Gayrimenkul" },
      {
        tur: "liste",
        maddeler: [
          "Tapu senedi ve güncel tapu kayıt örneği",
          "İmar durumu belgesi, varsa yapı ruhsatı ve iskân",
          "Satış vaadi veya kat karşılığı inşaat sözleşmesi",
          "Ödeme belgeleri ve dekontlar",
          "Varsa kroki, plan ve bilirkişi raporları",
        ],
      },
      { tur: "altBaslik", metin: "İcra ve alacak" },
      {
        tur: "liste",
        maddeler: [
          "Alacağı doğuran belge: çek, senet, fatura veya sözleşme",
          "Ödeme emri ve tebliğ tarihini gösteren evrak",
          "Varsa itiraz dilekçesi",
          "Borçlunun bilinen adres ve iletişim bilgileri",
        ],
      },
      { tur: "altBaslik", metin: "Ceza" },
      {
        tur: "liste",
        maddeler: [
          "İfade davetiyesi veya çağrı kâğıdı",
          "Varsa iddianame ve duruşma günü bildirimi",
          "Soruşturma numarası (varsa)",
          "Olayla ilgili elinizdeki belge, mesaj ve kayıtlar",
        ],
      },
      { tur: "altBaslik", metin: "Belge yoksa görüşme ertelenmeli mi?" },
      {
        tur: "paragraf",
        metin:
          "Hayır. Süre işleyen bir dosyada beklemek her zaman daha kötüdür. Elinizde ne varsa onunla gelin; eksikleri görüşmede birlikte belirleriz. Yalnızca üzerinde tebliğ tarihi bulunan evrakı mutlaka yanınıza alın.",
      },
    ],
  },
];

export function rehberBul(slug: string) {
  return rehberler.find((rehber) => rehber.slug === slug) ?? null;
}
