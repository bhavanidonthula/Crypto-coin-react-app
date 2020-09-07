import React from 'react';

const coinData = ({coindetails}) => {
    const { name } = coindetails;
    return(
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default coinData;