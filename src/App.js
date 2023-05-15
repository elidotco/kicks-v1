import "./App.css";
import { Navbar } from "./components";
import { Categories, Footer, Hero, Reviews } from "./sections";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Categories />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
