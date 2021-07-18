import GoogleMapReact from 'google-map-react';
import styles from '../styles/Map.module.css';

const Marker = () => (
    // <div className={styles.marker} style={{ backgroundImage: `url(./images/marker.svg)` }} />
    <img className={styles.marker} src="./images/marker.svg" alt="" />
);

function Map() {
    const { GOOGLE_MAPS_KEY } = process.env;

    const defaultProps = {
        center: {
            lat: 42.34336976308472,
            lng: -7.860704021601114,
        },
        zoom: 15,
    };

    const mapStyles = [
        {
            elementType: 'geometry',
            stylers: [
                {
                    color: '#272727',
                },
            ],
        },
        {
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'on',
                },
            ],
        },
        {
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#746855',
                },
            ],
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    color: '#242f3e',
                },
            ],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'administrative.land_parcel',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#d59563',
                },
            ],
        },
        {
            featureType: 'administrative.neighborhood',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'poi',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#d59563',
                },
            ],
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#263c3f',
                },
            ],
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#6b9a76',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#1C4A47',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#212a37',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#9ca5b3',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#512424',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
                {
                    color: '#1f2835',
                },
            ],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#f3d19c',
                },
            ],
        },
        {
            featureType: 'transit',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#2f3948',
                },
            ],
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#d59563',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
                {
                    color: '#17263c',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#515c6d',
                },
            ],
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
                {
                    color: '#17263c',
                },
            ],
        },
    ];

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
            >
                <Marker lat={42.34336976308472} lng={-7.860704021601114} />
            </GoogleMapReact>
        </div>
    );
}

export default Map;
