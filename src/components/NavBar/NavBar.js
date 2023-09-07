import CardWidget from './CartWidget/CartWidget'


const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
            <button>Celulares</button>
            <button>Tablets</button>
            <button>Notebooks</button>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar