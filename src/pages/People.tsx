const people = [
  {
    name: 'Eckhart Tolle',
    note: 'author of "The Power of Now"',
  },
  {
    name: 'Marcus Aurelius',
    note: 'author of "Meditations"',
  },
  {
    name: 'Hermann Hesse',
    note: 'author of "Siddhartha"',
  },
] as const

export default function People() {
  return (
    <>
      <h1 className="page-title">People</h1>
      <p className="page-intro">
        Here are some people that can help you in your journey of self-discovery:
      </p>
      <ul className="list-plain">
        {people.map((person) => (
          <li key={person.name} className="list-item">
            <h2>{person.name}</h2>
            <p>{person.note}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
