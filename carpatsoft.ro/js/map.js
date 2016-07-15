
      function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(46.760539, 23.545940),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: '../img/map-pin.png', map: map });
      }
      google.maps.event.addDomListener(window, 'load', initialize);

