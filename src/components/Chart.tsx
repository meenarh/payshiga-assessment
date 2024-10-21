const [chartData, setChartData] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: data.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return 'N' + value.toLocaleString(); // Format with 'N' prefix
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return 'N' + context.raw.toLocaleString(); // Format with 'N' prefix in tooltip
          },
        },
      },
    },
  };