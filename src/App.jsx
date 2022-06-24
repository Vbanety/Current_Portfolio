
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
function App() {

  return (
    <div className="App allPages">
      <Navbar />
      <div className='line_blue'>
        <hr/>
      </div>
      <Home />
      <div className='line_blue'>
        <hr/>
      </div>
      <Footer />
    </div>
  )
}

export default App
