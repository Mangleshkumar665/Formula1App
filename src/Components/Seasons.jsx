import React from 'react'

const Seasons = (props) => {
  return (
    <div className='season-wrapper'>
      <div className='header'>

        <h1> Season Details </h1>
      </div>
      <section className=" season">
        {props.raceDetails.map((data) => {

          return <div key={data.round} className='d-flex justify-content-center align-items-center flex-column  ' data-bs-toggle="collapse" data-bs-target={`#collapse-${data.round}`} aria-expanded="false" aria-controls={`collapse-${data.round}`}>

            <div className="d-inline-flex gap-1    race-details-collapse-head  ">

              <div className="race-details-collapse " >

              

                {
                  props.checkCompletion(data.Name, data.events[4]?.date, data.events[4]?.time, data)
                }
              {console.log(data)}

              </div>

            </div>

            <div className="collapse " id={`collapse-${data.round}`}>


              <div className=" ">

                <ul className='race-details-ul '>
                  <li className=' row mx-3 caption'>
                    <div className='col'>Event</div>
                    <div className='col'>Time</div>
                    <div className='col'>Date</div>
                  </li>


                  <li className=' row mx-3'>
                    <div className='col'>
                      {
                        props.checkCompletion(data.events[0]?.name, data.events[0]?.date, data.events[0]?.time, data)
                      }
                    </div>
                    <div className='col'>{data.events[0]?.date}</div>
                    <div className='col'> {data.events[0]?.time}</div>
                  </li>

                  <li className=' row mx-3'>
                    <div className='col'>
                    {props.checkCompletion(data.events[1]?.name, data.events[1]?.date, data.events[1]?.time, data)}
                    </div>
                    
                    <div className='col'>{data.events[1]?.date}</div>
                    <div className='col'> {data.events[1]?.time}</div>
                  </li>

                  <li className=' row mx-3'>
                    <div className='col'>{props.checkCompletion(data.events[2]?.name, data.events[2]?.date, data.events[2]?.time, data)}</div>
                    <div className='col'>{data.events[2]?.date}</div>
                    <div className='col'> {data.events[2]?.time}</div>
                  </li>

                  <li className=' row mx-3'>
                    <div className='col'>{props.checkCompletion(data.events[3]?.name, data.events[3]?.date, data.events[3]?.time, data)}</div>
                    <div className='col'>{data.events[3]?.date}</div>
                    <div className='col'> {data.events[3]?.time}</div>
                  </li>

                  <li className=' row mx-3'>
                    <div className='col'>{props.checkCompletion(data.events[4]?.name, data.events[4]?.date, data.events[4]?.time, data)}</div>
                    <div className='col'>{data.events[4]?.date}</div>
                    <div className='col'> {data.events[4]?.time}</div>
                  </li>




                </ul>

              </div>
            </div>

          
          </div>

        })}

      </section>



    </div>
  )
}

export default Seasons
