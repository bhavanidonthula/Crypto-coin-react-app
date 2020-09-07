import React, { useRef, useEffect} from 'react';
import chartjs from 'chart.js';
import { historyOptions } from '../ChartConfig/ChartConfig';

// class historyChart extends Component{
//     constructor(props){
//         super(props);
//         this.data = props.data
//         this.chartRef = React.createRef();
//     }

//     componentDidMount(){
//         if(this.chartRef && this.chartRef.current){
//             const chartInstance = new chartjs(this.chartRef.current, {
//                 type: 'line',
//                 data: {
//                     datasets: [{
//                         label: '# of Votes',
//                         // data: [{x: 1, y: 15}, {x: 2, y: 12}, {x: 3, y: 25}],
//                         data: this.data,
//                         backgroundColor: 'rgba(174, 305, 194, 0.5)',
//                         borderColor: 'rgba(174, 305, 194, 0.4)',
//                         pointRadius: 0
//                     }],
//                 },
//                 options: historyOptions
//             })
//         }
//     }

//     render(){
//         return(
//             <div>
//             {/* {data.map(i => (<p>{i.priceUsd}</p>))} */}
//                 <canvas ref={this.chartRef} id="myChart"></canvas>
//             </div>
//         )
//     }
// }

const HistoryChart = ({data}) => {
    const chartRef  = useRef(); 
    useEffect(()=>{
        if(chartRef && chartRef.current){
            new chartjs(chartRef.current, {
                type: 'line',
                showTooltips: true,
                data: {
                    datasets: [{
                        label: '',
                        // data: [{x: 1, y: 15}, {x: 2, y: 12}, {x: 3, y: 25}],
                        data: data,
                        backgroundColor: 'rgb(208, 250, 238)',
                        borderColor: '#48c683',
                        pointRadius: 1,
                        hitRadius: 10
                    }],
                },
                options: {
                    ...historyOptions
                }
            })
        }
    });

    return(
        <div>
            <canvas ref={chartRef} id="myChart"></canvas>
        </div>
        
    );

}

export default HistoryChart;