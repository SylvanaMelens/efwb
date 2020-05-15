/**
 * site web-carte de visite en REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import Card from '../containers/Card'
import images from './ListCards.js'


const styles = {
    container: {
        display: 'flex',
        width: '11em'
    }
}

export default class Cards extends Component {
    state = {
        ...images
    }
        
    render(){
        const images = Object
            .keys(this.state)
            .map(image => 
                <Card 
                    key={image} 
                    details={this.state[image]} />
                )
        return (
            <div>
                <div style={styles.container}>
              
                </div>
                <div className="container container-fluid">
                    { images }
                </div>
            </div>
        )
    }
}
