import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import MainContent from "./components/layout/MainContent"


function App() {


  return (
    <div className="bg-primary flex flex-col min-h-dvh">
     <Header />
     <MainContent />
     <Footer />
    </div>
  )
}

export default App
