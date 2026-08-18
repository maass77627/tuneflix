import NavBar from "./NavBar"
import Hero from "./Hero"
import Genre from "./Genre"
function Home({genres, artists}) {


    return (
        <div className="home">
          <NavBar></NavBar>
        <Hero></Hero>
      <Genre genres={genres}></Genre>
        </div>
    )
}

export default Home