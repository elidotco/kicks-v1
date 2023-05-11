import "./App.css";
import { Navbar } from "./components";
import { Categories, Hero, Reviews } from "./sections";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Categories />
      <Reviews />
    </div>
  );
}

export default App;
