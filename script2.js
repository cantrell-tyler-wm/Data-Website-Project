/**
 * Created by session2 on 10/15/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['Has a phone',     90],
        ['does not have a phone', 10]

    ]);

    var options = {
        title: 'Cell phone ownership among adults'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}