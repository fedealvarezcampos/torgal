import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import styles from '../styles/Map.module.css';
import { mapStyles } from './mapStyles';

const InfoWindow = () => {
    return (
        <div className={styles.infoWindow}>
            <div>Torgal</div>
            <p>Av de la Verga 180</p>
        </div>
    );
};

function Marker() {
    const [show, setShow] = useState(false);

    return (
        <>
            {show && <InfoWindow />}
            <img
                className={styles.marker}
                onClick={() => setShow(!show)}
                src="./images/marker.svg"
                alt="map marker"
            />
        </>
    );
}

function Map() {
    const googleAPI = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

    const defaultProps = {
        center: {
            lat: 42.343902994021265,
            lng: -7.860804021601114,
        },
        zoom: 15,
    };

    return (
        // Important! Always set the container height explicitly
        <div className={styles.container}>
            <GoogleMapReact
                options={{
                    styles: mapStyles,
                }}
                bootstrapURLKeys={{ key: googleAPI }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <Marker lat={42.343102994021265} lng={-7.860765971709848} />
            </GoogleMapReact>
        </div>
    );
}

export default Map;
