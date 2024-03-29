import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";
import styled from "styled-components";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlsaWFtbm92aWNreSIsImEiOiJjbHNrc2xvMjkwNms3MmpuOHczN2tzc2Z5In0.5q3W3lKWSafiFv2NMd0lZw";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 2rem;
  overflow: hidden;
  cursor: disabled;
`;

const CustomMarker = styled.div`
  display: block;
  width: 2rem;
  height: 2rem;
  position: absolute;
  background: var(--color-grey-200);
  transform: translate(-50%, -50%);
  bottom: 50%;
  left: 50%;
  border-radius: 50%;
`

function Map({ lng, lat, children }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 16;

  const marker = new mapboxgl.Marker(CustomMarker).setLngLat([lng, lat])

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: "mapbox://styles/viliamnovicky/clrmgic3p001401pe61xg8buz",
      center: [lng, lat],
      zoom: zoom,
      scrollZoom: false,
      dragPan: false,
    });

    marker.addTo(map.current)
    
});

  return (
    <MapContainer ref={mapContainer}>
      <CustomMarker/>
      {children}
    </MapContainer>
  );
}

export default Map;
