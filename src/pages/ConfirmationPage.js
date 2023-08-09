
import Header from '../components/Header';
import ConfirmedBooking from '../components/Bookings/ConfirmedBooking';
import Footer from '../components/Footer';
import Nav from '../components/Nav';



function ConfirmationPage({ resTime, resDate, guests, occasion }) {
    return (
      <div className='main_content'>
            <Header />
            <Nav />
        <ConfirmedBooking resTime={resTime} resDate = {resDate} guests = {guests} occasion = {occasion}/>
     

        <Footer />
      </div>
    );
  }
  
  export default ConfirmationPage;