import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  return (
    <>
      <button type="button" className="back-link" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="page-title">About</h1>
      <div className="about-panel">
        <p>This is my personal journal</p>
      </div>
    </>
  )
}
