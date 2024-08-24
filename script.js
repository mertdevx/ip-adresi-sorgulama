function fetchUserIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;
            document.getElementById('ipInput').value = userIP;
            fetchIPData(userIP, false);
        })
        .catch(error => console.error('Error fetching user IP:', error));
}

function fetchIPData(ip, showAlert = true) {
    ip = ip || document.getElementById('ipInput').value;
    if (!ip) {
        if (window.innerWidth < 768) {
            Swal.fire('Bilgi', 'Lütfen bir IP adresi girin.', 'info');
        } else {
            toastr.info('Lütfen bir IP adresi girin.', 'Bilgi');
        }
        return;
    }

    const apiUrl = `http://ip-api.com/json/${ip}?fields=66842623`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                displayResult(data);
                if (showAlert) {
                    if (window.innerWidth < 768) {
                        Swal.fire('Sorgulama Başarılı', 'IP bilgileri başarıyla alındı!', 'success');
                    } else {
                        toastr.success('IP bilgileri başarıyla alındı!', 'Sorgulama Başarılı');
                    }
                }
            } else {
                if (showAlert) {
                    if (window.innerWidth < 768) {
                        Swal.fire('Hata', 'IP adresi bulunamadı.', 'error');
                    } else {
                        toastr.error('IP adresi bulunamadı.', 'Hata');
                    }
                }
            }
        })
        .catch(error => console.error('Error fetching IP data:', error));
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">IP Bilgileri</h5>
          <p><strong>Kıta:</strong> ${data.continent} (${data.continentCode})</p>
          <p><strong>Ülke:</strong> ${data.country} (${data.countryCode})</p>
          <p><strong>Bölge:</strong> ${data.regionName} (${data.region})</p>
          <p><strong>Şehir:</strong> ${data.city}</p>
          <p><strong>Posta Kodu:</strong> ${data.zip}</p>
          <p><strong>Zaman Dilimi:</strong> ${data.timezone} (UTC Offset: ${data.offset})</p>
          <p><strong>Para Birimi:</strong> ${data.currency}</p>
          <p><strong>İSS:</strong> ${data.isp}</p>
          <p><strong>Organizasyon:</strong> ${data.org}</p>
          <p><strong>Mobil:</strong> ${data.mobile ? 'Evet' : 'Hayır'}</p>
          <p><strong>Proxy:</strong> ${data.proxy ? 'Evet' : 'Hayır'}</p>
          <p><strong>Hosting:</strong> ${data.hosting ? 'Evet' : 'Hayır'}</p>
        </div>
      </div>
    `;

    const lat = data.lat;
    const lon = data.lon;
    const mapDiv = document.getElementById('map');
    mapDiv.innerHTML = `
      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.1}%2C${lat - 0.1}%2C${lon + 0.1}%2C${lat + 0.1}&layer=mapnik&marker=${lat}%2C${lon}"
        style="border: 1px solid black"></iframe>
      <br/><small><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=12/${lat}/${lon}">Büyük Harita Görüntüle</a></small>
    `;

    adjustMapHeight();
}

function adjustMapHeight() {
    const resultCardHeight = document.getElementById('result').offsetHeight;
    document.getElementById('map').style.height = resultCardHeight + 'px';
}

document.addEventListener('DOMContentLoaded', fetchUserIP);
