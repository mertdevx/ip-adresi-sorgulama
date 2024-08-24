# Türkçe - IP Adresi Sorgulama Uygulaması

Bu basit web uygulaması, bir IP adresini sorgulamanıza ve konumu, internet servis sağlayıcısı (ISS) ve diğer ilgili bilgileri görüntülemenize olanak tanır. Uygulama, [ip-api.com](http://ip-api.com/) API'sini kullanarak IP adresi bilgilerini alır ve [OpenStreetMap](https://www.openstreetmap.org/) kullanarak konumu haritada görüntüler. Kullanıcının kendi IP adresi, [ipify API](https://www.ipify.org/) kullanılarak otomatik olarak alınır.

### Özellikler

* **Otomatik IP Algılama:** Sayfa yüklendiğinde, kullanıcının IP adresi [ipify API](https://www.ipify.org/) kullanılarak otomatik olarak algılanır ve sorgulanır.
* **Manuel IP Girişi:** Kullanıcılar, sorgulamak istedikleri IP adresini manuel olarak girebilirler.
* **Detaylı Bilgi Görüntüleme:** IP adresi hakkında detaylı bilgi sağlar: kıta, ülke, bölge, şehir, posta kodu, zaman dilimi, para birimi, ISS, organizasyon, mobil, proxy ve hosting bilgileri.
* **Harita Entegrasyonu:** IP adresinin konumunu [OpenStreetMap](https://www.openstreetmap.org/) üzerinde görüntüler.
* **Responsive Tasarım:** Farklı ekran boyutlarına uyum sağlar.
* **Kullanıcı Dostu Arayüz:** Basit ve anlaşılır bir arayüze sahiptir.
* **Bildirimler:** Sorgulama sonuçları ve hataları hakkında kullanıcıya bildirimler gösterir (toastr ve SweetAlert2 kullanarak).

### Nasıl Kullanılır?

1. **Uygulamayı Çalıştırma:** Projeyi indirin ve `index.html` dosyasını bir web tarayıcısında açın.
2. **IP Adresi Girin (İsteğe Bağlı):** Varsayılan olarak, kendi IP adresiniz otomatik olarak algılanır ve sorgulanır. Farklı bir IP adresi sorgulamak istiyorsanız, "IP Adresini Girin" alanına IP adresini yazın.
3. **Sorgula Butonuna Tıklayın:** "Sorgula" butonuna tıkladığınızda, girilen IP adresi sorgulanır ve sonuçlar ekranda görüntülenir.

### Teknolojiler

* **HTML:** Web sayfası yapısı.
* **CSS:** Web sayfası stili (Bootstrap 4.5.2 kullanarak).
* **JavaScript:** API çağrıları ve kullanıcı etkileşimleri.
* **ip-api.com API:** IP adresi bilgilerini almak için kullanılır.
* **OpenStreetMap:** Konumu haritada görüntülemek için kullanılır. ([https://www.openstreetmap.org/](https://www.openstreetmap.org/))
* **jQuery:** DOM manipülasyonu için kullanılır.
* **toastr.js:** Bildirimler için kullanılır.
* **ipify API:** Kullanıcının IP adresini almak için kullanılır.

### Kurulum

1. Projeyi indirin.
2. `index.html` dosyasını bir web tarayıcısında açın.

### Lisans

Bu proje [GNU Genel Kamu Lisansı v3.0](LICENSE) ile lisanslanmıştır. Lütfen lisans dosyasını inceleyin.

---

# English - IP Address Lookup Application

This simple web application allows you to look up an IP address and display its location, internet service provider (ISP), and other relevant information. The application uses the [ip-api.com](http://ip-api.com/) API to retrieve IP address information and [OpenStreetMap](https://www.openstreetmap.org/) to display the location on a map. The user's own IP address is automatically retrieved using the [ipify API](https://www.ipify.org/).

### Features

* **Automatic IP Detection:** When the page loads, the user's IP address is automatically detected and queried using the [ipify API](https://www.ipify.org/).
* **Manual IP Entry:** Users can manually enter the IP address they want to query.
* **Detailed Information Display:** Provides detailed information about the IP address: continent, country, region, city, zip code, time zone, currency, ISP, organization, mobile, proxy, and hosting information.
* **Map Integration:** Displays the location of the IP address on [OpenStreetMap](https://www.openstreetmap.org/).
* **Responsive Design:** Adapts to different screen sizes.
* **User-Friendly Interface:** Has a simple and intuitive interface.
* **Notifications:** Displays notifications to the user about query results and errors (using toastr and SweetAlert2).

### How to Use

1. **Run the Application:** Download the project and open the `index.html` file in a web browser.
2. **Enter IP Address (Optional):** By default, your own IP address is automatically detected and queried. If you want to query a different IP address, enter it in the "Enter IP Address" field.
3. **Click the Query Button:** When you click the "Query" button, the entered IP address is queried and the results are displayed on the screen.

### Technologies

* **HTML:** Web page structure.
* **CSS:** Web page style (using Bootstrap 4.5.2).
* **JavaScript:** API calls and user interactions.
* **ip-api.com API:** Used to retrieve IP address information.
* **OpenStreetMap:** Used to display the location on a map. ([https://www.openstreetmap.org/](https://www.openstreetmap.org/))
* **jQuery:** Used for DOM manipulation.
* **toastr.js:** Used for notifications.
* **ipify API:** Used to retrieve the user's IP address.

### Installation

1. Download the project.
2. Open the `index.html` file in a web browser.

### License

This project is licensed under the [GNU General Public License v3.0](LICENSE). Please review the license file.

---


Artık hem Türkçe hem de İngilizce açıklamalarında OpenStreetMap'e atıf yapılıyor. Umarım yardımcı olmuştur!
