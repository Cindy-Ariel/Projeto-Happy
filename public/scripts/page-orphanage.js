const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false,
};

//create map
const map = L.map("mapid", options).setView([-19.9182312, -44.0000836], 11);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
	iconUrl: "/images/map-marker.svg",
	iconSize: [58, 68],
	IconAnchor: [29, 68],
	popupAnchor: [170, 2],
});

//create and add marker
L.marker([-19.9182312, -44.0000836], { icon }).addTo(map);

/* image gallery */
function selectImage(event) {
	const button = event.currentTarget;
	console.log(button.children);

	const buttons = document.querySelectorAll(".images button");
	buttons.forEach(removeActiveClass);

	function removeActiveClass(button) {
		button.classList.remove("active");
	}
	const image = button.children[0];
	const imageContainer = document.querySelector("orphanage-details > img");
	imageContainer.src = image.src;
	button.classList.add("active");
}
