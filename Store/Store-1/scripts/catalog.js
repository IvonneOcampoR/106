var items = [];
var serverURL = "http://restclass.azurewebsites.net/API/";

function fetchCatalog(){
  
  $.ajax({
    url: serverURL + "points",
    type: "GET",

    sucess: function(response){
    console.log("response", response);
    
      for(var i=0; i < response.length; i++){
      var item = response[i];
     if(item.user == "Ivonne"){
      item.push(item);
      }
    }
      
        displayCatalog();

    },
   
      error: function(errorDetails){
       console.log("Error:", errorDetails);
     }
   });

}

function displayCatalog(){
   
   for(var i=0; i < items.length; i++){
       var item = items[i];
       drawItem(item);
   }
}

function drawItem(item){
    var sntx = `<div class='item'> 
    <img src= '${item.image}'>
    <label class='code' >${item.code}</label> 
    <label class='cat' >${item.category}</label> 
    <label class='desc' >${item.description}</label> 
    <label class='price' >${item.price}</label>
    <button class='btn btn-sm btn-info'> + </button>
    </div>`;

    var container = $("#catalog");

    container.append(sntx);
}

function search() {
   var text = $("#txtSearch").val().toLowerCase();
   
   $("#catalog").html("");

   for(var i=0; i< items.length; i++){
      var item = items[i];

      if (item.description.toLowerCase().includes(text)
        || item.category.toLowerCase().includes(text)
        || item.code == text
        || item.price == text
      )  {
         drawItem(item);
      }

   }
}

function init() {
    console.log("This is catalog page!");


 fetchCatalog();
 displayCatalog();


 $("#btnSearch").click(search);
 $("#txtSearch").keypress(function (e) {
 
    if (e.key == 13) {
       search();
    }
 });

   $("#catalog").on("click",".item", function(){
     // $(this).toogleeClass("selected");

      var img = $(this).find('img').clone();

     $("#modal-body").html(img);
     $("#modal").modal();
   });

}


window.onload = init;