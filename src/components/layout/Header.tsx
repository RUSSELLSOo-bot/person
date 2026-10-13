import { Link, useLocation } from 'react-router-dom'
import { profile } from '../../data/profile'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Header() {
  const location = useLocation()
  const onHome = location.pathname === '/'

  return (
    <header className="border-b border-line/80 pb-6">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <Link
          to="/"
          className="font-display text-2xl tracking-tight text-ink no-underline md:text-3xl"
        >
          {profile.name}
        </Link>
        <p className="text-sm text-muted md:text-base">{profile.role}</p>
      </div>
      <nav aria-label="Primary" className="mt-5">
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
          {profile.nav.map((item) => (
            <li key={item.id}>
              {onHome ? (
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer border-0 bg-transparent p-0 text-muted underline-offset-4 transition hover:text-ink hover:underline"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to="/"
                  onClick={() => {
                    window.setTimeout(() => scrollToSection(item.id), 50)
                  }}
                  className="text-muted no-underline underline-offset-4 transition hover:text-ink hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
