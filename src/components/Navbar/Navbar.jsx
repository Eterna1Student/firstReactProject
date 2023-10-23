import nav from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return <nav className={nav.nav}>
        <div className={nav.item}>
            <NavLink to='./profile' className={nav.link}>Profile</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='./messages' className={nav.link}>Messages</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='./news' className={nav.link}>News</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='./music' className={nav.link}>Music</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink to='./settings' className={nav.link}>Settings</NavLink>
        </div>
        <div className={nav.item}>
            <NavLink className={nav.link}></NavLink>
        </div>
    </nav>
}

export default Navbar;