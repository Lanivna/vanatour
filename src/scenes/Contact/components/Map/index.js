import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  componentDidMount() {
    const container = L.DomUtil.get('map');
    if (container != null) {
      container._leaflet_id = null;
    }
    this.map = L.map('map', {
      center: [49.4431778, 32.0699853],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    this.marker = L.marker([49.4431778, 32.0699853]).addTo(this.map);
  }

  render() {
    return <div style={{height: "200px"}} id="map" />
  }
}

export default Map;
