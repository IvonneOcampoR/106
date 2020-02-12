
function saveItem() {
    var code = $("#txtCode").val();

    console.log(code);
}




function init() {
    console.log("Tis is Admin page!!")


    $("#btnSave").click(saveItem);
}




window.onload = init;