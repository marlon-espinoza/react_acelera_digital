import { Link } from 'react-router-dom';

const Header = () => {
    return <div style={{height: 150}}>
                <nav>
                    <Link to={'/'}>HOME</Link>
                </nav>
                <nav>
                    <Link to={'/cart'}>CART</Link>
                </nav>
            </div>
}

export default Header;