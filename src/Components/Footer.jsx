
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'> 
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/Formula1App"  className="nav-link px-2 text-muted">Home</Link ></li>

                    <li className="nav-item"><Link to="/Formula1App/Team-Constructors"  className="nav-link px-2 text-muted">Constructors</Link ></li>
                    
                    <li className="nav-item"><Link to="/Formula1App/Driver-Standings"  className="nav-link px-2 text-muted">Drivers</Link ></li>
                    
                    <li className="nav-item"><Link to="/Formula1App/Seasons"  className="nav-link px-2 text-muted">Season</Link ></li>
                    
                    
                </ul>
                <p className="text-center text-muted">© Manglesh </p>
            </footer>
        </div>
    )
}

export default Footer
