import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import Api from './Components/Api'
// import Book from './Components/Book'
import Footer from './Components/Footer';
function App() {
  return (
    <div>
     <Navbar/>
     <Carousel/>
     <Api/>
     {/* <Book/> */}
     <Footer/>
    </div>
  );
}

export default App;
