import React from 'react'
import classes from './Catalog.module.css'
const Catalog = (props) => {
    return (
        <div className={classes.Catalog}>
            <span className={classes.theme}>BEAUTY & GROOMING</span>
            <div className={classes.information}>
                <div className={classes.img}>
                    <img src={props.img} alt="" />
                </div>
                <div className={classes.info}>
                    <h1 className={classes.title}>{props.title}</h1>
                    <div className={classes.data}>
                        <div className={classes.author}>{props.author}</div>
                        <div className={classes.date}>Date September 24, 2022</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog
