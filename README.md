# CovidMap 🦠

Dünya üzerindeki ülkelerin COVID-19 verilerini etkileşimli bir harita üzerinden keşfetmenizi sağlayan modern bir web uygulamasıdır. Kullanıcılar harita üzerinde herhangi bir ülkeye tıklayarak o ülkeye ait toplam vaka, ölüm, iyileşen sayısı gibi istatistiksel bilgileri görebilir. Uygulama React ve Redux Toolkit kullanılarak geliştirilmiştir.

<h1>Uygulama Özellikleri 🌍</h1>

**Etkileşimli Dünya Haritası**  
  `react-simple-maps` kütüphanesi ile oluşturulan harita üzerinde kullanıcı istediği ülkeye tıklayarak COVID-19 istatistiklerine erişebilir.

- 📊 **Ülke Detay Sayfası**  
  Tıklanan ülkeye ait:
  - Toplam vaka
  - Aktif vaka
  - Ölüm sayısı
  - İyileşen sayısı
  - Bugünkü vaka ve ölüm verileri
  gibi bilgiler detay sayfasında sunulur.

- 🔁 **Gerçek Zamanlı Veri**  
  `axios` kullanılarak canlı API'dan veri çekilir ve Redux üzerinden yönetilir.

- 🌀 **Yüklenme ve Hata Durumu Yönetimi**  
  Veriler çekilirken `ContentLoader` bileşeni gösterilir. Hata durumunda kullanıcıya anlamlı uyarılar verilir.

- 🧪 **Test Edilebilirlik**  
  React Testing Library ile bileşenler test edilmiştir. Örneğin:
  - Veriler yüklenirken loader görünür mü?
  - Veri yoksa hata mesajı gösteriliyor mu?

- 📱 **Duyarlı Tasarım**  
  TailwindCSS ile mobil ve masaüstü cihazlara uyumlu modern ve sade bir tasarım sunulmuştur.

<h1>TEST</h1>

Proje React Testing Library ile test edilmiştir. Örnek test senaryoları:

- Yüklenme sırasında ekranın loader bileşeni göstermesi
- API'den veri çekilemediğinde hata mesajı gösterilmesi
- `ContentLoader` bileşeninin `key` prop’u ile render edilmesi

<h1>Kullanılan Kütüphaneler</h1>

- **@testing-library/jest-dom**

- **@testing-library/react** --> React bileşenlerini test etmeyi sağlar

- **axios** --> APİ isteklerini yönetir

- **millify** --> Büyük sayıları okunabilir formatta gösterir (örn: 150000 → 150K)

- **react-simple-maps** --> SVG tabanlı etkileşimli harita oluşturur

- **react-router-dom** -->  Sayfa yönlendirmesi ve detay sayfası yönetimi

- **react-icons** --> Simge setleri

- **tailwindcss** --> CSS framework, responsive ve şık tasarımlar için

- **@reduxjs/toolkit** --> Redux işlemlerini sadeleştirir ve yapılandırır

- **react-redux** --> React ile Redux bağlama işlemleri

- **redux-thunk** -->  Redux içinde async işlemleri yönetir (API çağrıları)

<h1>DEMO</h1>

![](./demo.gif)

Soru, öneri ya da geri bildirimlerinizi selincevk@gmail.comadresine iletebilirsiniz. Size yardımcı olmaktan memnuniyet duyarım! :)