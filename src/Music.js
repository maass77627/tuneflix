

function Music({artists}) {
console.log(artists[0]?.artworkUrl100)
console.log(artists)

// let headers = ["Continue Watching", ]


    return (
        <div className="music-container">
            <div className="header-wrap" id="header-wrap">
            <h1>Continue Watching</h1>
            </div>
            {
                artists?.map((art) => (
                    <div key={art.id} className="music">
                          {/* <h1>Hello Music Container</h1> */}
                             <img src={art.artworkUrl100}></img>
                    </div>
                ))
            }

        </div>


    )
}

export default Music