import { NavLink, Outlet } from 'react-router-dom'

type NavItem = {
  to: string
  label: string
  end?: boolean
}

const navItems: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/books', label: 'Books' },
  { to: '/food', label: 'Food' },
  { to: '/movies', label: 'Movies' },
  { to: '/people', label: 'People' },
]

export default function Layout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <NavLink to="/" className="site-logo" end>
            Know thyself
          </NavLink>
          <nav className="site-nav" aria-label="Primary">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>Know thyself — personal journal</p>
      </footer>
    </>
  )
}
