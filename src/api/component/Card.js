import React from 'react'

const Card = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p> {/* Render the body of the post */}
      </div>
    );
  };
  

export default Card
