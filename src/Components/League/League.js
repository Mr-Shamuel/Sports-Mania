import React, { useEffect,useState } from 'react';
import Team from '../Team/Team';
import './League.css'


const League = () => {
    const [leagues,setLeagues] =useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeagues(data.leagues))
    },[])
    
     
    return (
  
           <div className="leaguecon pt-3">
             
           
            {
                leagues.map(league=><Team  league={league} key={league.idLeague}></Team>)
            }
           </div>
            
       
    );
};

export default League;