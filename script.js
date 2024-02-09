wrapper = document.getElementById("wrapper");

const data = [
	{
		x: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
		y: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
		type: "bar",
		marker: {
			color: [
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
				"hsl(186, 34%, 60%)",
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
				"hsl(10, 79%, 65%)",
			],
		},
		showSendToCloud: true,
		showlegend: false,
	},
];

const layout = {
	showlegend: true,
	height: 200,
	margin: {
		t: 5,
		b: 30,
		l: 30,
		r: 30,
		pad: 0,
	},
	plot_bgcolor: "hsl(33, 100%, 98%)",
	paper_bgcolor: "hsl(33, 100%, 98%)",
	bargap: 0.2,
};

Plotly.newPlot("wrapper", data, layout, { displayModeBar: false, responsive: true });
