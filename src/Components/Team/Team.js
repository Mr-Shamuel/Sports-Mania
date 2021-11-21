
import './Team.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';



const Team = (props) => {
    const { strLeagueAlternate, strSport, idLeague } = props.league;
   
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.leagues[0]))
        // .then(data=>console.log(data.leagues[0]))
    }, [idLeague])





    return (
 


       <div className="teamcon ">
           
       <Card className="cardContainer" style={{ width: '18rem' }}>
                <Card.Img className="badgelogo w-50 m-auto pt-3" variant="top" src={team.strBadge} />
                <Card.Body className="text-center">
                    <Card.Title>{strLeagueAlternate}</Card.Title>
                    <Card.Text>
                        Sports Type: {strSport}
                    </Card.Text>
                    <Button variant="primary"><Link class="text-light linkbtn" to={`/league/${idLeague}`}>Explore</Link></Button>

                </Card.Body>
            </Card>
       </div>
  







    );
};

export default Team;