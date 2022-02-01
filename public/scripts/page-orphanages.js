//create map
const map = L.map("mapid").setView([-19.9182312, -44.0000836], 11);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
	iconUrl: "/images/map-marker.svg",
	iconSize: [58, 68],
	IconAnchor: [29, 68],
	popupAnchor: [170, 40],
});
//create popup overlay
const popup = L.popup({
	closeButton: false,
	className: "map-popup",
	minWidth: 240,
	minHeight: 240,
}).setContent(
	'Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" ></a>'
);

//create and add marker
L.marker([-19.9182312, -44.0000836], { icon }).addTo(map).bindPopup(popup);
