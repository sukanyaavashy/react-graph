import './App.css'
import {Bar} from "react-chartjs-2";
import { Chart } from 'chart.js/auto';

const labels = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']

const options = {
  plugins:{
    legend:{
      position:"top"

    },
    title:{
      display:true,
      text:"Expense Tracker"
    }
  }
}

const data = {
  labels,
  datasets : [
    {
      label:"2021 Expenses",
      data:[10000,9000,8000,10200,10500,8400,13000,8900,14000,6000,9500],
      backgroundColor: 'pink'
    },
    {
      label:"2022 Expenses",
      data:[18000,19000,28000,10200,7500,5400,11000,7900,15000,16000,19500],
      backgroundColor: 'grey'

    }
  ]
}

function App(){
  return(
    <div className="graph-container">
      <Bar options={options} data={data}/>
    </div>
  )
}

export default App