import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import styles from '../styles/Map.module.css';
import { mapStyles } from './mapStyles';

const InfoWindow = () => {
    return (
        <div className={`${styles.infoWindow} fade-in`}>
            <div>Torgal</div>
            <p>Av de la Verga 180</p>
            <a
                href="https://www.google.es/maps/dir//Caf%C3%A9+%26+Pop+Torgal,+R%C3%BAa+Celso+Emilio+Ferreiro,+20,+32004+Ourense/@42.3430345,-7.8614488,18z/data=!4m16!1m6!3m5!1s0x0:0xe625fff7b1f28632!2sCaf%C3%A9+%26+Pop+Torgal!8m2!3d42.3431071!4d-7.8607438!4m8!1m0!1m5!1m1!1s0xd2ffeb9d18f8a4f:0xe625fff7b1f28632!2m2!1d-7.8607438!2d42.3431071!3e2"
                target="_blank"
            >
                Cómo llegar...
            </a>
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
