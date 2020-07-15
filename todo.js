var newlist = document.getElementsByTagName("LI");
        for ( var i = 0; i <newlist.length; i++) {
            var span = document.createElement("SPAN");
            var text = document.createTextNode("Remove");
            span.className = "closeTag";
            span.appendChild(text);
            newlist[i].appendChild(span);
        }

     /*/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\By using the enter keyword/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/    
     document.addEventListener("keyup",function(event){
      if(event.keyCode==13){
        var inputValue = document.getElementById("todoValue").value; 
        var toDo = inputValue;
           if(toDo){
            addNewList(toDo);
           }
         document.getElementById("todoValue").value ="";
      } 
    })

/*/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\Add To do List/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
        function addNewList(){

  var list = document.createElement("li");
  var inputValue = document.getElementById("todoValue").value;
  var txt = document.createTextNode(inputValue);
  list.appendChild(txt);
   document.getElementById("todoValue").value ="";
   if(txt.nodeValue == ''){
     alert("No Empty Values Are Allowed!!");
   }else{
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("Remove");
     span.className = "closeTag";
     span.appendChild(txt);
     list.appendChild(span)
  document.getElementById("unOrderList").appendChild(list);
  }

  for (i = 0; i < closeTag.length; i++) {
            closeTag[i].onclick = function() {
            var displayNone = this.parentElement;
            displayNone.style.display = "none";
            }
        }

   

  }
/*/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\Checking the To do List/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var closeTag = document.getElementsByClassName("closeTag");
     var i;
     for (i = 0; i < closeTag.length; i++) {
         closeTag[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none";
     }
 }
