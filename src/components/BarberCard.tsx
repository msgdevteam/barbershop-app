import './BarberCard.scss'
import InstagramIcon from '../assets/instagram.png'

interface BarberCardProps {
    name: string,
    image: string,
    link: string,
    onClick: () => void;
}

const Button = (BarberCardProps: BarberCardProps) => {

    const openLink = () => {
        window.open(BarberCardProps.link);
    }


    return (
        <div className="barber-card">
            <img src={BarberCardProps.image} />
            <h4>{BarberCardProps.name}</h4>
            <img src={InstagramIcon} className="instagram" onClick={openLink} />
            <button className="button" onClick={BarberCardProps.onClick}>Book Now</button>
        </div>
    )
}

export default Button;