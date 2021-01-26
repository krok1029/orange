import "./App.css";
import Header from "./component/Header";

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Footer />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
