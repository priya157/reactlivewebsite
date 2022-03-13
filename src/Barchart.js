import React from 'react';
import {Bar} from 'react-chartjs-2'

function Barchart(){
    const data ={
        labels : ['Jan','Feb','March','April','May'],
        type: 'line',

        style: {
            color: 'blue'
        },

        datasets:[
            {
                label : 'Sales for 2021 (M)',
                data : [3,2,2,1,5],
                borderColor:[
                    'rgba(255,209,86,0.2)',
                    'rgba(255,209,86,0.2)',
                    'rgba(255,209,86,0.2)',
                    'rgba(255,209,86,0.2)',
                    'rgba(255,209,86,0.2)'
                ],
                backgroundColor:[
                    'rgba(255,206,86,0.2)',
                    'rgba(255,209,86,0.2)',
                    'rgba(255,209,86,0.2)',
                    'rgba(255,209,86,0.2)',
                    'rgba(255,209,86,0.2)'
                ],
                
            },
            {
                label : 'Sales for 2020 (M)',
                data : [1,3,2,2,3],
                borderColor:[
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)'

                ],
                backgroundColor:[
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)',
                    'rgba(54,162,235,0.2)'
                ]
              
            }

        ]
    }
    const options = {
        title: {
            display: true,
            text : 'Bar Chart'
        },
        scales:{
            yAxis:{
                ticks:{
                    min:0,
                    max:6,
                    stepSize:1
                }
            }
        }
    }
    return <Bar data={data} options={options} />
    
}

export default Barchart