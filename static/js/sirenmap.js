
var mymap = L.map('mapid').setView([38.9822, -94.6708], 6);

var streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
}).addTo(mymap)

// var baseMaps = {
//     "Streets": streets
// };

// var overlayMaps = {
//     "States": states
// };

// L.control.layers(baseMaps, overlayMaps).addTo(tmap);

// var outdoor = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     maxZoom: 18,
//     id: "mapbox.outdoors",
//     accessToken: API_KEY
//   }).addTo(mymap);
 
d3.json("/datasets/mapdata.json").then(function(data) {
    console.log(data[0]);
});


var tdata2018 = mapData.filter(function (y) {
    return y.year = 2018;
});
console.log(tdata2018);
// for ( var i=0; i < mapData.length; ++i ) 
// {
//    L.marker( [mapData[i].TouchdownLat, mapData[i].TouchdownLon] )
//       .bindPopup( '<a href="' + mapData[i].Damage + '" F"' + mapData[i].Fujita + '</a>' )
//       .addTo(mymap);
// }
// Set filteredAddresses to addressData initially
// var filteredMapdata = mapData;
// var inputyear = d3.select($userInput)

// console.log("set the placeholder");
// inputyear.attr("placeholder",selectType)
// inputyear.value='';
// var mapData = JSON.parse(mapdata);
// alert(mapData[0].name);
// alert(mapData[0].age);
// alert(mapData[1].name);
// alert(mapData[1].age);
