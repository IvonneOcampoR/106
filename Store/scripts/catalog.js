var items = [];

function fetchCatalog(){
   items = [
       {
          "code" : "1234",
          "description" : "Ship",
          "price" : 99.65,
          "image" : "data:image/jpeg;base64,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",
          "category" : "Ships",
          "Stock" : 2,
          "deliveryDays" : 180,
       },  
       {
         "code" : "D76",
          "description" : "Frozen II Doll Set",
          "price" : 99.65,
          "image" : "data:image/jpeg;base64,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",
          "category" : "Dolls",
          "Stock" : 2,
          "deliveryDays" : 50,
       },
       {
         "code" : "MK62",
          "description" : "Make up Kit",
          "price" : 99.65,
          "image" : "https://images-na.ssl-images-amazon.com/images/I/71IfNk%2B-%2BsL._SL1500_.jpg",
          "category" : "Make up",
          "Stock" : 2,
          "deliveryDays" : 100,
       },
   ];
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

function init() {
    console.log("This is catalog page!");


 fetchCatalog();
 displayCatalog();

}


window.onload = init;