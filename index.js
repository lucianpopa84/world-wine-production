const xValues = ["Italy", "France", "Spain", "Moldavia"];
const yValues = [55, 49, 44, 4, 0];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "World Wine Production 2024"
    }
  }
});
