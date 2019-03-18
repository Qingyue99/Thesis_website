// the scrollopTop method gives us back a pixel value for how far it is to the top of the page
$(document).on("scroll", function () {
  
  var pixels = $(document).scrollTop();
  
  $("div.progress div.bar").html(pixels + " pixels down")
    
  if (pixels < 1200) {
    $("header").removeClass("hide")
  } else {
    $("header").addClass("hide")
  }
  
  if (pixels < 2900) {
    $("body").css("background-color", "#ffffff")
  } else if (pixels < 3200) {
    $("body").css("background-color", "#a29c97")
  } else if (pixels < 3800) {
    $("body").css("background-color", "#d9dfe4")
  } else if (pixels < 4600) {
    $("body").css("background-color", "#fff0f0")
  } else {
    $("body").css("background-color", "#cdccc7")
  }
  
  var windowHeight = $(window).height()
  var documentHeight = $(document).height()
  var difference = documentHeight - windowHeight
  
  var percentage = 100 * pixels / difference
  
  $("div.progress div.bar").css("width", percentage + "%")

  console.log('I have scrolled')
  
})

