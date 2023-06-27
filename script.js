let input =document.querySelector("input");
function display(num){
    input.value += num;
}

function result(){
    try{
        input.value = eval(input.value);
    }
    catch{
        alert("Invalid Input");
    }
}
function clr() {
  input.value = "";
}
function del(){
    input.value = input.value.slice(0, -1);
}