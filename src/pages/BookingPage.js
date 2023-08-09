
import Header from '../components/Header';
import Bookings from '../components/Bookings';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function BookingPage({availableTimes, dispatchOnDateChange, submitData}) {
    return (
      <div className='main_content main_confirmation'>
            <Header />
            <Nav />
        <Bookings  availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData}/>
        <Footer />
      </div>
    );
  }
  
  export default BookingPage;