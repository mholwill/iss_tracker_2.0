import React, { Component } from 'react';
import GlobeRender from '../components/GlobeRender';

import '../css/main.css'

export default class GlobeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            issData: null,
            issPositions: null
        }
    };

    componentDidMount() {
        const url = "http://api.open-notify.org/iss-now.json?callback=";
        fetch(url)
        .then(res => res.json())
        .then((issData) => this.setState({
            issData: issData,
            issPositions: issData.iss_position
        }))
    }

    render() {
        return (
          <div>
            <h2>ISS POSITION</h2>
            <GlobeRender issPositions={this.state.issPositions}/>
          </div>
        )
    }
}