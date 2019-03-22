var map;
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 42.335, lng: -71.015},
      zoom: 12,
      mapTypeId: 'satellite'
    });
    map.setTilt(45);
  }

function rotate90() {
  var heading = map.getHeading() || 0;
  map.setHeading(heading + 90);
}

function autoRotate() {
  // Determine if we're showing aerial imagery.
  if (map.getTilt() !== 0) {
    window.setInterval(rotate90, 3000);
  }
}


$('.menu-toggle').on('click', function(){

$('.menu').toggleClass('open')

return false

})
