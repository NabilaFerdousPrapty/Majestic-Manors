
import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import FAQ from "../../components/FAQ/FAQ";
import Estates from './../../components/Estates/Estates';

const Home = () => {
  return (
   <div>
    <Helmet>
      <title>Majestic Manors || Home</title>
    </Helmet>
    <Banner/>
    <Estates/>
    <FAQ/>
    <Contact/>
   </div>
  );
};

export default Home;
