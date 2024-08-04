'use client';

import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: '100%',
  height: '100vh',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
  lat: 43.6532,
  lng: -79.3832
};

const defaultMapZoom = 15;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto'
};

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [markers, setMarkers] = useState<Array<{ position: google.maps.LatLngLiteral; name?: string }>>([]);
  const [selectedPlace, setSelectedPlace] = useState<{ position: google.maps.LatLngLiteral; name?: string } | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);

    const beachMarkers = [
      { position: { lat: 43.697720, lng: -79.357467 } },
      { position: { lat: 43.666374, lng: -79.362349 } },
      { position: { lat: 43.690536, lng: -79.370251 } }
    ];
    setMarkers(beachMarkers);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(pos);
          map.setCenter(pos);
          findPOIs(map, pos);
        },
        () => {
          handleLocationError(true, map.getCenter()!);
        }
      );
    } else {
      handleLocationError(false, map.getCenter()!);
    }
  }, []);

  const findPOIs = (map: google.maps.Map, location: google.maps.LatLngLiteral) => {
    const service = new window.google.maps.places.PlacesService(map);
    const radius = 5000;

    const request = {
      location,
      radius,
      keyword: 'plant nursery, garden center, plant shop, tree sapling store'
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        const poiMarkers = results
          .filter(result => result.geometry && result.geometry.location)
          .map(result => ({
            position: result.geometry!.location!.toJSON(),
            name: result.name
          }));
        setMarkers(markers => [...markers, ...poiMarkers]);
      }
    });
  };

  const handleLocationError = (browserHasGeolocation: boolean, pos: google.maps.LatLng) => {
    const infoWindow = new window.google.maps.InfoWindow({
      position: pos,
    });
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  };

  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        onLoad={onLoad}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            onClick={() => setSelectedPlace(marker)}
          />
        ))}
        {selectedPlace && (
          <InfoWindow
            position={selectedPlace.position}
            onCloseClick={() => setSelectedPlace(null)}
          >
            <div>{selectedPlace.name}</div>
          </InfoWindow>
        )}
        {currentPosition && (
          <Marker
            position={currentPosition}
            icon="https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
