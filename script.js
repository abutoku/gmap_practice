function initMap() {

  var map;
  var marker;

  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "MAP ID",
    center: { lat: 33.6814149697923, lng: 130.30728777339644 },
    zoom: 12,
  });

  marker = new google.maps.Marker({
    position: { lat: 33.681380832191856, lng: 130.30788927909654},
    map:map,
    title:"hello!",
    icon : {
      url: 'demo.png',
      scaledSize: new google.maps.Size(36, 42)
    },
    animation: google.maps.Animation.BOUNCE,
  });

  marker = new google.maps.Marker({
    position: { lat: 33.64127412493524, lng: 130.19412153731346
},
    map:map,
    title:"hello!",
    icon : {
      url: 'demo2.png',
      scaledSize: new google.maps.Size(36, 42)
    },
    animation: google.maps.Animation.BOUNCE,
  });

}
