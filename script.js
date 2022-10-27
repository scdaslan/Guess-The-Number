'use strict';

// // ------------------ document.querySelector() başlangıç------------------------------
// console.log(document.querySelector('.message').textContent); //start guessing yazar

// document.querySelector('.message').textContent = `Doğru Sayı`; // start huess i doğru sayu olarak değiştirdik ,manipüle ettik

// console.log(document.querySelector('.message').textContent); // doğru sayı yazar console da

// document.querySelector(`.number`).textContent = `!!`; // soru işaretini ünlemle değiştirdik
// document.querySelector(`.label-highscore`).textContent = `Low Energy `; // sembolü low enerji ile değiştirdik

// console.log(document.querySelector(`.guess`).value);
// document.querySelector(`.guess`).value = 25; // value yani değer atadık

let gizliNumara = Math.trunc(Math.random() * 20) + 1;
document.querySelector(`.number`).textContent = gizliNumara;
let puan = 20;
let yüksekPuan = 0;
const ekranMesajı = function (mesaj) {
  document.querySelector(`.message`).textContent = mesaj; // uzun uzunntekrar yazmak yerine fonksiyon tanımlayarak sadece fonsiyona değer vererek hızlı şekilde yazabilirzi
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const tahmin = Number(document.querySelector(`.guess`).value);
  console.log(tahmin, typeof tahmin);
  //   değer girilmemiş
  if (!tahmin) {
    // document.querySelector(`.message`).textContent = 'Sayı Yok';
    ekranMesajı(`Sayı Yok`); // bir üstteki satırın aynısının kısaltılmış hali,üstte fonksiyon tanımladık burda değer verdik
    //oyuncu kazanır
  } else if (tahmin === gizliNumara) {
    // document.querySelector(`.message`).textContent = `Doğru Sayı`;
    ekranMesajı(`Doğru Sayı`);
    document.querySelector(`.number`).textContent = gizliNumara;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (puan > yüksekPuan) {
      yüksekPuan = puan;
      document.querySelector(`.highscore`).textContent = yüksekPuan;
    }

    // yanlış tahmin olduğunda  (aşağıdaki uzun uzun kod satırlarını kısaltılmış halini yazdık)
  } else if (tahmin !== gizliNumara) {
    if (puan > 1) {
      //   document.querySelector(`.message`).textContent =
      //     tahmin > gizliNumara ? `Çok Yüksek` : `Çok Düşük`;
      ekranMesajı(tahmin > gizliNumara ? `Çok Yüksek` : `Çok Düşük`); // kısa hali
      puan--;
      document.querySelector(`.score`).textContent = puan;
    } else {
      document.querySelector(`.message`).textContent = `Kaybettiniz`;
      document.querySelector(`.score`).textContent = 0;
    }
  }

  // yüksek tahmin
  //   } else if (tahmin > gizliNumara) {
  //     if (puan > 1) {
  //       document.querySelector(`.message`).textContent = `Çok Yüksek`;
  //       puan--;
  //       document.querySelector(`.score`).textContent = puan;
  //     } else {
  //       document.querySelector(`.message`).textContent = `Kaybettiniz`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //     // düşük tahmin
  //   } else if (tahmin < gizliNumara) {
  //     if (puan > 1) {
  //       document.querySelector(`.message`).textContent = `Çok Düşük`;
  //       puan--;
  //       document.querySelector(`.score`).textContent = puan;
  //     } else {
  //       document.querySelector(`.message`).textContent = `Kaybettiniz`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //   }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  gizliNumara = Math.trunc(Math.random() * 20) + 1;
  puan = 20;
  document.querySelector(`.message`).textContent = `Tahmin et`;
  document.querySelector(`.number`).textContent = gizliNumara;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = '';
});

// ------------------ document.querySelector() bitiş------------------------------
