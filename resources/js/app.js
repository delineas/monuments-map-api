//require('./bootstrap');

var baseMap = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

let markerClusterGroup = L.markerClusterGroup();

const mymap = L.map("mapid", {
    zoom: 8,
    layers: [baseMap, markerClusterGroup]
});

let types = [];
let clusterLayers = [];
let layerControl = null;

fetch("/api/monuments")
    .then(response => response.json())
    .then(data => {
        data.map(place => {
            if (!types.includes(place.type)) {
                types.push(place.type);
                clusterLayers[place.type] = L.markerClusterGroup();
                clusterLayers[place.type].addTo(mymap);
            }

            L.marker([place.lat, place.lng])
                .bindPopup(place.name)
                .addTo(clusterLayers[place.type]);
        });

        layerControl = Object.keys(clusterLayers).reduce(
            (acc, key) => ({
                ...acc,
                [key]: clusterLayers[key]
            }),
            {}
        );
        L.control
            .layers(
                {
                    Base: baseMap
                },
                clusterLayers
            )
            .addTo(mymap);
    });

var myStyle = {
    color: "#ff7800",
    weight: 1,
    opacity: 0.65
};

const myOnEachFeature = (feature, layer) => {
    layer.bindPopup(feature.properties.provincia);
};

fetch("/provincias.json")
    .then(response => response.json())
    .then(features => {
        console.log(features);
        let geoJsonLayer = L.geoJson(features, {
            style: myStyle,
            onEachFeature: myOnEachFeature
        }).addTo(mymap);
        mymap.fitBounds(geoJsonLayer.getBounds());
    });
