import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SectionContainer from "./components/SectionContainer";
import Services from "./components/Services";


function App() {

  return (
    <div className="bg-background">
      <Navbar />
      <section>
        <Hero />
      </section>
      {/* services */}
      <SectionContainer id="services" title="Services" >
        <div className="">
          <Services />
        </div>
      </SectionContainer>
      <SectionContainer title="About Us" >
        <About />
      </SectionContainer>
      <SectionContainer title="Contact Us" >
        <Contact />
      </SectionContainer>

    </div>
  )
}

export default App;
