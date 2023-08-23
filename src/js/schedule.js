/**
 * schedule.js
 * 
 *  ------- Website Kelas ------
 * 
 * Name: website-mipa-satu
 * Author: Khuirul-Huda (@khuirul_huda)
 * Source Code: https://github.com/Khuirul-Huda/website-mipa-satu
 * 
 * ------------------------------
**/


const schedule = {
  "Senin": [
    "😃😃😃",
    "IPA",
    "IPA",
    "IPA",
    "Bahasa Indonesia",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Bahasa Inggris"
    ],
"Selasa": [
  "PENJAS",
  "PENJAS",
  "PABP",
  "PABP",
  "Seni Budaya",
  "Seni Budaya",
  "Seni Budaya"
  ],
"Rabu": [
  "Matematika",
  "Matematika",
  "IPA",
  "IPA",
  "Bahasa Sunda",
  "Bahasa Sunda",
  "IPS",
  "IPS"
],
"Kamis": [
  "Ppkn",
  "Ppkn",
  "Bahasa Inggris",
  "Bahasa Inggris",
  "Prakarya",
  "Prakarya",
  "Bahasa Indonesia",
  "Bahasa Indonesia"
],
"Jumat": [
  "IPS",
  "IPS",
  "Matematika",
  "Matematika",
  "Bahasa Indonesia",
  "Bahasa Indonesia"
  
  ]

}

let jadwalInner = document.getElementById('jadwal').innerHTML;
document.getElementById('jadwal').innerHTML = null


let str = ""



for (let day in schedule) {
  str = ""
  
  for (let hrs = 0; hrs < schedule[day].length; hrs++ ) {
    str += `${schedule[day][hrs]} <br>`
    
    if (hrs == schedule[day].length - 1) {
      document.getElementById('jadwal').innerHTML += jadwalInner.replace('harii', day).replace('jdwll', str)
    }
  }
}

/**
for (let h = 0; h < schedule.senin.length; h++) {
  str += `${schedule.senin[h]} <br>`
  if (h == schedule.senin.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Senin')
  document.getElementById('jadwal').innerHTML = tmp
}

str = ""
for (let h = 0; h < schedule.selasa.length; h++) {
  str += `${schedule.selasa[h]} <br>`
  if (h == schedule.selasa.length - 1) tmp += template.replace('hari', 'Senin').replace('jdwll', str).replace('hari', 'Selasa')
  document.getElementById('jadwal').innerHTML = tmp
}


**/
