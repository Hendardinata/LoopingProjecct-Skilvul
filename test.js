// //Divisi Start UP

// let saya = "HR";

// if (saya === "HR") {
//   console.log("tugas saya adalah rekrutmen calon pegawai");
// } else {
//   console.log("tugas saya bukan rekrutmen calon pegawai");
// }

// //Perbandigan

// let a = 1,
//   b = 1;

// if (a > b) {
//   console.log(a + " lebih besar dari " + b);
// } else if (a < b) {
//   console.log(a + " lebih kecil dari " + b);
// } else {
//   console.log(a + " sama dengan " + b);
// }

// //Switch case

// let hari = prompt("pilih angka 1 sampai 7");

// switch (hari) {
//   case "1": {
//     console.log("ini Hari Senin");
//     break;
//   }
//   case "2": {
//     console.log("ini Hari Selasa");
//     break;
//   }
//   case "3": {
//     console.log("ini Hari Rabu");
//     break;
//   }
//   case "4": {
//     console.log("ini Hari Kamis");
//     break;
//   }
//   case "5": {
//     console.log("ini Hari Jum'at");
//     break;
//   }
//   case "6": {
//     console.log("ini Hari Sabtu");
//     break;
//   }
//   case "7": {
//     console.log("ini Hari Minggu");
//     break;
//   }
//   default: {
//     console.log("Pilih angka dari 1 sampai 7");
//   }
// }

// let Game = prompt("Isikan salah satu kata antara, UP, RIGHT, BOTTOM, LEFT");

// switch (Game) {
//   case "UP": {
//     console.log("Karakter Berjalan Ke Atas");
//     break;
//   }
//   case "RIGHT": {
//     console.log("Karakter Berjalan Ke Right");
//     break;
//   }
//   case "BOTTOM": {
//     console.log("Karakter Berjalan Ke Bottom");
//     break;
//   }
//   case "LEFT": {
//     console.log("Karakter Berjalan Ke LEFT");
//     break;
//   }
//   default: {
//     console.log("Isikan salah satu kata antara, UP, RIGHT, BOTTOM, LEFT");
//   }
// }

//LOOPING
console.log("===============================================");
console.log("SOAL 1");
console.log("===============================================");

let loop = 1;

for (loop; loop <= 100; loop++) {
  console.log("User ke " + loop);
}

//FOR LOOP
console.log("===============================================");
console.log("SOAL 2");
console.log("===============================================");

let nA = 0,
  p = 20;

for (nA; nA < p; nA += 2) {
  console.log("Pengulangan Sebanyak " + nA);
}

//FOR LOOP GANJIL GENAP
console.log("===============================================");
console.log("SOAL 3");
console.log("===============================================");

let awal = 0;

for (awal; awal <= 20; awal++) {
  if (awal % 2 == 0) {
    console.log("Bilangan " + awal + " adalah GENAP");
  } else {
    console.log("Bilangan " + awal + " adalah GANJIL");
  }
}

//POP UP
console.log("===============================================");
console.log("SOAL 4");
console.log("===============================================");

let result = true;
let index = 0;

while (result == true) {
  result = confirm("Apakah Mau Lanjut?");
  index += 1;
}
console.log("Perulangan telah di lakukan sebanyak " + index);

//PROGRAM KUIS LOOP
console.log("===============================================");
console.log("SOAL 5");
console.log("===============================================");

let inputan;
let result2 = true;

while (result2 === true) {
  inputan = prompt("Sebutkan Kepanjangan dari IB");
  if (
    inputan === "Impact Byte" ||
    inputan === "IMPACT BYTE" ||
    inputan === "impact byte"
  ) {
    alert("Selamat Jawaban Kamu Benar!.");
    result2 = false;
  }
}
console.log("Program Berjalan Dengan Baik");
