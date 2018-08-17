google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1aPxIiabqqzmvTmj5SsFcQR_JT_nb08wwmY2a7ceptGA/edit#gid=1193858178');
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
