import { WrapperHeader } from "../../../../components/WrapperHeader";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#303030",
        beginAtZero: true,
        font: {
          size: 14,
          weight: 700,
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#303030",
        beginAtZero: true,
        font: {
          size: 14,
          weight: 700,
        },
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      data: [
        1600, 2000, 2200, 2700, 1800, 1800, 1600, 2000, 2200, 1800, 2200, 1800,
      ],
      backgroundColor: "#02378B",
    },
  ],
};

export function UserActivity() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "30px",
      }}
    >
      <WrapperHeader title="Users Activity" />
      <div style={{ height: "295px", width: "100%", padding: "0 40px 45px" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
