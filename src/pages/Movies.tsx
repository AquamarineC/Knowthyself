const movies = [
  { title: 'Her', year: '2013' },
  { title: 'Inside Out', year: '2015' },
  { title: 'The Matrix', year: '1999' },
] as const

export default function Movies() {
  return (
    <>
      <h1 className="page-title">Movies</h1>
      <p className="page-intro">
        Here are some movies that can help you in your journey of self-discovery:
      </p>
      <ul className="list-plain">
        {movies.map((movie) => (
          <li key={movie.title} className="list-item">
            <h2>
              {movie.title} ({movie.year})
            </h2>
          </li>
        ))}
      </ul>
    </>
  )
}
