import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    

    return(
        <>
            {robots.map((user,i) => <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>)}
        </>
    );
}

export default CardList;