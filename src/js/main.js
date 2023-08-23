jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.64111111
});

var typed = new Typed('.herotext',{
    strings:["Comment allez vous?", "Semoga kita semua lulus", "kita semua hebat"],
    backSpeed: 40,
    typeSpeed: 70,
    loop: true,
    shuffle: true,
    showCursor: false
  });

  document.getElementById('sosmed-ig').onclick = function () {
      window.open("https://instagram.com/9j.betwo", "_blank")
  }

