import './index.scss';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const MONTH = [1,2,3,4,5,6,7,8,9,10,11,12];

const labels = MONTH.slice(new Date().getMonth(), MONTH.length).concat(MONTH.slice(0, new Date().getMonth())).map(label => label+"月");

export const options = {
  responsive: true,
  scales: {
      y: {
          ticks: {
              display: false,
              beginAtZero: true,
          },
          grid: {
              drawBorder: false,
              display: false,
          },
      },
      x: {
          grid: {
            color:"#777777"
          },
          ticks:{
            color:'white',
            font: {
              size: 12
          }
          }
      },
  },
  plugins: {
      legend: {
          display: false,
      },
      title: {
          display: false,
      },
  },
};
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [20, 18, 12, 15,13,11,14 ,10,9,8,7,8],
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
    {
      label: 'Dataset 2',
      data: [20, 17, 13, 12,10,10,8 ,7,6,5,3,2],
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
  ],
};


const Chart =()=> {
  return <div className="chart-component">
    <Line style={{width:"100%"}} options={options} data={data} />;
  </div>
}

export default Chart;