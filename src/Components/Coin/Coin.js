import React from 'react';
import './Coin.css'

const Coin = (props) => {

    const priceChangeColor = {
        color: "green"
    }

    if(props.priceChanged < 0){
        priceChangeColor.color = "red";
    }

    return(
        <div className={props.class}>
            <div className="cryptoItem">
                <img src={"https://static.coincap.io/assets/icons/"+ props.logo.toLowerCase() +"@2x.png"} alt="logo" />
                <p className="cryptoTitle">{props.name}</p>
                <p style={priceChangeColor}>{props.priceChanged.slice(0, 4) + "%"}</p>
            </div>
        </div>
    );
}
export default Coin;