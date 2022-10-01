import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <ul className={classes.Routeeer}>
                <Link className={classes.Logo } to="/">VOGUE ®</Link>
                <ul className={classes.Navigation}>
                    <li><Link className={classes.Link} to="/">Home</Link></li>
                    <li><Link className={classes.Link} to="/fashion">Fashion</Link></li>
                    <li><Link className={classes.Link} to="/collection">Collection</Link></li>
                    <li><Link className={classes.Link} to="/features">Features</Link></li>
                    <li><Link className={classes.Link} to="/magazines">Magazines</Link></li>
                    <li><Link className={classes.Link} to="/blog">Blog</Link></li>
                    <li><Link className={classes.Link} to="/shop">Shop</Link></li>
                </ul>
                <ul className={classes.Signature}>
                    <li><Link className={classes.Link} to="/signup">Sign Up</Link></li>
                    <li><Link className={classes.Link} to="/login">Log In</Link></li>
                </ul>
            </ul>
        </div>
    )
}

export default Navbar
