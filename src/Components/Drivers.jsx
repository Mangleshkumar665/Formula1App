import React from 'react'

const Drivers = (props) => {

  const { data } = props

  return (

    <div className='season-wrapper'>
      <div className='header'>
        <h1> Drivers Details </h1>
      </div>
      <section className="">
        
       

        {data[0]?.DriverStandings.map((data, index) => {

          return <div key={data.position} className='d-flex justify-content-center align-items-center flex-column ' >

            <div className="driver-details-collapse-head   ">

              <ul className='driver-details-ul row  '>
                <div className='col-2'>{data.position}</div>
                <div className='col-8'>{data.Driver.givenName + " " + data.Driver.familyName}</div>
                <div className='col'>{data.points}</div>

              </ul>



            </div>

            <div className="collapse " id={`collapse-${data.position}`}>


              
            </div>


          </div>

        })}

      </section>






    </div>
  )
}

export default Drivers
