import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import NavBar from "./NavBar";
// import Hero from "./Hero";
// import Genre from "./Genre";
import Home from "./Home"

function App() {

  const [artists, setArtists] = useState([])
 const [genres, setGenres] = useState([])


useEffect(() => {
fetch(`https://itunes.apple.com/search?media=music&term=music&limit=30`)
.then((res) => res.json())
.then((json) => {
  console.log(json.results)
  setArtists(json.results)
  setGenres([
  ...new Set(
    json.results.map((artist) => artist.primaryGenreName)
  )
]);
})
}, [])





  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <NavBar></NavBar>
      <Hero></Hero>
      <Genre genres={genres}></Genre> */}
      <BrowserRouter>
         <Routes>
        <Route path="/" element={<Home artists={artists} genres={genres}></Home>}></Route>


            </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
