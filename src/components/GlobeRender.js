import React from 'react';
import ReactGlobe from 'react-globe';

const GlobeRender = (props) => {

    let markers = []

    if (props.issPositions) {
        markers = [{
            id: 1,
            color: 'red',
            coordinates: [parseFloat(props.issPositions.latitude), parseFloat(props.issPositions.longitude)],
            // coordinates: [1.3521, 103.8198],
            value: 50,
        }]
        
    }

    return(
        <div>
            <ReactGlobe
                height="80vh"
                markers={markers}
                width="80vw"
                // options={{
                //     enableMarkerGlow: false,
                //     markerRadiusScaleRange: [0.2, 0.5],
                //     markerType: 'bar',
                //   }}
                // onClickMarker={onClickMarker}
                // onDefocus={onDefocus}
            />

        </div>
    )

}

export default GlobeRender;
