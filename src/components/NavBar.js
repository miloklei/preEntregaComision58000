import CardWidget from './CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="Navbar">
        <Link to='/'>
            <h3>Ecommerce</h3>
        </Link>
        <div className='Categories'>
            <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}/><>Celular</>
            <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}/><>Tablet</>
            <NavLink to={`category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}/><>Notebook</>

        </div>
        <CardWidget />
        </nav>
    )
}

export default NavBar