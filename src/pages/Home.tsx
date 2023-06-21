import Button from "../components/Button"
import Barbers from "../assets/barbers.png"
import "./Home.scss"
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Home = () => {

    const navigate = useNavigate();

    return (
        <motion.div
        className="home-page"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <div className="about">
                <h3>Step into our world of style, elegance, and exceptional grooming.</h3>
                <h4>We are delighted to have you here, where hair transformations and confidence-boosting experiences await you.</h4>
                <h4>Thank you for choosing Mushu's Barbershop. Welcome to the world of exceptional grooming experiences.</h4>
                <h4>- The Barbershop Team</h4>
            </div>
            <Button text="Book An Appointment" onClick={() => navigate('book')} />
            <img src={Barbers} className="barber-image" />
        </motion.div>
    )
}

export default Home;