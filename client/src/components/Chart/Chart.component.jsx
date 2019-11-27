import React from 'react'
import { Bar } from 'react-chartjs-2';
import './Chart.style.scss'
const Chart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [2, 10, 5, 80, 20, 30, 45],
        }]
    }
    return (
     <div className="chart">
        <div className="chartHolder">
            <Bar
            data={data}
            width={10}
            height={500}
           options={{ maintainAspectRatio: false }}
           />
        </div>
      </div>
    )
}

export default Chart
