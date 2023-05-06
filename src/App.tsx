import './App.css'
import { Wrapper } from './components/Wrapper';
import Sample from './components/Wrapper/sample.tsx';
import { Footer } from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
    <>
      {/* <Sample /> */}
      <Wrapper>
        <Home />
      </Wrapper>
      <Footer />
    </>
  )
}

export default App
