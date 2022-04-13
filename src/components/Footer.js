import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import styles from './Footer.module.css';
const Footer = () => {
    return ( <footer>
        <div className={styles.contact}>
        <h1>Bibliotek React</h1>
        <p>Ul. Transportowa 130, 15-300 Białystok</p>
        <p>Jan kowalski i spółka</p>
        <p>tel. 123 123 123</p>

        </div>
        <div className={styles.socialMedia}></div>
    </footer>  );
}
 
export default Footer;