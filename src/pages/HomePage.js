
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function HomePage() {
    return (
      <div className='main_content'>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default HomePage;