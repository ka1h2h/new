import "./App.css";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="wrapper">
      <div className="cardPayment">
        <div className="cardPayment_container">
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
