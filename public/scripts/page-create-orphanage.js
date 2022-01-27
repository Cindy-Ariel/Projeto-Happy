//create map
const map = L.map("mapid").setView([-19.9182312, -44.0000836], 11);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

//create icon
const icon = L.icon({
	iconUrl: "./public/images/map-marker.svg",
	iconSize: [58, 68],
	IconAnchor: [29, 68],
	
});

let marker;

//create and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // remover icon
     marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

