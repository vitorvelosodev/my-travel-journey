import './Card.css'
import pin from './../../assets/map-pin.png'

export default function Card(props) {
    // ./../../../public/images/${props.imageUrl}
    return (
        <div className='card'>
            <div className='card-image-container'>
                <img src={`./images/${props.imageUrl}`} alt={props.title} />
            </div>
            <div className='card-info'>
                <img className='map-pin' src={pin} alt="map pin" />
                <span className='location'>{props.location}</span>
                <a className='google-maps-link' href={props.googleMapsUrl}>View on Google Maps</a>
                <p className='title'>{props.title}</p>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}