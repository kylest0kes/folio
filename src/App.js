import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./Components/MobileHeader/MobileHeader";
import Grid from "@mui/material/Grid";
import LeftSide from "./Sections/Left_Side/LeftSide";
import RightSide from "./Sections/Right_Side/RightSide";

function App() {
  const isDesktop = useMediaQuery({ query: "(min-width: 860px)" });

  return (
    <div className="App">
      {isDesktop && <Header />}
      {!isDesktop && <MobileHeader />}
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <LeftSide />
        </Grid>
        <Grid item xs={10} className='center-section'>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <h1>lskdfjalsdkfj</h1>
          <Footer />
        </Grid>
        <Grid item xs={1} className='rs'>
            <RightSide />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
