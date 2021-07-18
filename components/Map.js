import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    const { GOOGLE_MAPS_KEY } = process.env;

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
}

export default Map;
