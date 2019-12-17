var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]

var distanceR = []

results.forEach(function(result) {
  var lat1 = -37.818555
  var lon1 = 144.959076
  var lat2 = result["location"]["lat"]
  var lon2 = result["location"]["long"]
  
  var radlat1 = Math.PI * lat1/180;
  var radlat2 = Math.PI * lat2/180;
  var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344
    distanceR.push(dist);
    return distanceR
});

console.log(distanceR)