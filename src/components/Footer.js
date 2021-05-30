import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <ul className="footer__links">
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/more'>More</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
