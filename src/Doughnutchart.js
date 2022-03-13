import React from 'react';
import {Doughnut} from 'react-chartjs-2'

function Doughnutchart(){
    const data ={
        labels : ['Jan','Feb','March','April','May'],
        type: 'line',

        style: {
            color: 'blue'
        },

        series:[
            {
                label : 'Sales for 2021 (M)',
                data : [3,2,2,1,5],
              
                backgroundColor:[
                    'rgba(255,99,132,1)',
                    'rgba(255,205,86,1)',
                    'rgba(255,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(255,102,255,1)'
                ],
                
            }

        ]
    }
    const options = {
        title: {
            display: true,
            text : 'Doughnut Chart'
        }
    }
    return <Doughnut data={data} options={options} />
    
}

export default Doughnutchart