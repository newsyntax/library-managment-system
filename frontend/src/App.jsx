import Articles from "./components/Articles";
import Features from "./components/Features";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SubsecriptionPlans from "./components/SubsecriptionPlans";
import Trusted from "./components/Trusted";

const App = () => {
  return (
    <div>
      <div className="container">
        <Navigation />
        <Header />
        <Trusted />
        <Features />
        <SubsecriptionPlans />
        <Articles />
      </div>
    </div>
  );
};
export default App;
