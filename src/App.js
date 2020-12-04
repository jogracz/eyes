import logo from './logo.svg';
import "fontsource-roboto";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
