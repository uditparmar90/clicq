import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import Footer from './Components/Footer';
import CardDetail from './Components/CardDetail';
import Registration from './Components/Registration';
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {

  const [userDetails, setUserDetails] = useState([])
  useEffect(() => {
    async function getAllUsers() {
      try {
        const user = await axios.get('http://127.0.0.1:8000/api/regUser/');
        console.log(user.data);
        setUserDetails(user.data);
      }
      catch (err) {
        console.log(err)
      }
    }
    getAllUsers()

  }, [])



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
