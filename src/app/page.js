import About from "./Components/About";
import Hero from "./Components/Hero";
import Letconnect from "./Components/Letconnect";
import Whatwebuy from "./Components/Whatwebuy";
import Whatwesell from "./Components/Whatwesell";
import Whyus from "./Components/Whyus";

const page = () => {
  return (
    <>
      <Hero />
      <Whatwesell />
      <Whatwebuy />
      <Letconnect />
      <Whyus />
      <About />
    </>
  );
};

export default page;
