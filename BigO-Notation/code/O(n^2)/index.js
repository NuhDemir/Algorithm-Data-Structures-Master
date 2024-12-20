// Proje: Big O(n^2) Notasyonu Açıklamalı Örnek
// Açıklama: Bu proje, iki iç içe döngü kullanarak Big O(n^2) zaman karmaşıklığını gösteren bir uygulama oluşturur.
// Amaç, bir dizideki eleman çiftlerini karşılaştırmak ve analiz etmektir.

// -------------------------
// 1. HTML Elementlerini Seç
// -------------------------

const arrayInput = document.getElementById("arrayInput"); // Kullanıcının dizi girdiği metin kutusu
const processButton = document.getElementById("processButton"); // İşlem başlatma butonu
const resultList = document.getElementById("resultList"); // Sonuçların görüntüleneceği alan

// -------------------------
// 2. Kullanıcının Girdiği Diziyi İşleme
// -------------------------

// Kullanıcıdan dizi al ve metin olarak işle
function getArray() {
  const arrayText = arrayInput.value.trim(); // Girdiyi al ve boşlukları temizle

  if (arrayText === "") {
    alert("Lütfen bir dizi girin! Örneğin: 1,2,3,4"); // Boşsa uyarı ver
    return [];
  }

  // Virgüllerle ayrılmış metni diziye çevir
  return arrayText
    .split(",")
    .map(Number)
    .filter((item) => !isNaN(item)); // Geçerli sayılara dönüştür
}

// -------------------------
// 3. Tüm Eleman Çiftlerini Karşılaştır
// -------------------------

function processArray(array) {
  resultList.innerHTML = ""; // Eski sonuçları temizle

  const n = array.length; // Dizinin uzunluğu
  const results = []; // Karşılaştırma sonuçlarını saklamak için bir dizi

  for (let i = 0; i < n; i++) {
    // İlk döngü
    for (let j = 0; j < n; j++) {
      // İkinci döngü
      const pair = `(${array[i]}, ${array[j]})`; // Çift olarak göster
      results.push(pair); // Sonuçlara ekle
    }
  }

  renderResults(results); // Sonuçları ekranda göster
}

// -------------------------
// 4. Sonuçları Ekrana Yazdır
// -------------------------

function renderResults(results) {
  results.forEach((result) => {
    const listItem = document.createElement("li"); // Liste öğesi oluştur
    listItem.textContent = result; // Çift bilgisini ekle
    resultList.appendChild(listItem); // Listeye ekle
  });
}

// -------------------------
// 5. Olay Dinleyicilerini Ayarla
// -------------------------

processButton.addEventListener("click", () => {
  const array = getArray(); // Kullanıcıdan diziyi al

  if (array.length > 0) {
    processArray(array); // Dizi üzerinde işlem yap
  }
});

// -------------------------
// 6. Big O(n^2) Notasyonu Hakkında Açıklamalar
// -------------------------

// Zaman Karmaşıklığı Açıklaması:
// 1. Dış döngü n kez çalışır.
// 2. İç döngü, dış döngünün her adımında n kez çalışır.
// 3. Toplam çalışma miktarı n * n = n^2 olur.
//
// Örnek:
// Eğer dizi [1, 2, 3] ise:
// - Döngü şu çiftleri üretir: (1,1), (1,2), (1,3), (2,1), (2,2), (2,3), (3,1), (3,2), (3,3)
// - 3 elemanlı bir dizi için 9 işlem yapılır (3^2 = 9).

// Büyük Girişlerde Performans:
// Eğer n = 10: 10^2 = 100 işlem
// Eğer n = 100: 100^2 = 10,000 işlem
// Eğer n = 1,000: 1,000^2 = 1,000,000 işlem

// Bu nedenle, Big O(n^2) karmaşıklığa sahip algoritmalar büyük veri kümelerinde yavaş çalışır.

// -------------------------
// Örnek Kod Sonu
// -------------------------
