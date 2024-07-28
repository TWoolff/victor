import css from './Footer.module.css';

const Footer: React.FC = () => {
    return ( 
        <footer className={`grid ${css.footer}`}>
            <div className={css.services}>
                <h2>Services</h2>
                <p>Videography</p>
                <p>Photography</p>
            </div>
            <div className={css.contact}>
                <h2>Contact</h2>
                <p><a href="mailto:hello@victorpilely.dk">Mail: hello@victorpilely.dk</a></p>
                <p><a href="tel:+4512345678">Phn: +45 12 34 56 78</a></p>
            </div>
            <div className={css.copyright}>
                <p>&copy; 2024 Victor Pilely</p>
            </div>
        </footer>
    );
}

export default Footer;