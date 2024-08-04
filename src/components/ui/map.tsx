'use client';

import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: '100%',
  height: '100vh',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
  lat: 47.02091,
  lng: -74.72125
};

const defaultMapZoom = 15;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto'
};

// Custom icons
const parkIcon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
const storeIcon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [markers, setMarkers] = useState<Array<{ position: google.maps.LatLngLiteral; name?: string; icon: string }>>([]);
  const [selectedPlace, setSelectedPlace] = useState<{ position: google.maps.LatLngLiteral; name?: string } | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);

    const parkMarkers = [
      { position: { lat: 44.62957, lng: -78.50563 }, icon: parkIcon },
      { position: { lat: 44.65706, lng: -78.55425 }, icon: parkIcon },
      { position: { lat: 43.79082, lng: -80.03764 }, icon: parkIcon },
      { position: { lat: 47.02856, lng: -74.74675 }, icon: parkIcon },
      { position: { lat: 47.01706, lng: -74.74957 }, icon: parkIcon },
      { position: { lat: 46.98853, lng: -74.74478 }, icon: parkIcon },
      { position: { lat: 46.99606, lng: -74.71910 }, icon: parkIcon },
      { position: { lat: 47.01031, lng: -74.74675 }, icon: parkIcon },
      { position: { lat: 47.01706, lng: -74.69867 }, icon: parkIcon },
      { position: { lat: 47.02185, lng: -74.68032 }, icon: parkIcon },
      { position: { lat: 47.05096, lng: -74.68360 }, icon: parkIcon },
      { position: { lat: 47.00679, lng: -74.77887 }, icon: parkIcon }
    ];
    setMarkers(parkMarkers);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(pos);
          if (map) {
            map.setCenter(pos);
            findPOIs(map, pos);
          }
        },
        () => {
          if (map) {
            handleLocationError(true, map.getCenter()!);
          }
        }
      );
    } else {
      if (map) {
        handleLocationError(false, map.getCenter()!);
      }
    }
  }, [map]);

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
            name: result.name,
            icon: storeIcon
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
        center={currentPosition || defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        onLoad={onLoad}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            onClick={() => setSelectedPlace(marker)}
            icon={marker.icon}
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
