import "./App.css";
import Header from "./components/Header";
import CarouselEx from "./components/CarouselEx";
import ModalEx from "./components/ModalEx";
import Cardgrouping from "./Card/Cardgrouping";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEx />
      <ModalEx />
      <Cardgrouping />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
