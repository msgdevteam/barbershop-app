import { motion } from "framer-motion";
import "./Cancellation.scss"

const Cancellation = () => {


    return (<motion.div
        className="cancellation-page"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
    <div className="cancellation-header">
        <h1>Cancellation & No Show Policy</h1>
        <h4>Please read our cancellation and no show policy before scheduling.</h4>
    </div>
    <ul>
        <li>We ask that you please reschedule or cancel at least 8 hours before the beginning of your appointment or you may be charged a cancellation fee of 50% the price of your scheduled appointment.</li>
        <li>Failure to cancel at least 8 hours prior to services will result in a 50% charge of scheduled services.</li>
        <li>APPOINTMENTS CANCELLED OR RESCHEDULED EIGHT HOURS OR MORE BEFORE THEIR APPOINTMENT WILL NOT BE CHARGED THE CANCELLATION FEE.</li>
        <li>IF YOU DO NOT RECEIVE A CONFIRMATION EMAIL AND/OR TEXT MESSAGE, YOU DID NOT COMPLETE THE SCHEDULING PROCESS CORRECTLY AND, THUS, HAVE NOT ACTUALLY MADE AN APPOINTMENT.</li>
        <li>A NO SHOW OR CANCELLATION OR RESCHEDULING WITHIN EIGHT (8) HOURS OF YOUR APPOINTMENT MEANS YOUR BARBER WILL LOSE THEIR EARNINGS FOR THAT TIME SLOT.</li>
        <li>PLEASE MAKE SURE YOU ARE COMFORTABLE WITH THIS POLICY BEFORE YOU SCHEDULE YOUR APPOINTMENT.  WE APPRECIATE YOUR UNDERSTANDING AND HOPE YOU UNDERSTAND THIS POLICY IS NOT INTENDED TO BE HARMFUL TO YOU BUT IS INSTEAD IN PLACE TO PROTECT OUR BARBERS' ABILITY TO MAKE A LIVING.</li>
    </ul>
    </motion.div>)
}

export default Cancellation;