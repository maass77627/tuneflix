import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import NavBar from "./NavBar";
// import Hero from "./Hero";
// import Genre from "./Genre";
import Home from "./Home"
import Music from "./Music"
function App() {
const apiKey = process.env.REACT_APP_API_KEY
  const [artists, setArtists] = useState([])
 const [genres, setGenres] = useState([])
const [videoId, setVideoId] = useState("")

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

useEffect(() => {
fetch( `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Whitney+Houston+I+Wanna+Dance+with+Somebody&type=video&maxResults=5&key=${apiKey}`)
.then((res) => res.json())
.then((json) => {
  console.log(json.items[0].id.videoId)
  console.log(json.items[0].snippet)
  let videoId = json.items[0].id.videoId
  setVideoId(videoId)
})
}, [])

//  `https://www.googleapis.com/youtube/v3/search?part=snippet&q=Whitney+Houston+I+Wanna+Dance+with+Somebody&type=video&maxResults=5&key=${apiKey}`
// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY


  return (
    <div className="App">
     
      <BrowserRouter>
         <Routes>
        <Route path="/" element={<Home  videoId={videoId} artists={artists} genres={genres}></Home>}></Route>
         

            </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
