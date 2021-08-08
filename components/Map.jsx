import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';

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
                        <img src="/images/mapbox-marker-icon-pink.svg" role="img" onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce" aria-label="push-pin" />
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                          onClose={() => setSelectedLocation({})}
                          closeOnClick={true}
                          latitude={result.lat}
                          longitude={result.long}
                          className="bg-red-400 z-10 rounded-sm"  
                        >
                            <div className="flex flex-col">
                            <img src={result.img} objectFit="contain" className="h-[180px] w-full mt-4 mb-3 rounded-lg"/>    
                            <p className="text-md font-bold mb-2">{result.title}</p>
                            <p className="text-md font-semibold mb-2">{result.price}</p>
                            <div className="flex items-center justify-between">
                                <p className="flex items-center"><StarIcon className="h-5 text-red-400"/>{result.star}</p>
                                <HeartIcon className="h-7 cursor-pointer text-red-400" />
                            </div>
                            </div>
                                
                                
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
