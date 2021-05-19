import React, { useEffect, useState } from "react";
import "./css/style.css";


const Tempapp =()=>{
    let time =new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);


    const [city ,setCity]=useState(null);
    const [search,setSearch]=useState("Kathmandu");
    useEffect(()=>{
        const fetchApi= async() =>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=19d0e8c53143c3d5953044637df64d86`;
            
            const response= await fetch(url);
            
            const resJson = await response.json();
            
            setCity(resJson.main);
        }
        fetchApi();

    },[search])
    const UpdateTime=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime,1000);
    return(
        <>
        <br />
        <br />
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputFeild"
                onChange={(event)=>{
                    setSearch(event.target.value)

                }} 
                />
                
                

            </div>
            
            {!city ? (
                <p className="errorMsg"> No Data Found </p>
            ): (
                <div>
                    <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i> {search}
            </h2>
            <h3 className="sys_time">{ctime}</h3>
            <h1 className="temp">
            {city.temp} °Cel   
            </h1>
            <h3 className="tempmin_max">Min : {city.temp_min} °Cel   | Max : {city.temp_max} °Cel </h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
                </div>


            )

            }

        
        
        </div>
        </>
    )
}
export default Tempapp;