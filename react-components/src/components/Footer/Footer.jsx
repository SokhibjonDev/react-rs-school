import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.container}>
                <ul>
                    <p>Blog In</p>
                    <li><Link className={classes.Link}>Madrid</Link></li>
                    <li><Link className={classes.Link}>Paris</Link></li>
                    <li><Link className={classes.Link}>San Fransisco</Link></li>
                </ul>
                <ul>
                    <p>Company</p>
                    <li><Link className={classes.Link}>About</Link></li>
                    <li><Link className={classes.Link}>Mission</Link></li>
                    <li><Link className={classes.Link}>Services</Link></li>
                    <li><Link className={classes.Link}>Social</Link></li>
                    <li><Link className={classes.Link}>Get in touch</Link></li>
                </ul>
                <ul>
                    <p>Products</p>
                    <li><Link className={classes.Link}>MDFrance</Link></li>
                    <li><Link className={classes.Link}>MDItaly</Link></li>
                    <li><Link className={classes.Link}>Brand Flow</Link></li>
                    <li><Link className={classes.Link}>Parfumerium</Link></li>
                </ul>
                <ul>
                    <p>Useful Links</p>
                    <li><Link className={classes.Link}>Your Account</Link></li>
                    <li><Link className={classes.Link}>Become an Affiliate</Link></li>
                    <li><Link className={classes.Link}>Shipping Rates</Link></li>
                    <li><Link className={classes.Link}>Help</Link></li>
                </ul>
                <ul>
                    <p>Contact</p>
                    <li><Link className={classes.Link}>New York NY 10012, US</Link></li>
                    <li><Link className={classes.Link}>info@example.com</Link></li>
                    <li><Link className={classes.Link}>+90 234 4709 0</Link></li>
                    <li><Link className={classes.Link}>+90 234 567 98</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
