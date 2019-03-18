// 1. a function that deals with taking us to the next slide

// here we assign a function to our nextSlide variable
var nextSlide = function () {
	// increment our currentSlide value by reassigning it and incrementing it by 1
  currentSlide = currentSlide + 1
  
	// here we test to check whether the currentSlide number is greater than 
	// or equal to the numberOfSlides. If it is, we are going to set the currentSlide
	// back to zero (its initial state)
  if (currentSlide >= totalSlides) {
  	currentSlide = 0
  }
  
  moveSlide(currentSlide)
  
}

// 2. a function that deals with taking us to the previous slide

var previousSlide = function () {
	// this is identical to our nextSlide function, apart from that 
	// we are decrementing the currentSlide value (taking us back rather
	// than forwards)
  currentSlide = currentSlide - 1
  
	// if our currentSlide is less than 0, we want to set our currentSlide
	// to the last one 
  if (currentSlide < 0) {
		// we subtract 1 from our currentSlide as we are using the array index
  	currentSlide = totalSlides - 1
  } 
  
  moveSlide(currentSlide)



$('.next').on('click', function(){
    nextSlide()
})

$('.prev').on('click', function(){
    previousSlide()
})