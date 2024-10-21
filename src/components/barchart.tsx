import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container w-full">
      <Bar
      className="w-full"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false, // Remove grid lines for x axis
              },
            },
            y: {
              grid: {
                display: false, // Remove grid lines for y axis
              },
            },
          },
        }}
        
      />
    </div>
  );
};