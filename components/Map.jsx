import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

const Map = ({searchResults}) => {

    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform the search results into the { latitude: 51.5103, longitude: 7.49347 } object

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // The latitude and longitude of the center of locations coordinates
    
    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
      });

      


    return (
        <ReactMapGL
           {...viewport}
           mapStyle = "mapbox://styles/martyjr-95/cks0xel5d489v18p67g08ier5"
           mapboxApiAccessToken = {process.env.mapbox_key}
           onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={20}
                        offsetTop={-10}
                    >
                        <p role="img" onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce" aria-label="push-pin">📌</p>
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                          onClose={() => setSelectedLocation({})}
                          closeOnClick={true}
                          latitude={result.lat}
                          longitude={result.long}
                          className="bg-red-400"  
                        >
                                {result.title}
                        </Popup>
                    ): (
                        false
                    )}
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
