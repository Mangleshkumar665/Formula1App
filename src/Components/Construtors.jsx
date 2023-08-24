import React, { useEffect, useState } from 'react'

import amIcon from "../media/cars-icons/am.png"
import apIcon from "../media/cars-icons/ap.png"
import arIcon from "../media/cars-icons/ar.png"
import atIcon from "../media/cars-icons/at.png"
import fIcon from "../media/cars-icons/f.png"
import hIcon from "../media/cars-icons/h.png"
import mcIcon from "../media/cars-icons/mc.png"
import mrIcon from "../media/cars-icons/mr.png"
import rbIcon from "../media/cars-icons/rb.png"
import wIcon from "../media/cars-icons/w.png"












const Construtors = (props) => {


  const { data } = props

  let icons = [
    { name :"Red Bull" ,icon: rbIcon },
    { name :"Mercedes" ,icon: mrIcon },
    { name :"Aston Martin" ,icon: amIcon },
    { name :"Ferrari" ,icon: fIcon },
    { name :"McLaren" ,icon: mcIcon },
    { name :"Alpine F1 Team" ,icon: apIcon },
    { name :"Williams" ,icon: wIcon },
    { name :"Haas F1 Team" ,icon: hIcon },
    { name :"Alfa Romeo" ,icon: arIcon },
    { name :"AlphaTauri" ,icon: atIcon }]





  return (
    <div>

      <section className=' header '>

        <h2>Constructors Standings</h2>

      </section>

      <section className='body-cnstr '>



        
          <div className='cnstr-list ' key={data.position}  >
            <ul className='row'>
              <li className='col-3 '>Position</li>
              <li className='col-5'>Team</li>
              <li className='col-3'>Points</li>
            </ul>
            {
              data.MRData?.StandingsTable.StandingsLists[0].ConstructorStandings.map((data) => {
                return <ul className='row '>
                  <li className='col-3 '>{data.position}</li>
                  <li className='col-5'>{data.Constructor.name}
                    <span>
                    
                      <img src={
                        icons.find((ele)=>{
                          return ele.name === data.Constructor.name
                        }).icon
                       
                      
                      } alt="" />
                    </span>
                  </li>
                  <li className='col-3'>{data.points}</li>
                </ul>

              })
            }
          </div>



      </section>

    </div>
  )
}

export default Construtors
