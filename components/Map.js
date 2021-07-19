import GoogleMapReact from 'google-map-react';
import styles from '../styles/Map.module.css';
import { mapStyles } from './mapStyles';

const Marker = () => (
    // <div className={styles.marker} style={{ backgroundImage: `url(./images/marker.svg)` }} />
    <img className={styles.marker} src="./images/marker.svg" alt="" />
);

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
