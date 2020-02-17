var serverURL = "http://restclass.azurewebsites.net/API/";


function saveItem() {
    var code = $("#txtCode").val();
    var desc = $("txtDescription").val();
    var price = $("txtPrice").val();
    var image = $("txtImage").val();


$.ajax({

});
  
  
}

function testAjax() {

    $.ajax({
        url: serverURL + "test",
        type: 'GET',
        succes: function (res) {
            console.log("Payment finished");
            console.log("Server says", res);

            console.log("Done, thanl you for the payment");
        },
        error: function (err) {
            console.log("Payment error");
            console.log("Error ocurred", err);

            console.log("Sory, ...");
        }
    });
}



function init() {
    console.log("Tis is Admin page!!")


    $("#btnSave").click(saveItem);
}




window.onload = init;