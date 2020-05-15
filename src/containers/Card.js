/**
 * site web-REACT
 * @author: sylvana
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export default class Card extends Component {
    render(){
        const { outerLink, src, title, desc, color } = this.props.details 
    
        return (
            <div style={{backgroundColor: color}}>
                 <a 
                    href={ outerLink } 
                    target='_blank' 
                    rel='noopener noreferrer'>
                    <img 
                        className='card'
                        src={ src }
                        alt={ title }
                    />
                </a>
                <h1>{ title.toUpperCase() }</h1>
                {' '}
                <p>{ desc }</p>
            </div>
            )
    }

    static propTypes = {
        details: PropTypes.object.isRequired
    }
}
