export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <ul className="sns">
          <li>
            <a
              href="https://github.com/kai0604"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github/kai0604
            </a>
          </li>
        </ul>
        <p>&copy; {year} Geji. All rights reserved.</p>
      </div>
    </footer>
  )
}
