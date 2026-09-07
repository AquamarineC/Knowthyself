const foods = [
  {
    src: '/img/food-pictures/salmon.jpg',
    alt: 'salmon (rich in omega-3)',
  },
  {
    src: '/img/food-pictures/pasta.jpg',
    alt: 'pasta',
  },
  {
    src: '/img/food-pictures/carrot.jpg',
    alt: 'carrot rice dish',
  },
  {
    src: '/img/food-pictures/steak.jpg',
    alt: 'steaks',
  },
  {
    src: '/img/food-pictures/chickWing.jpg',
    alt: 'oven baked chicken wings',
  },
  {
    src: '/img/food-pictures/strawberry.jpg',
    alt: 'fruit',
  },
] as const

export default function Food() {
  return (
    <>
      <h1 className="page-title">Food</h1>
      <p className="page-intro">
        Here are some foods that can help you in your journey of self-discovery:
      </p>
      <ul className="card-grid">
        {foods.map((food) => (
          <li key={food.src} className="card food-card">
            <img src={food.src} alt={food.alt} />
            <div className="card-body">
              <h2 className="card-title">{food.alt}</h2>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
