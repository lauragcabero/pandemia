const madridCoordenadas = L.latLng(40.4165001, -3.7025599)
const theBridgeCoordenadas = L.latLng(40.4215102, -3.69486)
const neolandCoordenadas = L.latLng(40.422273, -3.714085)
const upgradeHubCoordenadas = L.latLng(40.458860, -3.694706)
const ironHackCoordenadas = L.latLng(40.392627, -3.698276)
const adalabCoordenadas = L.latLng(40.413334, -3.718114)
const keepCodingCoordenadas = L.latLng(40.404162, -3.689889)

const zoom = 16

const logoTheBridge = L.icon({
    iconUrl: 'logos/logothebridge.png',
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const logoNeoland = L.icon({
    iconUrl: 'logos/logothebridge.png',
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
})

const mapa1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
const mapa2 = L.tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png')
const marcadorMadrid = L.marker(theBridgeCoordenadas, { icon: logoTheBridge })

const map = L.map('map', {
    center: madridCoordenadas,
    zoom,
    layers: [mapa1, mapa2]
})

marcadorMadrid.addTo(map)

const coordenadasGroup = L.layerGroup([marcadorMadrid])

const baseMaps = {
    'Mapa1': mapa1,
    'Mapa2': mapa2
}

const cubreMapas = {
    'bootcamps': coordenadasGroup
}

L.control.layers(baseMaps, cubreMapas).addTo(map)

const theBridgeMarker = L.marker(theBridgeCoordenadas).addTo(map).bindPopup('Esto es TheBridge')
const neolandMarker = L.marker(neolandCoordenadas).addTo(map).bindPopup('Esto es Neoland')
const upgradeHubMarker = L.marker(upgradeHubCoordenadas).addTo(map).bindPopup('Esto es UpgradeHub')
const ironHackMarker = L.marker(ironHackCoordenadas).addTo(map).bindPopup('Esto es IronHack')
const adalabMarker = L.marker(adalabCoordenadas).addTo(map).bindPopup('Esto es Adalab')
const keepCodingMarker = L.marker(keepCodingCoordenadas).addTo(map).bindPopup('Esto es KeepCoding')
// map.setView(madridCoordenadas, zoom)


const zonaInfeccion = L.circle(theBridgeCoordenadas, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const zonaInfeccion1 = L.circle(neolandCoordenadas, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const zonaInfeccion2 = L.circle(upgradeHubCoordenadas, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const zonaInfeccion3 = L.circle(ironHackCoordenadas, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const zonaInfeccion4 = L.circle(adalabCoordenadas, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const zonaInfeccion5 = L.circle(keepCodingCoordenadas, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const poligonoRaro = L.polygon([
    theBridgeCoordenadas,
    neolandCoordenadas,
    upgradeHubCoordenadas,
    ironHackCoordenadas,
    adalabCoordenadas,
    keepCodingCoordenadas
]).addTo(map)


