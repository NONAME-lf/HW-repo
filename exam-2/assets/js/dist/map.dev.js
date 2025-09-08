"use strict";

var mapLink = document.getElementById("load-map-link");

mapLink.onclick = function (e) {
  e.preventDefault();
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", "assets/js/map-master/leaflet.css");
  document.head.append(link);
  var script = document.createElement("script");
  script.src = "assets/js/map-master/leaflet.js";
  script.onload = initMap;
  document.body.append(script);
};

function initMap() {
  mapLink.remove(); // https://tile.openstreetmap.org/{z}/{x}/{y}.png

  var map = L.map("map").setView([40.657398972846416, -73.89017185450878], 13);
  var myIcon = L.icon({
    iconUrl: "http://127.0.0.1:5500/exam-2/assets/img/marker.svg",
    iconSize: [106, 106]
  });
  L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
  }).addTo(map);
  L.marker([40.67959842315331, -73.90396068726848], {
    icon: myIcon
  }).addTo(map).bindPopup("<b>Monticello</b> -<br> Our trade center.");
}