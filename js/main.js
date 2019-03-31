
 // MAP
// initialize the map on the "map" div with a given center and zoom
var map = L.map('map',{
  scrollWheelZoom: false,
  zoomSnap: 0.2
}).setView([42.3500, -71.061], 13);

var OpenMapSurfer_Grayscale  = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://giscience.uni-hd.de/">OpenStreetMap</a>'
}).addTo(map);

var myStyle = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};

 // create custom icon
 var foodIcon = L.icon({
  iconUrl: "assets/icons/foodinpublic.svg",
  iconSize: [25, 45], // size of the icon
  popupAnchor: [0,-15],
  shadowAnchor: [4, 62],  // the same for the shadow
  });

  // create popup contents
  var customPopup1 = "Back Bay<br/><img src='http://joshuafrazier.info/images/maptime.gif' alt='maptime logo gif' width='1200px'/>";
  
  var customPopup2 = "Allston<br/><img src='http://joshuafrazier.info/images/maptime.gif' alt='maptime logo gif' width='1200px'/>";
  // specify popup options 
  var customOptions =
      {
      'maxWidth': '4000',
      'className' : 'custom'
      }
  
  // create marker object, pass custom icon as option, pass content and options to popup, add to map
  L.marker([42.349877, -71.078067], {icon: foodIcon}).bindPopup(customPopup1,customOptions).addTo(map);
  L.marker([42.351144, -71.131478], {icon: foodIcon}).bindPopup(customPopup2,customOptions).addTo(map);
  L.marker([42.341057, -71.087680], {icon: foodIcon}).addTo(map).bindPopup("NEU");




// var PlaygroundIcon = L.icon({
//   iconUrl: "images/playground_new.png",
//   iconSize:     [25, 25], // size of the icon
//   // shadowSize:   [50, 64], // size of the shadow
//   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62],  // the same for the shadow
//   popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

 
 

// function initMap() {
//     var myLatLng = {lat: 42.3500, lng: -71.061};

//     //Initializing the map  
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: myLatLng,
//       styles: [
//         {"elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#f5f5f5"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.icon",
//           "stylers": [
//             {
//               "visibility": "on"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#d59563"
//             }
//           ]
//         },
//         {
//           "elementType": "labels.text.stroke",
//           "stylers": [
//             {
//               "color": "#f5f5f5"
//             }
//           ]
//         },
//         {
//           "featureType": "administrative.land_parcel",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "administrative.land_parcel",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#bdbdbd"
//             }
//           ]
//         },
//         {
//           "featureType": "administrative.neighborhood",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#eeeeee"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "labels.text",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#757575"
//             }
//           ]
//         },
//         {
//           "featureType": "poi.business",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#e5e5e5"
//             }
//           ]
//         },
//         {
//           "featureType": "poi.park",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#9e9e9e"
//             }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#ffffff"
//             }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "labels",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "labels.icon",
//           "stylers": [
//             {
//               "visibility": "on"
//             }
//           ]
//         },
//         {
//           "featureType": "road.arterial",
//           "elementType": "labels",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "road.arterial",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#757575"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#dadada"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "labels",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "road.highway",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#616161"
//             }
//           ]
//         },
//         {
//           "featureType": "road.local",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "road.local",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#9e9e9e"
//             }
//           ]
//         },
//         {
//           "featureType": "transit",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "transit.line",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#e5e5e5"
//             }
//           ]
//         },
//         {
//           "featureType": "transit.station",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#eeeeee"
//             }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "geometry",
//           "stylers": [
//             {
//               "color": "#c8d7d4"
//             }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "labels.text",
//           "stylers": [
//             {
//               "visibility": "off"
//             }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "labels.text.fill",
//           "stylers": [
//             {
//               "color": "#9e9e9e"
//             }
//           ]
//         }
//       ]
//     });
//     setMarkers(map);
// }

//       //Multiple Markers
//     var beaches = [
//         ['Back Bay', 42.349877, -71.078067,3],
//         ['Allston', 42.351144, -71.131478,4],
//         ['NEU', 42.341057, -71.087680,5],  
//       ];

// // //Info Contents
// // var infoContent = [
// //     ["Back Bay", "Technology Guest House, Indian Institute of Technology Kharagpur, India"],
// //     ["Allston", "Technology Guest House, Indian Institute of Technology Kharagpur, India"],
// //     ["NEU", "Technology Guest House, Indian Institute of Technology Kharagpur, India"],
   
// // ];


// function setMarkers(map) {
//     // Adds markers to the map.
  
//     // Marker sizes are expressed as a Size of X,Y where the origin of the image
//     // (0,0) is located in the top left of the image.
  
//     // Origins, anchor positions and coordinates of the marker increase in the X
//     // direction to the right and in the Y direction down.
//     var image = {
//       url: 'assets/image_3.jpg',
//       // This marker is 120 pixels wide by 90 pixels high.
//     //   size: 'new google.maps.Size(200, 200)',
//     size: 200,
//     //   // The origin for this image is (0, 0).
//     //   origin: new google.maps.Point(0, 0),
//     //   // The anchor for this image is the base of the flagpole at (0, 32).
//     //   anchor: new google.maps.Point(0, 0)
//     };
//     // Shapes define the clickable region of the icon. The type defines an HTML
//     // <area> element 'poly' which traces out a polygon as a series of X,Y points.
//     // The final coordinate closes the poly by connecting to the first coordinate.
//     var shape = {
//       coords: [1, 1, 1, 20, 18, 20, 18, 1],
//       type: 'poly'
//     };
//     for (var i = 0; i < beaches.length; i++) {
//       var beach = beaches[i];
//       var marker = new google.maps.Marker({
//         position: {lat: beach[1], lng: beach[2]},
//         map: map,
//         icon: image,
//         shape: shape,
//         title: beach[0],
//         zIndex: beach[3]
//       });
//     }
//   }

// //Override zoom level of the map





// $('.menu-toggle').on('click', function(){

// $('.menu').toggleClass('open')

// return false

// })
