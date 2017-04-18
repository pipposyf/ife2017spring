var input = null;
var display = document.getElementById("display");
var divData = []; 
window.onload = function(){
	input = document.getElementsByTagName("input");
    input[1].addEventListener("click", function (){
    	div = getl();
    	display.appendChild(div);
    	div.style.left = -30+"px";
        setTimeout(function(){
            div.style.left = 0+"px";
        	divData.unshift(div);
        },10);
        moveRight();
         display.addEventListener("click",function(e){
        // if(e.target.nodeName.toLowerCase() === 'div'){
        // 	e.target.parentNode.removeChild(e.target);
        // }
        var lastD = e.target;
        
        if(lastD.nodeName.toLowerCase() === 'div'){
            //alert("1");
        	display.removeChild(lastD);
        };
          });
        
        
        
    });
    input[2].addEventListener("click", function (){
        if (divData.length>0) {
        var div = divData.shift();
        div.style.left = -30 + "px";
        setTimeout(function(){	
        div.parentNode.removeChild(div);
        }, 1000);
        moveLeft();
        console.log(divData);
        } else alert("alerdy Empty!");
    });
    input[3].addEventListener("click", function (){
        var div = getl();
        div.style.left = 400 + "px";
        display.appendChild(div);
        setTimeout(function(){
        	div.style.left = divData.length*30+"px";
        	div = divData.push(div);
        }, 10);
        console.log(divData);
    });
    input[4].addEventListener("click", function (){
        if (divData.length>0) {
        var div = divData.pop(div);
        div.style.left = 400 + "px";
        setTimeout(function(){
        	div.parentNode.removeChild(div);
        }, 1000);

        } else alert("alerdy Empty!");
    });
    

    //var str = document.getElementById("display").innerHTML;


    // if(str.indexOf("<div>")>=0){
    // 	alert("sb");
    // }

   //  var deldiv = display.getElementsByClassName("del");
   //  console.log(deldiv);
   //  deldiv.addEventListener("click",function(){
   //  	// deldiv.parentNode.removeChild(deldiv);
   //  	alert("sb");
   //  }); 
   // }
  


}
	var getl = function(){
        var odiv = document.createElement("div");
        odiv.className = "del";
        odiv.style.cssText="width:30px;height:70px;background-color:#fff;position:absolute;transition:1s;";
        odiv.innerHTML = input[0].value;
        return odiv;
	}
	var moveRight = function(){
        for (var i = 0; i < divData.length; i++) {
        divData[i].style.left = (parseInt(divData[i].style.left) + 30) + "px";
    }
	}
    var moveLeft = function(){
    	for (var i = 0; i < divData.length; i++) {
        divData[i].style.left = (parseInt(divData[i].style.left) + -30) + "px";
    }
    }