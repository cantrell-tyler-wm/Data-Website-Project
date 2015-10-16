google.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['cell phone', 'units sold in millions'],
        ["nokia 1100", 250],
        ["nokia 1110", 250],
        ["nokia 3210", 160],
        ["nokia 1200", 150],
        ['nokia 6600', 150],
        ['motorola v3', 130],
        ['nokia 3310', 126 ],
        ['samsung galaxy s4',80],
            ['nokia 6010', 75],
            ['apple iphone 5', 70],
            ['nokia 5130', 65],
            ['motorola startac', 60],
            ['apple iphone 4s', 60 ],
            ['samsung galaxy s3', 60],
    ]);

    var options = {
        title: 'most sold cell phones',
        width: 400,
        legend: { position: 'none' },
        chart: { subtitle: 'units sold in millions' },
        axes: {
            x: {
                0: { side: 'top', label: ''} // Top x-axis.
            }
        },
        bar: { groupWidth: "90%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
};






