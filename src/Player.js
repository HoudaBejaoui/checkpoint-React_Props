import React from "react";
import Card from "react-bootstrap/Card";

// Player component receives player details as props
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  
  // Styles for the card container  
  const cardStyle = {
      width: '18rem',
      margin: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease-in-out',
    };
  
    // Styles for the player image
    const imageStyle = {
      height: '300px',
      width: '100%',
      objectFit: 'cover',
    };
  
    // Styles for the card body
    const cardBodyStyle = {
      padding: '1rem',
    };
  
    // Styles for the player name
    const titleStyle = {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    };
  
    // Styles for the player details text
    const textStyle = {
      fontSize: '1rem',
      color: '#333',
      lineHeight: '1.5',
      textAlign: 'left',
    };
  
    // Styles for the card footer
    const footerStyle = {
      marginTop: '1rem',
      textAlign: 'center',
      fontSize: '0.8rem',
      color: '#555',
    };
  
    // Render the player card using react-bootstrap Card component
    return (
      <Card style={cardStyle}>
        <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
        <Card.Body style={cardBodyStyle}>
          <Card.Title style={titleStyle}>{name}</Card.Title>
          <Card.Text style={textStyle}>
            Team: {team}<br />
            Nationality: {nationality}<br />
            Jersey Number: {jerseyNumber}<br />
            Age: {age}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={footerStyle}>Hover over the card for details</Card.Footer>
      </Card>
    );
  };

// Default props for the Player component (unchanged)
Player.defaultProps = {
    name: "Alexandra Popp",
    team: "VfL Wolfsburg (Women's team)",
    nationality: "German",
    jerseyNumber: 11,
    age: 32,
    imageUrl: "https://cdn.futbin.com/content/fifa24/img/players/p67335166.png?v=23://https://images.bfmtv.com/yfuVX81BJcIwpCwPy-kO5qrXytA=/0x53:1792x1061/images/Alexandra-Popp-1458289.jpg-fr.imgfoot.com/cristiano-ronaldo-2324-al-nassr.jpgted-tbn0.gstatic.com/images?q=tbn:https://www.lesoir.be/sites/default/files/dpistyles_v2/ls_16_9_864w/2020/02/29/node_283675/27445390/public/2020/02/29/B9722758910Z.1_20200229213922_000+GARFKJOOB.2-0.jpg?itok=gDntPCx01583008770-gLtEHUaRNEYNl4&usqp=CAUhttps://cdn.futwiz.com/assets/img/fc24/faces/100902381.png",
};

export default Player;