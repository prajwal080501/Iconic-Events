import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


function App() {

  return (
    <div className="bg-background">
           <Navbar />
           <section className="">
            <Hero />
           </section>
           {/* services */}
           <section className="bg-neutral-900 p-4 rounded-xl mb-6 max-w-[90%] mt-10 mx-auto">
              <div className="">
                <Services />
              </div>
           </section>
    </div>
  )
}

export default App;
