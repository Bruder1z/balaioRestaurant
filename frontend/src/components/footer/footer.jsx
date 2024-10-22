import styles from './footer.module.css'
import {Link} from 'react-router-dom'

export default function Footer (){
    return (
        <footer className={styles.footerContainer}>
            <img src="/balaio.png"/>
            <div>
                <h2>Important Links</h2>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/plates'}>Plates</Link>
                    <Link  className={styles.link} to={'/profile'}>Profile</Link>
                    <Link  className={styles.link} to={'/'}>Homepage</Link>
                </div>
            </div>
            <div>
                Developed by Lucas Bruder.
                <a className={styles.link} target='_blank' href="https://www.linkedin.com/in/lucas-bruder-1230a1251/">Click here</a>
            </div>
        </footer>
    )
}