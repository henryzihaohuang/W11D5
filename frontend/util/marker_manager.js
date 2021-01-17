export default class MarkerManager {
	constructor(map) {
		this.map = map;
		this.markers = {};
	}
  
  updateMarkers(benches) {
		benches.forEach( bench => {
      if (!this.markers[bench.id]) {
        this.createMarkerFromBench(bench);
      }
    })
  }
  
  createMarkerFromBench(bench) {
    const pos = new google.map.LatLng(bench.lat, bench.lng);

    const marker = new google.maps.Marker({
      pos,
      map: this.map,
      benchId: bench.id
    })

    this.markers[bench.id] = marker
  }
}


// function initMap() {
// 	const myLatLng = { lat: -25.363, lng: 131.044 };
// 	const map = new google.maps.Map(document.getElementById("map"), {
// 		zoom: 4,
// 		center: myLatLng,
// 	});
// 	new google.maps.Marker({
// 		position: myLatLng,
// 		map,
// 		title: "Hello World!",
// 	});
// }