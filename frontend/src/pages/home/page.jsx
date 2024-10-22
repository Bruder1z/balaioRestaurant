import styles from './page.module.css'
import Dessert from '../../../public/homepage/dessert.jsx'
import Vegetable from '../../../public/homepage/vegetable.jsx'
import NaturalFood from '../../../public/homepage/naturalFood.jsx'
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"


export default function Home(){
    return(
       <div className={styles.pageContainer}>
            <section>
                <h1>Welcome to balaio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas expedita quidem eveniet commodi labore laboriosam odit.
                     Aliquid vero rem perferendis accusantium. Officia, aliquam! Numquam impedit corporis dolorem earum inventore.</p>
            </section>

            <section className={styles.foodSection}>
                <div>
                    <i><Dessert/></i>
                    <h4> Excellence in everday life</h4>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias mollitia nesciunt aliquam unde sint numquam nulla reprehenderit similique, exercitationem perspiciatis delectus consectetur. Ipsam sunt itaque deserunt commodi soluta! Repellat.</p>
                </div>
                <div>
                    <i><NaturalFood/></i>
                    <h4>First choice ingredients</h4>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias mollitia nesciunt aliquam unde sint numquam nulla reprehenderit similique, exercitationem perspiciatis delectus consectetur. Ipsam sunt itaque deserunt commodi soluta! Repellat.</p>
                </div>
                <div>
                    <i><Vegetable /></i>
                    <h4> Taste for everyone</h4>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias mollitia nesciunt aliquam unde sint numquam nulla reprehenderit similique, exercitationem perspiciatis delectus consectetur. Ipsam sunt itaque deserunt commodi soluta! Repellat.</p>
                </div>
            </section>
            <section className={styles.contactSection}>
                <h1>Stay Updated!</h1>
                <p>
                    Enter the world of My Gastronomy by following us on social media. 
                    You'll always be updated on our culinary creations, special events, 
                    and gourmet surprises. Don't miss out on a single bite!
                </p>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram /> Instagram</button>
                    <button className={styles.socialButton}><FaFacebookSquare /> Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp /> Whatsapp</button>
                    <button className={styles.socialButton}><FaMapMarkerAlt />Location</button>
                </div>
            </section>
       </div>
    )
}