import React from 'react'
import classes from "./Introduction.module.css"
//import Button from './UI/Button'
const Introduction = () => {
  return (
    <div className={'container-fluid ' + classes.containerfluid}>
      <div className='container '>
        <div className='row align-items-center' style={{height: "41rem"}}>   
            <div className='col-12 text-start '>
                <h1 className={classes.h1} >
                    Usiachwe Nyuma <br/> Eka Biz Yako Online
                </h1>
                <h2 className= 'mt-4 text-white'>
                     We are helping YOU establish a precence online kwa bei ya MWANANCHI
                </h2>
                <button className={"btn btn-success px-3 py-2 " + classes.button}>Explore Products</button>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction