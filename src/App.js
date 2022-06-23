import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './Components/MobileHeader/MobileHeader';


function App() {
  const isMobile = useMediaQuery({ query: '(min-width: 860px)'});

  return (
    <div className="App">
      {isMobile && <Header />}
      {!isMobile && <MobileHeader />}
      <Footer />
    </div>
  );
}

export default App;
