google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://script.google.com/macros/s/AKfycbxOaUpR6qtKyJ4eObDuOMPrJcJd2yomBeRkL9cvnnwAVrJvyGbA/execcom/spreadsheets/d/1il4lDznf6CeALokjqTe08wmppACX06vmjxT4G5oWYu0/edit?usp=sharing');
    query.setQuery('SELECT A, B, E, I, J, M label A "Pin #", B "Name", E "Chapter Eternal", I "Pin #", J "Name", M "Chapter Eternal"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
