// 동적 상품리스트 레이아웃 구현
$(document).ready(function(){
  var ProductList = [];
  ProductList = document.getElementsByClassName("servicelike-product-element");
  
  if(ProductList.length%3 == 2){
    
    var storebox = document.getElementsByClassName("servicelike-product")[0];
    var layoutbox = document.createElement('div');
    
    layoutbox.setAttribute("class", "servicelike-product-element");
    layoutbox.setAttribute("style", "display:block");
    storebox.appendChild(layoutbox);
    ProductList[ProductList.length-1].style.border="none";
    ProductList[ProductList.length-1].style.cursor="default";
  }

  var div_box = document.getElementsByClassName('servicelike-product')[0];
  var div_default = document.getElementsByClassName('servicelike_default')[0];
  
  if(div_default){
    div_box.style.height = "25rem";
  }
});

function ProductClick(element){
  var product = $(element).find(".element_btn")
  
  console.log(product);

  product[0].click();
}