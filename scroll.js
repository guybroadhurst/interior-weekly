// works out how far down the page you have scrolled

$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop()

//  hide the header when scrolled more then 50px down the page
//  
  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }
  
  
//   changes the background color depending on your position on the page
  
  if (pixelsFromTop < 600){
    $('body').css('background-color', '#ffffff')
  } else if (pixelsFromTop < 1400){
    $('body').css('background-color', '#a29c97')
  } else if (pixelsFromTop < 2200){
    $('body').css('background-color', '#d9dfe4')
  } else if (pixelsFromTop < 3000){
    $('body').css('background-color', '#fff0f0')
  } else {
    $('body').css('background-color', '#cdccc7')
  }
  
//   expands the width of the progress bar based on the percentage scrolled down the page 
  
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixelsFromTop / difference
  
  $('.bar').css('width', percentage + '%')
  
  
})
