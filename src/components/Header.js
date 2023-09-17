// Named import using Curly Braces
import { LOGO_URL } from '../utils/constants'

export const Header = () => {
    return (
        <div className="header">
            <img className='logo' src={LOGO_URL}/>
            <div className='nav-items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Add Card
                    </li>
                </ul>
            </div>
        </div>
    )
}