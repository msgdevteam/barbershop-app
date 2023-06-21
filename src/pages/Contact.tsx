import { motion } from "framer-motion";
import Button from "../components/Button";
import "./Contact.scss"

const Contact = () => {


    return (<motion.div
        className="contact-page"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <div>
            <h1>Contact Form</h1>
            <form action="#" method="POST">
                <label>Name:</label>
                <input type="text" id="name" name="name" required />

                <label>Email:</label>
                <input type="email" id="email" name="email" required />

                <label>Phone Number:</label>
                <input type="text" id="phone" name="phone" required />

                <label>Message:</label>
                <textarea id="message" name="message" required></textarea>

                <Button text="Submit" onClick={() => console.log('Submit')} />
            </form>
        </div>
    </motion.div>)
}

export default Contact;