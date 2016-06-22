var augusta           = [33.473170, -82.011233],
    columbia          = [39.204402, -76.874016],
    bavaria           = [49.790244, 9.951267],
    fortlee           = [37.248803, -77.339947],
    sachse            = [32.976310, -96.595003],
    charlottesville   = [38.030061, -78.476736],
    rochester         = [43.162346, -77.618570],
    montclair         = [38.617130, -77.349976],
    woodbridge        = [38.641498, -77.266830],
    woodbridge2       = [38.598472, -77.279385],
    blacksburg        = [37.229748, -80.414694];

var route = L.featureGroup([
  L.marker(augusta).bindPopup("Augusta, Georgia"),
  L.polyline([augusta, columbia]),
  L.marker(columbia).bindPopup("Columbia, Maryland"),
  L.polyline([columbia, bavaria]),
  L.marker(bavaria).bindPopup("Würzburg, Bavaria, Germany"),
  L.polyline([bavaria, fortlee]),
  L.marker(fortlee).bindPopup("Fort Lee, Virginia"),
  L.polyline([fortlee, sachse]),
  L.marker(sachse).bindPopup("Sachse, Texas"),
  L.polyline([sachse, charlottesville]),
  L.marker(charlottesville).bindPopup("Charlottesville, Virginia"),
  L.polyline([charlottesville, rochester]),
  L.marker(rochester).bindPopup("Rochester, New York"),
  L.polyline([rochester, montclair]),
  L.marker(montclair).bindPopup("Montclair, Virginia"),
  L.polyline([montclair, woodbridge]),
  L.marker(woodbridge).bindPopup("Woodbridge, Virginia"),
  L.polyline([woodbridge, blacksburg]),
  L.marker(blacksburg).bindPopup("Blacksburg, Virginia"),
  L.polyline([blacksburg, woodbridge2]),
  L.marker(woodbridge2).bindPopup("Woodbridge 2, Virginia")
]);

var map = L.map('map');

var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

L.control.attribution({position: 'topright'}).addTo(map);

map.fitBounds(route.getBounds());

route.addTo(map).snakeIn();
