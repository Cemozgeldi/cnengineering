import Navbar from "@/components/layout/Navbar";
import React from "react";
import services from "../../public/images/image/hizmetlerimiz.png";
import services2 from "../../public/images/image/hizmetlerimiz2.png";
import yellowArrow from "../../public/images/icons/Vector.svg";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import yellowLine from "../../public/images/icons/yellowline.svg";
const page = () => {
  return (
    <div flex flex-col gap-y-24>
      <div className="w-2/3 h-16 mx-auto mt-48 mb-24">
        <div className="text-textColor text-2xl font-titilum font-extralight flex gap-x-3 items-baseline">
          Biz Kimiz?
          <Image src={yellowLine} alt="yellowLine" width={128} height={3} />
        </div>
        <div className="text-3xl text-[#4a5c7a] font-titilum font-normal">
          Hizmetlerimiz
        </div>
      </div>
      <div className="mb-24">
        <Image
          src={services}
          alt="services"
          className="object-fill max-h-100px mx-auto w-screen"
        />
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto container gap-8">
          <div className="flex flex-col justify-center w-full gap-y-16">
            <div className="text-textColor text-2xl font-titilum font-extralight flex gap-x-3 items-baseline">
              Hizmetlerimiz
              <Image src={yellowLine} alt="yellowLine" width={128} height={3} />
            </div>
            <div className="text-textColor font-semibold font-titilum">
              CN Mühendislik olarak insanları ve yapıları depremlerin yıkıcı
              etkilerinden korumak için hizmet sağlıyoruz. Uzmanlardan oluşan
              ekibimiz, daha güvenli, daha dayanıklı yapılar oluşturmak için
              sismik risk değerlendirmeleri, güçlendirme ve mühendislik
              hizmetlerinde uzmanlaşmıştır.
            </div>
            <div className="flex flex-col gap-y-16">
              <div className="font-light text-textColor font-titilum">
                Şirketimiz, müşterilerimizin sismik risklerini azaltmalarına ve
                yapıların güvenliğini sağlamalarına yardımcı olmak için birinci
                sınıf yapısal ve deprem mühendisliği hizmetleri sunmaktadır.
                Uzmanlardan oluşan ekibimiz, müşterilerimizin benzersiz
                ihtiyaçlarını karşılayan özel çözümler geliştirmek için bilgi ve
                deneyime sahiptir.
              </div>
              <div className="font-semibold text-textColor font-titilum text-2xl">
                Hizmetlerimizi inceleyiniz
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src={services2}
              alt="services"
              className="hidden md:block object-fill max-h-70 mx-auto "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto container my-24 gap-2 ">
        <div className="flex flex-col gap-y-8 p-5 bg-gray-100">
          <div>
            <Image src={yellowArrow} alt="arrow" />
          </div>
          <div className="font-semibold text-textColor">
            Yapısal Tasarım Hizmetleri
          </div>
          <div>
            Şirketimiz, çeşitli bina ve özel endüstriyel yapıların tasarımı ve
            analizinde uzmandır. Çevresel etkilere dayanıklı sağlam yapısal
            sistemler oluşturmak için gelişmiş yazılım ve teknolojiler
            kullanıyoruz.
            <br />
            <br />
            Mühendislerimiz, verimlilik, maliyet etkinliği ve güvenliği
            dengeleyen yenilikçi tasarımlar geliştirmek için yükler, malzeme
            özellikleri ve çevre koşulları gibi faktörleri kapsamlı bir şekilde
            değerlendirir.Ayrıca, yüksek binaların ve kabuk beton yapıların
            tasarımında uzmanlığa sahibiz.
          </div>
        </div>
        <div className="flex flex-col gap-y-8 p-5 bg-gray-100">
          <div>
            <Image src={yellowArrow} alt="arrow" />
          </div>
          <div className="font-semibold text-textColor">
            Deprem Performans Değerlendirmesi ve Güçlendirme
          </div>
          <div>
            Mevcut yapıların depreme karşı güvenilirliğinin anlaşılması, bina
            sakinlerinin güvenliğini sağlamak ve hasarı en aza indirmek için çok
            önemlidir. Binaların performansını değerlendirmek ve uygun
            güçlendirme önlemleri önermek için kapsamlı sismik değerlendirmeler
            yapıyoruz.
            <br />
            <br />
            Uzmanlarımız, zayıflıkları tespit etmek ve yapısal dayanıklılığı
            artıran ve ilgili bina yönetmeliklerini ve düzenlemelerini
            karşılayan etkili güçlendirme stratejileri geliştirmek için
            tahribatsız testler dahil olmak üzere en son teknikleri kullanır.
            Mevcut binaları depreme karşı korumak için sönümleme cihazları
            (viskoz sönümleyiciler, sürtünme sönümleyiciler, burkulması önlenmiş
            çaprazlar) gibi yenilikçi çözümler de kullanıyoruz.
          </div>
        </div>
        <div className="flex flex-col gap-y-8 p-5 bg-gray-100">
          <div>
            <Image src={yellowArrow} alt="arrow" />
          </div>
          <div className="font-semibold text-textColor">
            Görsel İnceleme ve Durum Değerlendirmesi
          </div>
          <div>
            Kapsamlı hizmetimiz, binaların ve çeşitli yapıların kapsamlı görsel
            denetimi ve durum değerlendirmesi sunarak müşterilere yapılarının
            genel sağlığı ve performansı hakkında değerli bilgiler sağlar.
            Deneyimli profesyoneller ve gelişmiş denetim tekniklerinden
            yararlanarak, gözle görülür bozulma, hasar veya zayıflık
            belirtilerini belirlemek için temeller, duvarlar, çatılar ve yapısal
            öğeler dahil olmak üzere çeşitli bina bileşenlerini titizlikle
            inceliyoruz.
            <br />
            <br />
            Ek olarak, yapının bütünlüğü hakkında daha derin içgörüler elde
            etmek için tahribatsız test yöntemleri kullanıyoruz ve kusurları
            hasar vermeden tespit ediyoruz.Ayrıntılı raporlarımız ve uzman
            tavsiyelerimiz, müşterilerimizin bakım, onarım ve yapısal
            iyileştirmeler hakkında bilinçli kararlar almalarını sağlayarak
            binalarının uzun ömürlü, güvenli ve optimum performans göstermesini
            sağlar.
          </div>
        </div>
        <div className="flex flex-col gap-y-8 p-5 bg-gray-100 rounded">
          <div>
            <Image src={yellowArrow} alt="arrow" />
          </div>
          <div className="font-semibold text-textColor">
            Dinamik ve Titreşim Mühendislik Hizmetleri
          </div>
          <div>
            Şirketimiz, dinamik kuvvetleri anlamak ve yönetmek için yapıların
            analizine ve tasarımına odaklanan özel yapısal dinamik mühendislik
            hizmetleri sunmaktadır. Rüzgar, deprem, titreşim ve makine kaynaklı
            kuvvetler gibi çeşitli dinamik yükler altında yapıların tepkisini
            değerlendirmek için ayrıntılı dinamik analizler yapıyoruz. Analiz
            sonuçlarına dayanarak, yapısal tasarımı optimize etmek,
            dayanıklılığı artırmak ve dinamik kuvvetlerin etkilerini azaltmak
            için öneriler sunuyoruz.
            <br />
            <br />
            Uzmanlığımız, titreşimleri, rezonansları ve potansiyel yapısal
            hasarı en aza indirmek için ayarlanmış kütle sönümleyicilerin,
            titreşim sönümleyicilerin ve diğer dinamik kontrol cihazlarının
            tasarımını da kapsar. Kesinlik, doğruluk ve yeniliğe odaklanan
            yapısal dinamik mühendislik hizmetlerimiz, yapıların dayanıklı ve
            amaçlanan kullanım ömürleri boyunca dinamik yüklere dayanabilecek
            kapasitede olmasını sağlar.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
