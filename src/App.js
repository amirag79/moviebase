import './App.css';
//stores the current location in the browser's address bar using clean URLs and
// navigates using the browser's HTML5 history API.

//BrowserRouter-It allows your app to handle navigation between different pages without the need for full page reloads.
//Routes contains route, define the routing structure of your app
//Route- When a user navigates to a URL that matches the path you define in the Route, the corresponding component will be rendered.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
        <Router>
          {/* it will tell react to render the Header component that we have created  */}
          <Header />

            <Routes>
              {/* defines the route of the Home page of app, renders the Home component */}
                <Route index element={<Home />}></Route>

                {/* defines a dynamic route for displaying a movie's details. The :id part in the path indicates 
                that this part of the URL can be replaced with a movie's unique ID. */}
                <Route path="movie/:id" element={<Movie />}></Route>

                {/* The :type parameter allows you to determine the type of movies to display. */}
                <Route path="movies/:type" element={<MovieList />}></Route>

                {/* it will display an error message if route not found */}
                <Route path="/*" element={<h1>Error Page</h1>}></Route>

            </Routes>
        </Router>
    </div>
  );
}


// when another part of our application or different module imports from this module, will receive the App component.
export default App;