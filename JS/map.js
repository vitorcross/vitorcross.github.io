// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 51.523816969576345, lng: -0.15832742193983654 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
