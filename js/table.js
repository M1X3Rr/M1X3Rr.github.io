$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "../xml/table.xml",
        dataType: "xml",
        success: function(xml) {
            var table = "<table><tr><th>Name</th><th>Upvotes</th><th>Downvotes</th></tr>";
            $(xml).find('row').each(function() {
                var name = $(this).find('Name').text();
                var upvotes = $(this).find('Upvotes').text();
                var downvotes = $(this).find('Downvotes').text();
                table += "<tr><td>" + name + "</td><td>" + upvotes + "</td><td>" + downvotes + "</td></tr>";
            });
            table += "</table>";
            $("#table-container").html(table);
        }
    });
});