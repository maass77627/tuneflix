


function Genre({genres}) {
console.log(genres)


    return (
        <div className="genre">
          {genres.map((gen) => (
            <div key={gen.id} className="genre-card">
                <h1>{gen}</h1>
            </div>
          ))}
        </div>
    )
}

export default Genre