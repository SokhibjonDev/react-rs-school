import React from 'react'
import Card from '../../components/Card/Card'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/Footer'
import classes from './HomePage.module.css'
const HomePage = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.header}>
        <div className={classes.container}>
          <h1>SHOP CANADA / STYLE
            If Toronto Wants a Met Gala, the AGO’s Art Bash! Has Potential</h1>
          <p>At the Art Gallery of Ontario's Art Bash!, the worlds of fashion and fine art collide.</p>
        </div>
      </div>
      <div className={classes.container}>
        <h1 className={classes.Title}>FASHION and Chatelaine Reveal The Beauty Awards Winners</h1>
        <div className={classes.Cards}>

          <Card theme='BEAUTY & GROOMING' img='../../img/poster-1.jpg' title='Moodboard: Inside the Mind of Violette Serrat, Guerlain’s Creative Director of Makeup' author='By Natasha Boateng' date='Date September 29, 2022' />
          <Card theme='BEAUTY & GROOMING' img='../../img/poster-3.jpg' title='Moodboard: Inside the Mind of Violette Serrat, Guerlain’s Creative Director of Makeup' author='By Natasha Boateng' date='Date September 29, 2022' />
          <Card theme='BEAUTY & GROOMING' img='../../img/poster-2.jpg' title='Moodboard: Inside the Mind of Violette Serrat, Guerlain’s Creative Director of Makeup' author='By Natasha Boateng' date='Date September 29, 2022' />
        </div>
      </div>
      <div className={classes.container}>
        <h1 className={classes.Title}>Spring Summer 2023 | Fashion Show</h1>
        <div className={classes.videos}>
          <iframe src="https://www.youtube.com/embed/MiCDOloifrg" title="YouTube video player" ></iframe>
          <iframe src="https://www.youtube.com/embed/OJ7sAmv_g7Q" title="YouTube video player" ></iframe>
        </div>
      </div>
      <div className={classes.container}>
        <h1 className={classes.Title}>THE LATEST</h1>
        <Catalog img='../../../img/product-1.jpg' author='
Brad Pitt Launches a Genderless Skincare Line + More Beauty News'/>
        <Catalog img='../../../img/product-2.jpg' author='
Chanel Les Ombres Tweed Eyeshadow Palettes Fall 2022
Chanel Beauty Takes Inspiration from Tweed + More Beauty News'/>
        <Catalog img='../../../img/product-3.jpg' author='
Diesel’s Glenn Martens Drops His First Fragrance + More Beauty News'/>
        <Catalog img='../../../img/product-4.jpg' author='
Texture Talk: How to Ace the Perfect Wash-and-Go'/>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
