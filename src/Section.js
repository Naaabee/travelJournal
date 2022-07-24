import React from 'react'
import './Section.css'

export default function Section(props) {

    return (
        <main>
            <div className='section--card'>
                <img src={require(`${props.obj.imageUrl}`)} alt={props.obj.title} />
                <div className='section--info'>
                    <span className='section--location'><img src={require('./images/pin.png')} alt='pin'/> {props.obj.location}
                    <a href={props.obj.googleMapsUrl} target='self' className='grey'>View on Google Maps</a>
                    </span>
                    <h1>{props.obj.title}</h1>
                    <h3>{props.obj.startDate} - {props.obj.endDate}</h3>
                    <p>{props.obj.description}</p>
                </div>
            </div>
        </main>
    )
}
