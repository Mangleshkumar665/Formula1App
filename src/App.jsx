import { BrowserRouter,Route ,Routes } from "react-router-dom";

import Home from "./Components/Home";
import { useState, useEffect } from "react";
import XMLParser from "react-xml-parser";
import axios from "axios";

import Navbar from './Components/Navbar'
import Construtors from "./Components/Construtors";
import Seasons from './Components/Seasons'
import Drivers from './Components/Drivers'
import NoPage from './Components/NoPage'
import Footer from './Components/Footer'





function App() {
  const [err, setErr] = useState(true);
  const [raceDetails, setRaceDetails] = useState([{
    round :"",
    Name : "",
    events :[],
    completed: false,
    sprintRaces:[]
  }]);
  const [driversDetails, setDriversDetails] = useState([]);

  const [constructorsDetails, setConstructorsDetails] = useState([]);

  const [currentTime, setCurrentDate] = useState("");


  const getTodaysDate = () => {
    const options = {
      day: "2-digit",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString("en-IN", options);
    setCurrentDate(formattedTime);
    return;
  };


  const parseDate = (dateStr) => {

    try {
        const [datePart, timePart] = dateStr?.split(", ");

    // eslint-disable-next-line no-unsafe-optional-chaining
    const [day, month, year] = datePart?.split("/");
    const [time, ampm] = timePart.split(" ");
    const [hour, minute, second] = time.split(":");
    const monthIndex = parseInt(month, 10) - 1; // Months are zero-based
    const hourValue =
      ampm === "am" ? parseInt(hour, 10) : parseInt(hour, 10) + 12;
    return new Date(year, monthIndex, day, hourValue, minute, second);
    } catch (error) {
        return false
    }
    
 

};




const getDriversDetails = async ()=>{
  const res = await axios.get("https://ergast.com/api/f1/current/driverStandings.json");
 
  setDriversDetails(res.data.MRData.StandingsTable.StandingsLists)
}






  const getDetails = async () => {
    try {
      const res = await axios.get("https://ergast.com/api/f1/2023");

      let parsedXml = new XMLParser().parseFromString(res.data);

      setErr(false);
      let data = [];
      for (let index = 0; index < 22; index++) {
        let completed ;
        if (data.length !== 21) {

          let racedate = parsedXml.children[0].children[index].children[2].value.split('-')[2]

          let raceMonth = parsedXml.children[0].children[index].children[2].value.split('-')[1]

          let today = new Date()
          let month = today.getMonth() + 1
          let date = today.getDate()
          if (raceMonth < month) {
            completed =true
          } else {
              if (racedate > date) {
                completed =false
              } else {
                completed =true
              }
          }


          if ( parsedXml.children[0].children[index].children[7].name === "Sprint"
          ) {
            data = [
              ...data,
              {
                round: parsedXml.children[0].children[index].attributes.round,
                Name: parsedXml.children[0].children[index].children[0].value,
                events: [
                  {
                    name: "First Practice",
                    date: parsedXml.children[0].children[index].children[4]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[4]
                      .children[1].value,
                  },

                  {
                    name: "Qualifying",
                    date: parsedXml.children[0].children[index].children[5]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[5]
                      .children[1].value,
                  },

                  {
                    name: "Second Practice",
                    date: parsedXml.children[0].children[index].children[6]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[6]
                      .children[1].value,
                  },

                  {
                    name: "Sprint",
                    date: parsedXml.children[0].children[index].children[7]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[7]
                      .children[1].value,
                  },

                  {
                    name: "Race",
                    date: parsedXml.children[0].children[index].children[2]
                      .value,

                    time: parsedXml.children[0].children[index].children[3]
                      .value,
                  },
                ],
                completed: completed,
                sprintRaces: [],
              },
            ];
          } else {
            data = [
              ...data,
              {
                round: parsedXml.children[0].children[index].attributes.round,

                Name: parsedXml.children[0].children[index].children[0].value,

                events: [
                  {
                    name: "First Practice",
                    date: parsedXml.children[0].children[index].children[4]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[4]
                      .children[1].value,
                  },

                  {
                    name: "Second Practice",
                    date: parsedXml.children[0].children[index].children[5]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[5]
                      .children[1].value,
                  },

                  {
                    name: "Third Practice",
                    date: parsedXml.children[0].children[index].children[6]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[6]
                      .children[1].value,
                  },

                  {
                    name: "Qualifying",
                    date: parsedXml.children[0].children[index].children[7]
                      .children[0].value,
                    time: parsedXml.children[0].children[index].children[7]
                      .children[1].value,
                  },

                  {
                    name: "Race",
                    date: parsedXml.children[0].children[index].children[2]
                      .value,

                    time: parsedXml.children[0].children[index].children[3]
                      .value,
                  },
                ],
                completed: completed,
                sprintRaces: [],
              },
            ];
          }
        } else {
          setRaceDetails(data);
        }
      }
    } catch (error) {
      
    }
  };

  const getConstructorDetails = async () => {
    const res = await axios.get(
      "https://ergast.com/api/f1/current/constructorStandings.json"
    );
    setConstructorsDetails(res.data);
    
  };



  const checkCompletion = (name, date, time, data) => {
    const utcTime = new Date(date + " " + time);
    const given = utcTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const date1 = parseDate(given);
    const date2 = parseDate(currentTime);
    if (date1 > date2) {
      data.completed = false;
      return <div> {name}</div>;
    } else if (date1 < date2){
      data.completed = true;
      return <div className="completed">{name}</div>;
    } else {
      data.completed = false;
      return <div>{name}</div>;
    }
  };
//   
  const dets = raceDetails;

  useEffect(() => {
    getTodaysDate();
    getConstructorDetails();
    getDriversDetails();
    getDetails();
  }, []);

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/Formula1App"
            element={
              <Home
                dets={dets}
                raceDetails={raceDetails}
                err={err}
                
              />
            }
          />
          <Route
            path="/Formula1App/Team-Constructors"
            element={<Construtors data={constructorsDetails} />}
          />
          <Route
            path="/Formula1App/Seasons"
            element={
              <Seasons
                raceDetails={raceDetails}
                checkCompletion={checkCompletion}
              />
            }
          />
          <Route path="/Formula1App/Driver-Standings" element={<Drivers data = {driversDetails} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
              


    </>
  )
}

export default App
