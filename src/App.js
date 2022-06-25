import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./Components/MobileHeader/MobileHeader";
import Grid from "@mui/material/Grid";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 860px)" });

  return (
    <div className="App">
      {isDesktop && <Header />}
      {!isDesktop && <MobileHeader />}
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <div className='side'>
            <h1>alsdkfj</h1>
          </div>
        </Grid>
        <Grid item xs={10}>
          <div className='middle'>
            <h1>alsdkfj</h1>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className='side'>
            <h1>alsdkfj</h1>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
