import { Container  } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <Header />
    <Container>
      <main className='py-5'>
       
        <h1>
          My app
        </h1>
      </main>
    </Container>
    <Footer /> 
    </div>
  );
}

export default App;
