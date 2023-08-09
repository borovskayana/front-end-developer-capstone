
import Header from '../components/Header';
import Bookings from '../components/Bookings';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function BookingPage() {
    return (
      <div className='main_content'>
            <Header />
            <Nav />
        <Bookings />
        <Footer />
      </div>
    );
  }
  
  export default BookingPage;