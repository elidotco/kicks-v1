import "./App.css";
import { Navbar } from "./components";
import { Categories, Hero } from "./sections";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Categories />
    </div>
  );
}

export default App;
