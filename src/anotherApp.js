function initMap() {
  const options = {
    center: { lat: 52.52, lng: 13.405 },
    zoom:50 ,
    mapType: google.maps.MapTypeId.ROADMAP,
  };
  map = new google.maps.Map(document.getElementById("map"), options);
}
initMap()