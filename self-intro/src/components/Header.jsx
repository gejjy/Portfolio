const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  {href:'experience', label: 'Experience'},
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header>
      <div className="row">
        <a href="#home" className="logo">
          Kai Gejima
        </a>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
