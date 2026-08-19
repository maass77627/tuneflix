import NavBar from "./NavBar"
import Hero from "./Hero"
import Genre from "./Genre"
import Music from "./Music"
function Home({genres, artists, videoId}) {
console.log(videoId)

    return (
        <div className="home">
          
          <NavBar></NavBar>
        <Hero videoId={videoId}></Hero>
      <Genre genres={genres}></Genre>
      <Music artists={artists}></Music>
      <Music artists={artists}></Music>
      <Music artists={artists}></Music>
        </div>
    )
}

export default Home