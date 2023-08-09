
import Header from '../components/Header';
import ConfirmedBooking from '../components/Bookings/ConfirmedBooking';
import Footer from '../components/Footer';
import Nav from '../components/Nav';



function ConfirmationPage() {
    return (
      <div className='main_content'>
            <Header />
            <Nav />
       <ConfirmedBooking />
        <Footer />
      </div>
    );
  }
  
  export default ConfirmationPage;