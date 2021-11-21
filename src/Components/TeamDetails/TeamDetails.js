import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './TeamDetails.css';
import founded from '../../Icon/found 1.png';
import flag from '../../Icon/flag (1) 1.png';
import football from '../../Icon/football (1) 1.png';
import male from '../../Icon/male-gender-sign 1.png';
import teamImg from '../../Images/Rectangle 28.png';
import fb from '../../Icon/Facebook.png';
import youtube from '../../Icon/YouTube.png';
import twitter from '../../Icon/Twitter.png';
import { Navbar,Container,Nav } from 'react-bootstrap';





const TeamDetails = () => {
    const { idLeague } = useParams();

    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/2/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.leagues[0]))
        // .then(data=>console.log(data.leagues[0]))
    }, [idLeague])
    return (
        <div className="container  text-light p-0">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Sports Mania</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/league">League</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

            <div className="teamHeader">
                <img src={team.strBanner} alt="" />
               
            </div>


            <div className="teamMain bg-dark ">
                <div className="teamchild  bg-info">
                  <div className="row">
                  <div className="team-left col-md-6">


<h3>{team.strLeagueAlternate}</h3>

<p> <img src={founded} alt="" />  Founded: {team.dateFirstEvent}</p>
<p> <img src={flag} alt="" />   Country: {team.strCountry}</p>
<p><img src={football} alt="" /> Sport Type: {team.strSport}</p>
<p><img src={male} alt="" />  Gender: {team.strGender}</p>
</div>
<div className="team-right col-md-6 col-sm-12 text-center">
<img className="img-fluid " src={teamImg} alt="" />

</div>
                  </div>



                </div>
                {/* <p>{team.strDescriptionEN}</p>
                <strong> <p>{team.strDescriptionES}</p></strong> */}
                <p  className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam culpa dolorem veritatis maiores unde nisi, recusandae alias nesciunt nostrum iure corrupti natus totam eius minus rerum molestiae tempora, architecto earum quidem explicabo. Voluptatem deserunt dolores laudantium ex ut earum iusto, fugiat nihil repudiandae maiores, non perferendis consectetur aut! Magnam similique eligendi cumque fuga modi nesciunt tempore ducimus mollitia reprehenderit corrupti itaque, eos, eaque voluptatem, libero nisi necessitatibus voluptatum? Excepturi sapiente perferendis dolore consequatur eos! </p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci molestiae repudiandae voluptatum ipsa? Porro et voluptatum quas molestiae ipsam assumenda dicta quis facilis excepturi voluptates omnis totam sint sunt, tempora illum eos saepe quia minima. Repellat, beatae iusto reiciendis autem harum deleniti! Accusamus et unde, adipisci totam quo accusantium neque repellendus facilis dolores voluptatum recusandae sed eveniet similique impedit exercitationem deserunt, nihil, incidunt quisquam esse voluptatibus quaerat. Hic totam ex odit nesciunt cupiditate molestias, iure ab harum autem optio consequuntur perferendis ipsa. Porro suscipit quidem necessitatibus sit debiti.</p>

                <div className="teamFooter ">
  
                        <a href={team.strFacebook}>  <img src={fb} alt="" /></a>

                        <a href={team.strYoutube}><img src={youtube} alt="" /></a>
                        <a href={team.strTwitter}><img src={twitter} alt="" /></a>



                    </div>


                </div>

            </div>

       
    );
};

export default TeamDetails;