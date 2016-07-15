$('#thoughts').submit(function(){
  var thought = $("#thought").val();
      if (thought == "") {
        $("#thought").css({"border" : "1px solid #ff7777"});
        $("#thought").focus();
        return false;}else{
           $('#thought').animate({"margin-bottom":"0px", "cursor":"default"},300);
        }
      return false;
     
    });

$('#thought-send').click(function(){
 $.post( 
 $('#thoughts').attr('action'),
 $('#thoughts :input').serializeArray(),

   function(result){
  
   $('#thought-send').attr("value", "Thank You");
 }

 );
});


function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(44.5403, -78.5463),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);