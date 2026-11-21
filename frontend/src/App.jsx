import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Trusted from "./components/Trusted";

const App = () => {
  return (
    <div>
      <div className="container">
        <Navigation />
        <Header />
        <Trusted />
      </div>
    </div>
  );
};
export default App;
