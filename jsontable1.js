
$().ready(function(){
    $.getJSON( "/tick1.json", function( myBooks ) {
        
        console.log(myBooks);
        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        var excol=['ID','TS_EXP','TS'];  //exclude field
        for (var i in myBooks) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1 & excol.indexOf(key) === -1 ) {
                    col.push(key);
                }
            }
        }
        col.sort();
        console.log(col);
        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i in myBooks) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        
        var now = new Date($.now());
        $("#text").html(now);
        
        var currentFontSize = $('#text').css('font-size');        
        var currentSize = $('#text').css('font-size');        
        var currentSize = parseFloat(currentSize)*0.8;        
        $('#text').css('font-size', currentSize); 
  });
});
