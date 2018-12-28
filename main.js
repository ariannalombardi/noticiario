function openMenu() {
  document.getElementById('menu').style.display = 'flex'
}

function closeMenu() {
  document.getElementById('menu').style.display = 'none'
}

$('document').ready(function () {
  $('#open-menu-btn').click(openMenu)
  $('#close-menu-btn').click(closeMenu)
  $('#menu a').click(closeMenu)

  $('.carousel-feed').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<button type="button" class="carousel-next"><i class="fa fa-chevron-right"></i></button>',
    prevArrow: '<button type="button" class="carousel-prev"><i class="fa fa-chevron-left"></i></button>',
  })
})