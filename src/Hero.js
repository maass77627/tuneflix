


function Hero({videoId}) {
console.log(videoId)




    return (
       

  <div className="hero">

<div className="hero-text">
{/* <h1>{artist.name}</h1> */}
<h3></h3>
<p></p>
</div>

      {videoId && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="Music Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>

      
    )
}

export default Hero