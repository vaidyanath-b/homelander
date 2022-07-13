var nav =document.querySelector('nav div');
console.log(nav);
var div = document.createElement('div');
var link = document.createElement('a');
var text=document.createTextNode('happy');
link.appendChild(text);
div.appendChild(link);
nav.appendChild(div);
console.log(div);

