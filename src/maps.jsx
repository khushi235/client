import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.handleMapButtonClick = this.handleMapButtonClick.bind(this);
    }

    handleMapButtonClick() {
        const { latitude, longitude } = this.props;
        // Construct the URL for Google Maps with latitude and longitude
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        // Open the URL in a new tab
        window.open(url, '_blank');
    }

    render() {
        return (
            <button onClick={this.handleMapButtonClick}>
                Open Map
            </button>
        );
    }
}

export default Map;
