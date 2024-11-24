import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


function PharmacyMap () {
    return (
        <div className={"border rounded-4"} style={{width: '60vw', marginLeft: "auto", marginRight: "auto", overflow: "hidden"}}>
        <APIProvider apiKey={"AIzaSyAguTSvwNrK--S67kME0vjGCETsh251diw"}>
                
                <Map
                style={{width: '60vw', height: '40vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={12.5}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                center={{lat: 45.9636, lng: -66.6431}}
                >
                    <Marker position={{lat: 45.968150, lng: -66.630390}}/>
                </Map>
            </APIProvider>
        </div>
    );
}

export default PharmacyMap
