import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line pt-6 text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {profile.name}. Content editable via{' '}
        <code className="text-ink">src/data/</code>.
      </p>
    </footer>
  )
}
