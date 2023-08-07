import logo_footer from "../img/logo_footer.svg"
import "../css/Footer.css"
function Footer() {
    return (
        <div className="footer">
<div><img src={logo_footer} /></div>
            <div>
                <h4>Doormat <br /> Navigation</h4>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Reservations</p>
                <p>Order Online</p>
                <p>Login</p>
            </div>
            <div>
                <h4>Contacts</h4>
                <p>Adress</p>
                <p>Phone-number</p>
                <p>E-mail</p>
            </div>
            <div>
                <h4>Social Media <br/>Links</h4>
                <p>LinkedIn</p>
                <p>Facebook</p>
                <p>Instagram</p>
           
            </div>
        </div>
    )
}
export default Footer;

