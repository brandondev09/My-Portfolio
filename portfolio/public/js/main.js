jQuery(document).ready( function($) {
  //==================== Lang Buttons ====================//
  $('.lang-button').click(function(e){
    e.preventDefault();
    $('.single-location-page').toggleClass('fr').toggleClass('en');
    if ($('.single-location-page').hasClass('fr')) {
      document.title = 'Toni Plus | ' + jQuery('.lang-container.fr h1').text();
    } else {
      document.title = 'Toni Plus | ' + jQuery('.lang-container.en h1').text();
    }
  });
  //==================== Sliders ====================//
  var promoSlider = $('#promo-slider');
  promoSlider.unslider({
    speed: 500,
    delay: 10000,
    autoplay: true,
    dots:false,
    nav: false,
    infinite: true
  });
    promoSlider.unslider('initSwipe');

  //==================== Back To Top ====================//
  var backToTop    = $('#back-to-top');
  var scrollSpeed  = 750;

  $(window).scroll(function(){
    var yScroll = window.pageYOffset;
    if (yScroll > 700) {
      backToTop.addClass('visible');
    } else {
      backToTop.removeClass('visible');
    }
  });

  backToTop.click(function(e){
    e.preventDefault();
    $('body').animate({scrollTop: 0}, scrollSpeed);
  });

  //==================== Main Menu ====================//
  var closeSidebarMenu = $('#close-sidebar-menu');
  var openSidebarMenu  = $('#open-sidebar-menu');
  var sidebarMenu      = $('.sidebar-menu');
  var blackOverlay     = $('.black-overlay');
  var bodySelector     = $('body');
  var mainContainer    = $('#main-container');
  var headerSelector   = $('header');
  var mainMenu         = $('.main-menu');
  var searchContainer  = $('.search-container');
  var openSearch       = $('#open-search');
  var windowSelector   = $(window);
  var menuItems        = $('#menu-main-menu li a, #menu-main-menu-1 li a');
  var devMenuItems     = $('#menu-dev li a');
  //== Toggle Menu ==//
  function toggleSidebarMenu() {
    blackOverlay.toggle();
    mainContainer.toggleClass('sidebarOpen');
    headerSelector.toggleClass('sidebarOpen');
    mainMenu.toggleClass('sidebarOpen');
    sidebarMenu.toggleClass('open');
  }

  //== Close Menu ==//
  closeSidebarMenu.click(function(){
    toggleSidebarMenu();
  });

  //== Open Menu ==//
  openSidebarMenu.click(function(){
    searchContainer.removeClass('open');
    toggleSidebarMenu();
  });

  openSearch.click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass('openSearch');
    if ($(this).parent().hasClass('openSearch')) {
      $(this).parent().children('form').children('input').focus();
    }
  });

  var scrollPosition = 10;

  menuItems.each(function(){
    if ($(this).text().indexOf('Shop Online') > -1) {
      $(this).addClass('box').css({'width': '150px'});
    }
  });

  devMenuItems.each(function(){
    console.log($(this))
    if($(this).text().indexOf("What’s New") > -1) {
      $(this).addClass('box').css({'width': '150px'});
    }  
  });


$('#menu-main-menu-1 li a.box').parent().addClass('box-parent');

  //==================== Instagram Feed ====================//
  var instagramUrl = 'https://api.instagram.com/v1/users/2166002590/media/recent?access_token=2166002590.4812101.ff2acba98e6942169a07944e646770e6&callback=JSON_CALLBACK';

  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    cache: false,
    url: instagramUrl,
    error: function(error) {
      console.log(error);
    },
    success: function(data) {
      for (var i = 0; i < 6; i++) {
        var imageUrl = data.data[i].images.standard_resolution.url;
        var hugeBackground = '';

        $('#instagram-feed').append('<a href="https://www.instagram.com/toniplus14_22/" target="_blank"><div class="instagram-image" style="background-image:url(' + imageUrl +');' + hugeBackground + '"></div></a>');
        $('#instagram-slider ul').append('<li><a href="https://www.instagram.com/toniplus14_22/" target="_blank"><div class="instagram-image" style="background-image:url(' + imageUrl +');' + hugeBackground + '"></div></a></li>');
      }
      getInstagramImageSize();
      $('#instagram-slider').unslider({
        infinite: true,
        speed: 500,
        delay: 5000,
        autoplay: true
      });
    }
  });

  function getInstagramImageSize() {
    var instagramImage = $('#instagram-feed .instagram-image');
    var instagramImageWidth = instagramImage.width();

    var instagramImageSlider = $('#instagram-slider ul li a .instagram-image');
    var instagramImageWidthSlider = instagramImageSlider.width();

    instagramImage.css({'height': instagramImageWidth});
    instagramImageSlider.css({'height': instagramImageWidthSlider});
  }

  $(window).resize(function() {
    getInstagramImageSize()
  });

  //==================== New Looks ====================//
  $('.amazingcarousel-image-fix-wrapper').next().each(function(){
      if ($(this).text() == 'WordPress Carousel Free Version') {
        $(this).addClass('hide-box');
      }
  });

  $('.amazingcarousel-next').css({
    'background': 'url()'
  });

  $('.amazingcarousel-prev').css({
    'background': 'url()'
  });

  $('.amazingcarousel-next').append('<i class="fa fa-angle-right"></i>');
  $('.amazingcarousel-prev').append('<i class="fa fa-angle-left"></i>');

  //==================== Slide in Section ====================//
  var slideInButton = $('section.sliding .button');
  var sectionSliding = $('section.sliding');

  function toggleSlideContent(selector) {
    var thisSlideContent = selector.parent().parent().children('.column').children('.slide-content');
    var thisSection = selector.parent().parent();
    var getHeight = thisSlideContent.children('.inner').height();

    if (thisSection.hasClass('open') == false) {
      resetAllSlideSections();
      thisSection.addClass('open');
      thisSlideContent.css({'height': getHeight + 'px'})
      selector.children('span').text('Read Less');
    } else {
      resetAllSlideSections();
    }
  }

  function resetAllSlideSections() {
    $('section.open').removeClass('open');
    $('section .column .slide-content').css({'height': '0'});
    $('section.sliding .button').children('span').text('Read More');
  }

  slideInButton.click(function(e){
    e.preventDefault();
    toggleSlideContent($(this));
  });

  //==================== Checkbox ====================//
  $('.checkbox').click(function(){
    $(this).toggleClass('fa-check-square-o').toggleClass('fa-square-o');
    if ($(this).hasClass('fa-check-square-o')) {
      $(this).prev().children().click();
      $(this).prev().children().children().children().first().click();
    } else {
      $(this).prev().children().click();
      $(this).prev().children().children().children().first().click();
    }
  });

  $('.locations-list .single-location .montreal').parent().parent().parent().children('.button').text('Inscrivez-vous pour être informé de notre début').attr('href', 'http://toniplus.com/subscribe/');
  $('.locations-list .single-location .montreal').parent().parent().parent().children('h3').children('a').attr('href', 'http://toniplus.com/subscribe/');
  $('.locations-list .single-location .montreal').parent().parent().parent().children('.button').css({
    'height': '65px',
    'line-height': '1.1',
    'width': '200px',
    'text-align': 'center',
    'padding-left': '10px',
    'padding-right': '10px'
  });

  //==================== Ecommerce ====================//
  var productSliderThumbnails = $('.jssort02').children();
  var woocommerceImages = $('#slider1_container > div > .woocommerce-images').children();
  productSliderThumbnails.addClass('top-zero');
  woocommerceImages.addClass('left-more');

  $('.left-more a').click(function(e){
    e.preventDefault();
  });

  var productDescription = $('div[itemprop="description"]');

  $('#product-details').remove().clone().appendTo(productDescription);

  $('.shop-wrapper .quantity').prepend('<p class="q-label">Quantity</p>');

  $('#billing_first_name, #shipping_first_name').attr('placeholder', 'First Name');
  $('#billing_last_name, #shipping_last_name').attr('placeholder', 'Last Name');
  $('#billing_email').attr('placeholder', 'Email');
  $('#billing_city, #shipping_city').attr('placeholder', 'City');
  $('#billing_phone').attr('placeholder', 'Phone');
  $('#billing_postcode, #shipping_postcode').attr('placeholder', 'Postal Code');
  $('#billing_company, #shipping_company').parent().remove();

  var bustWidthInput = $('#bust-width');
  var hipWidthInput = $('#hip-width');
  var waistWidthInput = $('#waist-width');
  var yourSizeInput = $('#your-size');
  //== Store Sizes ==//
  var bustWidth;
  var hipWidth;
  var waistWidth;

  $('#size-chart input').click(function(){

      $('ul.custom-dropdown').hide();

    if ($(this).hasClass('start')) {
      $(this).parent().children('ul.custom-dropdown').toggle();
      $('ul.custom-dropdown.current').removeClass('current');
      $('#clothing-group').val('--');
      $('#bust-width').val('Bust Width');
      $('#waist-width').val('Waist Width');
      $('#hip-width').val('Hip Width');
      $('#your-size').val('--');
    } else {
      $(this).parent().children('ul.custom-dropdown.current').toggle();
    }

  });

  $('#size-chart i.fa-angle-down').click(function(){

      $('ul.custom-dropdown').hide();

    if ($(this).parent().children('input').hasClass('start')) {
      $(this).parent().children('ul.custom-dropdown').toggle();
      $('ul.custom-dropdown.current').removeClass('current');
      $('#clothing-group').val('--');
      $('#bust-width').val('Bust Width');
      $('#waist-width').val('Waist Width');
      $('#hip-width').val('Hip Width');
      $('#your-size').val('--');
    } else {
      $(this).parent().children('ul.custom-dropdown.current').toggle();
    }

  });

var getCurrentDropdown;

function getDropdownNumber(selector) {
  var thisID = selector.attr('id');
  getCurrentDropdown = thisID.replace('size-chart-post-', '');
  $('#article-' + getCurrentDropdown).addClass('current');
  $('#bust-' + getCurrentDropdown).addClass('current');
  $('#waist-' + getCurrentDropdown).addClass('current');
  $('#hip-' + getCurrentDropdown).addClass('current');
  $('#table-' + getCurrentDropdown).addClass('current');
}


  $('#size-chart li').click(function(){

    //== Set Dropdown Text ==//
    var valueText = $(this).text();
    $(this).parent().parent().children('input').val(valueText);
    $(this).parent().toggle();

    if ($(this).parent().parent().children('input').hasClass('start')) {
      //== Set Current Dropdown ==//
      getDropdownNumber($(this));
    } else {
      //== If Bust Input ==//
      if ($(this).parent().parent().children('input').attr('id') == 'bust-width') {
        bustWidth = $(this).text();
      } else if ($(this).parent().parent().children('input').attr('id') == 'hip-width') {
        hipWidth = $(this).text();
      } else if ($(this).parent().parent().children('input').attr('id') == 'waist-width') {
        waistWidth = $(this).text();
      }
    }

    //== Find Biggest Width ==//
    if (bustWidth > hipWidth && bustWidth > waistWidth) {
      var getSelector = document.querySelectorAll('#table-' + getCurrentDropdown + ' .row .bust');
      for (var i = 0; i < getSelector.length; i++) {
        if (bustWidth == parseInt(getSelector[i].innerHTML)) {
          yourSizeInput.val(getSelector[i].parentNode.childNodes[1].innerHTML.replace(/\s+/g, ''));
        }
      }
    } else if (bustWidth == hipWidth) {
      var getSelector = document.querySelectorAll('#table-' + getCurrentDropdown + ' .row .bust');
      for (var i = 0; i < getSelector.length; i++) {
        if (bustWidth == parseInt(getSelector[i].innerHTML)) {
          yourSizeInput.val(getSelector[i].parentNode.childNodes[1].innerHTML.replace(/\s+/g, ''));
        }
      }
    } else if (hipWidth > bustWidth && hipWidth > waistWidth) {
      var getSelector = document.querySelectorAll('#table-' + getCurrentDropdown + ' .row .hip');
      for (var i = 0; i < getSelector.length; i++) {
        if (hipWidth == parseInt(getSelector[i].innerHTML)) {
          yourSizeInput.val(getSelector[i].parentNode.childNodes[1].innerHTML.replace(/\s+/g, ''));
        }
      }
    } else {
      var getSelector = document.querySelectorAll('#table-' + getCurrentDropdown + ' .row .waist');
      for (var i = 0; i <  getSelector.length; i++) {
        if (waistWidth == parseInt(getSelector[i].innerHTML)) {
          yourSizeInput.val(getSelector[i].parentNode.childNodes[1].innerHTML.replace(/\s+/g, ''));
        }
      }
    }


  });

  $('#sidebar').on('click', '.cat-parent > a', function(e) {
    e.preventDefault();
    $(this).children('i').toggleClass('fa-minus').toggleClass('fa-plus');
    $(this).parent().children('ul').slideToggle();
  });

  $('.cat-parent > a').each(function(){
    $(this).append('<i class="fa fa-plus"></i>');
    $(this).append('<i class="fa fa-minus desktop"></i>');
  });

  $('#toggle-sidebar .button').click(function(e){
    e.preventDefault();
    $(this).parent().next().slideToggle();
  });

  var productSwatch = $('.swatchinput');

  productSwatch.each(function(){
    if ($(this).children('label').attr('data-option') == '0x') {
      var thisParent = $(this).parent();
      $(this).remove().clone().prependTo(thisParent);
    }
  });

var productMeta = $('.product_meta').remove().clone();
$('.product h1').after(productMeta);

// var giftCardCat = $('.cat-item-472').remove().clone();
// $('#woocommerce_product_categories-2 .product-categories').append(giftCardCat);

var trendingNow = $('.cat-item-511').remove().clone();
$('#woocommerce_product_categories-2 .product-categories').prepend(trendingNow);

var saleCat = $('.cat-item-513').remove().clone();
$('#woocommerce_product_categories-2 .product-categories').append(saleCat);

$('.cat-item-513').children('a').addClass('parent-text');

$('.reset_variations').text('').before('<a class="find-your-size" href="#">Find Your Size</a>');

var scrollSpeed  = 750;
var scrollPad    = 300;

$('.woocommerce-tabs').attr('id', 'products-tabz');

$('.find-your-size').click(function(e){
  e.preventDefault();
  $('#tab-title-size_chart a').click();
  $('body, html').animate({
    scrollTop: $('#size-chart').offset().top-scrollPad
  }, scrollSpeed);

});

$('tr.shipping td').each(function(){
  if ($(this).attr('data-title') == 'Shipping') {
    var thisText = $(this).text();
    if(thisText.indexOf("Rate:") !== -1) {
      thisText = '$15.00';
    } else {
      thisText = 'Free';
    }
    $(this).text(thisText);
  }
});

var url = $(location).attr('href');

if (url == 'http://toniplus.com/online-store/') {
  document.title = 'Toni Plus | Online Store';
}

//== Promo ==//
// var promoCat = $('.product_cat-winter-outerwear');

$('.onsale').text('Sale');

// promoCat.each(function(){
//   if ($(this).hasClass('product_cat-sale') == false) {
//     console.log(true)
//     $(this).append('<span class="onsale promo">Save up to $150</span>');
//   }
// });

// if ($('.single-product .product_cat-winter-outerwear').hasClass('product_cat-sale') == false) {
//   $('.single-product .product_cat-winter-outerwear .price').before('<p class="promo-text">Save $25 towards your outerwear purchase of up to $349.</br>Save $75 towards your outerwear purchase of $350 to $999.</br>Save $150 towards your outerwear purchase of $1,000 or more.</p>');
// }
//
// $('.single-product .price').before('<p class="promo-text">Save $25 off your minimum purchase of $150 or more.*</br><span style="font-size: 12px;color: inherit;letter-spacing: inherit;line-height: inherit;">*Before shipping and applicable taxes. Discount automatically added to cart.</span></p>');

$('.related.products .promo-text').remove();

$('.wc-no-matching-variations').text('This item is not available in this colour and size.');

var parentSKU = $('.sku_wrapper .sku').text();

$('.sku_wrapper .sku').remove();

$('.sku_wrapper').append('<span class="parent_sku">' + parentSKU + '</span>');

$('.woocommerce-LoopProduct-link img, .yith_magnifier_thumbnail img').attr('title', '');

$('#woocommerce_product_categories-2 li a').each(function(){
  if($(this).text() == 'Gift Cards') {
    $(this).attr('href', 'https://toniplus.com/product/gift-card/?attribute_pa_gift-card-amounts=25-00');
  }
});


// var productThumbnails = $('.woocommerce-product-gallery__wrapper > div');
//
// for(var i = 1; i < productThumbnails.length; i+=5) {
//   productThumbnails.slice(i, i+5).wrapAll("<div class='flex column product_row_thumbnails'></div>");
// }
//
// var firstImage = $('.woocommerce-product-gallery__image').first().children('a').children('img');
//
// var getImageSize = parseInt(firstImage.css('width').replace('px', ''));
//
// firstImage.attr('id', 'thumb-inside');
//
// firstImage.removeAttr('data-src');
// firstImage.removeAttr('data-large_image');
// firstImage.removeAttr('data-large_image_width');
// firstImage.removeAttr('data-large_image_height');
// firstImage.removeAttr('srcset');
// firstImage.removeAttr('sizes');
// firstImage.attr('src', firstImage.attr('src').replace('-428x600', ''));
// firstImage.attr('data-zoom', firstImage.attr('src'));
//
// $('.woocommerce-product-gallery__image a').click(function(e){
//   e.preventDefault();
//   var productCurrentImage = $(this).attr('href');
//   getImageSize = parseInt(firstImage.css('width').replace('px', ''));
//   firstImage.attr('data-zoom', productCurrentImage);
//   firstImage.attr('src', productCurrentImage);
// });

$('.letter-container').each(function(){
  var children = $(this).children('.single-designer').length;
  console.log(children)
  if(children == 0) {
    $(this).remove();
  }

});

$('#designer-names-input').attr('readonly', true);

$('#designer-select').change(function(){
  var currentVal = $('#designer-names-input').val();
  if(currentVal == '') {
    $('#designer-names-input').attr('value', $(this).val())
  } else {
    $('#designer-names-input').attr('value', currentVal + ', ' + $(this).val())
  }
  
});

$('#clear-designers').click(function(){
  $('#designer-names-input').val('');
});


//== End Document.ready ==//
});