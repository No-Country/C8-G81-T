import * as Landing from "../../components/Landing";
import Header from "../../components/Header/Header";

const HomePage = () => {
 
  return (
    <main>
      <Header/>
      <Landing.Hero />
      <Landing.AboutUs />
      <Landing.Features />
      <Landing.Contat />
    </main>
  );
};

export default HomePage;
