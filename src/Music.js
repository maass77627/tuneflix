

function Music({artists}) {
console.log(artists[0]?.artworkUrl100)
console.log(artists)


    return (
        <div className="music-container">
            <h1>Continue Watching</h1>
            {
                artists?.map((art) => (
                    <div key={art.id} className="music">
                          <h1>Hello Music Container</h1>
                             <img src={art.artworkUrl100}></img>
                    </div>
                ))
            }

        </div>


    )
}

export default Music