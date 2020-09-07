import React, { Component } from 'react';
import './CoinsList.css';
import Coin from '../../Components/Coin/Coin';
import axios from 'axios';
import Loader from '../../Components/UI/Loader/Loader';
import {NavLink} from 'react-router-dom';

class coinsList extends Component{
    
    state = {
        cryptoCurrencyItems: [],
        isLoading: true,
        btnText: "4 columns",
        selectedCryptoId: null,
        isColumnClass: true
    }

    componentDidMount(){
        axios.get('https://api.coincap.io/v2/assets')
        .then((res)=>{
            const data = res.data.data;
            const fetchedItems = [];
            for(let key in data){
                fetchedItems.push(data[key]);
            }
            this.setState({cryptoCurrencyItems: fetchedItems, isLoading: false});
        }).catch((err)=>{
            console.log(err);
            this.setState({isLoading: false});
        })
    }

    selectedCryptoIdHandler = (id) =>{
        this.setState({selectedCryptoId: id})
    }

    ColumnHandler = () =>{
        this.setState(prevState => ({
            isColumnClass: !prevState.isColumnClass
          }));
    }

    render(){
        return(
            <div className="cryptoItemsContainer">
                {this.state.isLoading ? <Loader /> : null }
                <button className="btn btn-primary pull-right clearfix" onClick={this.ColumnHandler}>
                   {this.state.isColumnClass ? "3 columns" : "4 columns"}
                </button>
                <div className="coins">
                    {this.state.cryptoCurrencyItems.map((item)=>{
                        return(
                        <NavLink to={'/' + item.id} key={item.id}>
                            <Coin 
                            // class="col-sm-4" 
                            class={this.state.isColumnClass ? "col-sm-4" : "col-sm-3"}
                            logo={item.symbol} 
                            name={item.name} 
                            priceChanged={item.changePercent24Hr}
                            id={item.id}
                            clicked={()=> this.selectedCryptoIdHandler(item.id)} />
                        </NavLink>)
                    })}
                </div>
                
            </div>
        );
    }
}

export default coinsList;