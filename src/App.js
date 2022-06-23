import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './Components/MobileHeader/MobileHeader';


function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 860px)'});

  return (
    <div className="App">
      {isDesktop && <Header />}
      {!isDesktop && <MobileHeader />}
      <Footer />
    </div>
  );
}

export default App;
