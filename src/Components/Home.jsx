
import CountDown from './CountDown'

import back from '../media/calender/mon.jpg'
const Home = (props) => {

    return (
        <div style={{ height: "100vh" }}>
            <section className='header'>




            </section>

            <div className='countdown d-flex justify-content-center '>
                <img src={back} alt="" />
                <CountDown className="count-main " leftRaces={props.dets.filter(
                    (data) => {
                        return !data.completed;
                    }
                )
                } />
            </div>

        </div>
    )
}

export default Home
