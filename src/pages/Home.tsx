import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-title">
            <span className="part-know"> Know</span>
            <span className="part-thyself">thyself </span>
          </h1>
        </div>
      </section>
      <p className="tagline">
        You are simpler than you think: you are all of the{' '}
        <Link to="/books">books</Link> you read; you are all of the{' '}
        <Link to="/food">food</Link> you eat; you are all of the{' '}
        <Link to="/movies">movies</Link> you watched; you are all of the{' '}
        <Link to="/people">people</Link> you met.
      </p>
    </>
  )
}
