import React, { Component } from 'react';
import HistoryChart from './HistoryChart';
import CoinData from './CoinData';
import  axios from 'axios';
import Loader from '../../Components/UI/Loader/Loader';

class coinDetails extends Component{
    state = {
        coinData: '',
        details: '',
        isLoading: true
    }
    formatData = (data) => {
        return data.map(el => {
            return {
                t: el.time,
                y: el.priceUsd
            }
        })
    }
    componentDidMount(){
        Promise.all([
            axios.get('https://api.coincap.io/v2/assets/' + this.props.match.params.id + '/history?interval=d1')
            .then(res => {
                this.setState({coinData: this.formatData(res.data.data), isLoading: false});
            })
            .catch(err => console.log(err)),
            axios.get('https://api.coincap.io/v2/assets/' + this.props.match.params.id)
            .then(res => {
                this.setState({details: res.data.data, isLoading: false});
            })
            .catch(err => console.log(err))
        ]);
    }

    render(){
        return(
            <div>
                <CoinData coindetails={this.state.details}/>
                {this.state.isLoading ? <Loader /> : <HistoryChart data={this.state.coinData} />}
            </div>
        )
    }
}

export default coinDetails;