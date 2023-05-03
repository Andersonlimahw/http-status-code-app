import './App.css'
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Wrapper open>
        <Home />
      </Wrapper>
      <Footer />
    </>
  )
}

export default App
