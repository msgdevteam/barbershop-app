import BarberCard from "../components/BarberCard";
import Mushu from "../assets/Mushu.png"
import JR from "../assets/JR.png"
import "./Book.scss"
import { motion } from "framer-motion";

const Book = () => {

    const bookAppointment = (url: string) => {
        window.open(url, "_blank");
    }

    return (<motion.div
        className="book-page"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <div className="book-page">
            <h1>Book an appointment</h1>
            <h4>Select a barber below</h4>
            <div className="barber-select">
                <BarberCard name="Mushu Vang" image={Mushu} link="https://www.instagram.com/Mushucutsmyhair/" onClick={() => bookAppointment('https://www.vagaro.com/regentcutsbarbershop/')} />
                <BarberCard name="JR Thao" image={JR} link="https://www.instagram.com/barber_jrt/?hl=en" onClick={() => bookAppointment('https://squareup.com/appointments/book/bli1u1iqke7tqk/L7A2HM56CXC49/services')} />
            </div>
        </div>
    </motion.div>)
}

export default Book;