import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ContactFaqSection from "./components/ContactFaqSection"

const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <Hero />
      <ContactFaqSection />
    </div>
  )
}

export default App