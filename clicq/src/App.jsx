import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import Footer from './Components/Footer';
import CardDetail from './Components/CardDetail';
import Registration from './Components/Registration';

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Card />
      <CardDetail />
      <Registration />
      <Footer />
    </>
  )
}

export default App;
