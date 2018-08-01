var map;
var chicago = {lat: 41.85, lng: -87.65};
var singapore = {lat: 1.3521, lng: 103.8198};
var london = {lat: 51.5074, lng: 0.1278};
var tokyo = {lat: 35.6895, lng: 139.6917};
var ntu = {lat: 1.34831, lng: 103.683135};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: chicago
  });

  //set up custom buttons
  var worldbuttonOptions = {
    gmap: map,
    name: 'World',
    position: google.maps.ControlPosition.TOP_RIGHT,
    action: function(){
      map.panTo(new google.maps.LatLng(singapore));
      map.setZoom(1);
      worldbutton.style.fontWeight = 'bold';
      button1.style.fontWeight = 'normal';
      button2.style.fontWeight = 'normal';
      button3.style.fontWeight = 'normal';
      button4.style.fontWeight = 'normal';
    }
  }
  var worldbutton = new buttonControl(worldbuttonOptions);

  var button1Options = {
    gmap: map,
    name: 'Singapore',
    position: google.maps.ControlPosition.TOP_RIGHT,
    action: function(){
      map.panTo(new google.maps.LatLng(singapore));
      worldbutton.style.fontWeight = 'normal';
      button1.style.fontWeight = 'bold';
      button2.style.fontWeight = 'normal';
      button3.style.fontWeight = 'normal';
      button4.style.fontWeight = 'normal';
    }
  }
  var button1 = new buttonControl(button1Options);

  var button2Options = {
    gmap: map,
    name: 'Chicago',
    position: google.maps.ControlPosition.TOP_RIGHT,
    action: function(){
      map.panTo(new google.maps.LatLng(chicago));
      worldbutton.style.fontWeight = 'normal';
      button1.style.fontWeight = 'normal';
      button2.style.fontWeight = 'bold';
      button3.style.fontWeight = 'normal';
      button4.style.fontWeight = 'normal';
    }
  }
  var button2 = new buttonControl(button2Options);

  var button3Options = {
    gmap: map,
    name: 'London',
    position: google.maps.ControlPosition.TOP_RIGHT,
    action: function(){
      map.panTo(new google.maps.LatLng(london));
      worldbutton.style.fontWeight = 'normal';
      button1.style.fontWeight = 'normal';
      button2.style.fontWeight = 'normal';
      button3.style.fontWeight = 'bold';
      button4.style.fontWeight = 'normal';
    }
  }
  var button3 = new buttonControl(button3Options);

  var button4Options = {
    gmap: map,
    name: 'Tokyo',
    position: google.maps.ControlPosition.TOP_RIGHT,
    action: function(){
      map.panTo(new google.maps.LatLng(tokyo));
      worldbutton.style.fontWeight = 'normal';
      button1.style.fontWeight = 'normal';
      button2.style.fontWeight = 'normal';
      button3.style.fontWeight = 'normal';
      button4.style.fontWeight = 'bold';
    }
  }
  var button4 = new buttonControl(button4Options);

  var centerbuttonOptions = {
    gmap: map,
    name: 'Center Map',
    position: google.maps.ControlPosition.BOTTOM_CENTER,
    action: function(){
      map.panTo(new google.maps.LatLng(ntu));
      map.setZoom(16);
      worldbutton.style.fontWeight = 'normal';
      button1.style.fontWeight = 'normal';
      button2.style.fontWeight = 'normal';
      button3.style.fontWeight = 'normal';
      button4.style.fontWeight = 'normal';
    }
  }
  var centerbutton = new buttonControl(centerbuttonOptions);

  // Add additional class to right most button for right-margin
  worldbutton.className = 'button mother-button';
  centerbutton.className = 'button mother-button';
  button1.className = 'button rightest-button';
  button4.className = 'button leftest-button';

}

function buttonControl(options) {
  var control = document.createElement('DIV');
  control.innerHTML = options.name;
  control.className = 'button';
  control.index = 1;

  // Add the control to the map
  options.gmap.controls[options.position].push(control);
  google.maps.event.addDomListener(control, 'click', options.action);
  return control;
}