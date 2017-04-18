var input = null;
var display = document.getElementById("display");
var divData = []; 
window.onload = function(){
	input = document.getElementsByTagName("input");
    input[0].addEventListener("blur", function () {
        if (isNaN(input[0].value) || input[0].value < 10 || input[0].value > 100) {
            alert("请输入10-100数字");
        }
    });
    input[1].addEventListener("click", function (){
    	div = getl();
    	display.appendChild(div);
    	div.style.left = -30+"px";
        div.style.height = input[0].value+"px";
        setTimeout(function(){
            div.style.left = 0+"px";
        	divData.unshift(div);
        },10);
        moveRight();
         display.addEventListener("click",function(e){
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
        div.style.left = 1200 + "px";
        div.style.height = input[0].value+"px";
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
        div.style.left = 1200 + "px";
        setTimeout(function(){
        	div.parentNode.removeChild(div);
        }, 1000);

        } else alert("alerdy Empty!");
    });
    var des = document.getElementById("descending");//降序
    des.addEventListener("click",function(){
        for(var j=0;j<divData.length-1;j++){
        for(var i=0;i<divData.length-1;i++){
            if(parseInt(divData[i].style.height)<parseInt(divData[i+1].style.height)){
               exchange(i,i+1);
            }
        }            
        }

    });

    var asc = document.getElementById("ascending");
    asc.addEventListener("click",function(){
        for(var j=0;j<divData.length-1;j++){
        for(var i=0;i<divData.length-1;i++){
            if(parseInt(divData[i].style.height)>parseInt(divData[i+1].style.height)){
                exchange(i,i+1);
            }
        }
        }

    });

}
	var getl = function(){
        var odiv = document.createElement("div");
        odiv.className = "del";
        odiv.style.cssText="width:30px;height:100px;background-color:#fff;position:absolute;bottom:0;transition:1s;";
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

    // var bubble = function(j){
    // j++;
    // exchange(0,j);
    // if(j<divData.length){
    
    // } 
    // }
    var exchange = function(a,b){
     divData[a].style.left = (parseInt(divData[a].style.left) + 30) + "px";
     divData[b].style.left = (parseInt(divData[b].style.left) + -30) + "px";
     var t = divData[a];
     divData[a] = divData[b];
     divData[b] = t;
    }