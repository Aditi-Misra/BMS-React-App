import './App.css';
import Header from './Components/Header/Header';
import SliderImages from './Components/SliderImages/SliderImages';
import CardSlider from './Components/CardSlider/CardSlider';
import Premiers from './Components/Premiers';
import Footer from './Components/Footer';
// import AllMovies from './Components/AllMovies';
import SingleMovieFetch from './Components/SingleMovieFetch';
import AllMoviesFetch from './Components/AllMoviesFetch';
import Registration from './Components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header/>;

      <Switch>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/">
          <SliderImages/>;
          <CardSlider/>;
           <Premiers/>;
          </Route>
      </Switch>
        <Footer/>;
    </div>
    </Router>
  );
}

export default App;
