//ADD NEW ITEM TO END OF LIST
var add = document.createElement("li");
var item = document.createTextNode("Cream");
add.appendChild(item);
document.querySelector('ul').appendChild(add);

// ADD NEW ITEM START OF LIST
var add = document.createElement("li");
var item = document.createTextNode("Kale");
add.appendChild(item);
document.querySelector('ul').prepend(add);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var updateClass = document.querySelectorAll("li");
for(var i = 0; i < updateClass.length; i++){
    updateClass[i].setAttribute("class","cool");
}
//updateClass.setAttribute("class","cool");

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var items = document.createElement("h2");
var totalnum = updateClass.length;
var num = document.createTextNode(totalnum);
items.appendChild(num);
document.querySelector("h2").appendChild(num);
//document.querySelector("h2").style.color = "red";