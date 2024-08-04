'use client'
import React, { useEffect } from 'react';

const MapComponent = () => {
    useEffect(() => {
        // Load the Google Maps script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUm6__AgFwtZ_2ZBge5a5WW2XMHJvn1qg&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);

        let map;

        async function initMap() {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
            console.log(PinElement);
            
            // Create a map centered on a default location
            const defaultLocation = { lat: -34.397, lng: 150.644 };
            map = new google.maps.Map(document.getElementById("map-canvas"), {
                center: defaultLocation,
                zoom: 15,
            });

            const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
            const beachMarkers = [
                { position: { lat: 43.697720, lng: -79.357467 }, map, icon: image },
                { position: { lat: 43.666374, lng: -79.362349 }, map, icon: image },
                { position: { lat: 43.690536, lng: -79.370251 }, map, icon: image }
            ];

            beachMarkers.forEach(marker => new google.maps.Marker(marker));

            // Try HTML5 geolocation
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };

                        // Center the map on the user's location
                        map.setCenter(pos);

                        // Add a marker at the user's location
                        new google.maps.Marker({
                            position: pos,
                            map: map,
                        });

                        // Find POIs within a specified radius
                        findPOIs(map, pos);
                    },
                    () => {
                        handleLocationError(true, map.getCenter());
                    }
                );
            } else {
                // Browser doesn't support Geolocation
                handleLocationError(false, map.getCenter());
            }
        }

        function handleLocationError(browserHasGeolocation, pos) {
            const infoWindow = new google.maps.InfoWindow({
                position: pos,
            });
            infoWindow.setContent(
                browserHasGeolocation
                    ? "Error: The Geolocation service failed."
                    : "Error: Your browser doesn't support geolocation."
            );
            infoWindow.open(map);
        }

        function findPOIs(map, location) {
            const service = new google.maps.places.PlacesService(map);
            const radius = 5000; // Radius in meters

            // Define the request
            const request = {
                location: location,
                radius: radius,
                keyword: "plant nursery, garden center, plant shop, tree sapling store"
            };

            // Perform the nearby search
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        createMarker(results[i], map);
                    }
                }
            });
        }

        function createMarker(poi, map) {
            const marker = new google.maps.Marker({
                map: map,
                position: poi.geometry.location,
                title: poi.name
            });

            const infoWindow = new google.maps.InfoWindow();
            google.maps.event.addListener(marker, "click", () => {
                infoWindow.setContent(poi.name);
                infoWindow.open(map, marker);
            });
        }

        return () => {
            // Cleanup script
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div style={{ height: '100%' }}>
            <div id="map-canvas" style={{ height: '100%' }}></div>
        </div>
    );
};

export default MapComponent;