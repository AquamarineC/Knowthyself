const books = [
  {
    title: 'The Sovereign Individual',
    author: 'James Dale Davidson & Lord William Rees-Mogg',
    cover: '/img/books-pictures/the-sovereign-individual.jpg',
  },
  {
    title: 'Game of Thrones',
    author: 'George R.R. Martin',
    cover: '/img/books-pictures/game-of-thornes.jpg',
  },
  {
    title: 'The psychology of money',
    author: 'Morgan Housel',
    cover: '/img/books-pictures/the-psychology-of-money.jpg',
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    cover: '/img/books-pictures/lotr.jpg',
  },
  {
    title: 'Six Thousand years of bread',
    author: 'H. E. Jacob',
    cover: '/img/books-pictures/6000-yearsof-bread.jpg',
  },
  {
    title: 'Conversation with God',
    author: 'Neale Donald Walsch',
    cover: '/img/books-pictures/conversation-with-God.jpg',
  },
  {
    title: 'The Black Swan',
    author: 'Nassim Taleb',
    cover: '/img/books-pictures/the-black-swan.jpg',
  },
  {
    title: 'The Immortality Key',
    author: 'Brian Muraresku',
    cover: '/img/books-pictures/the-immortality-key.jpg',
  },
  {
    title: 'The Peloponnesian War',
    author: 'Donald Kagan',
    cover: '/img/books-pictures/the-peloponnesian-war.jpg',
  },
] as const

export default function Books() {
  return (
    <>
      <h1 className="page-title">Books</h1>
      <p className="page-intro">
        Here are some books that can help you in your journey of self-discovery:
      </p>
      <ul className="card-grid">
        {books.map((book) => (
          <li key={book.title} className="card">
            <img src={book.cover} alt={`Cover of ${book.title}`} />
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <p className="card-meta">{book.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
