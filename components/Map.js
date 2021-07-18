import GoogleMapReact from 'google-map-react';
import styles from '../styles/Map.module.css';
import { mapStyles } from './mapStyles';

const Marker = () => (
    // <div className={styles.marker} style={{ backgroundImage: `url(./images/marker.svg)` }} />
    <img className={styles.marker} src="./images/marker.svg" alt="" />
);

function Map() {
    const { GOOGLE_MAPS_KEY } = process.env;

    const defaultProps = {
        center: {
            lat: 42.344102994021265,
            lng: -7.860804021601114,
        },
        zoom: 14,
    };

    return (
        // Important! Always set the container height explicitly
        <div className={styles.container}>
            <GoogleMapReact
                options={{
                    styles: mapStyles,
                }}
                bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
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
