import React from 'react'
import classes from './Card.module.css'
const Card = (props) => {
  return (
      <div className={classes.Card}>
        <span className={classes.theme}>{props.theme}</span>
        <img src={props.img} alt="" />
        <h1 className={classes.title}>{props.title}</h1>
        <div className={classes.data}>
          <p className={classes.author}>{props.author}</p>
          <p className={classes.date}>{props.date}</p>
        </div>
      </div>
  )
}

export default Card
