/*sub_btn.addEventListener('click', dish_search);
const dish_search=async()=>{
    
}*/
//let namasteBtn=document.querySelector('button');
sub_btn.addEventListener('click',showMsg);

function showMsg(){
    //alert("Namaste World");
    var i=0;
    const dish=document.getElementById('input');
    //alert(dish);
    const dishName=dish.value;
    if(dishName=='chicken'){
        window.open('chicken.html','newwindow');
    }
    else if(dishName=='dessert'){
        window.open('dessert.html','newwindow');
    }
    console.log();
    alert(dishName);
}