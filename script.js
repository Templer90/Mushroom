var type="debug";

function changeType(t){
    let but=document.getElementById("dropdownMenuButton");
    but.innerHTML=t;
    type=t;
}

function main(){
    let index=Math.floor(Math.random()*data[type].length);
    let div=document.getElementById("effect");
    let element=data[type][index];
    var dat={
        text:"debugText",
        func:()=>{}
    };

    if(typeof(element)=='object'){
        dat=element;
    }else{
        dat.text=element;
    }

    div.innerHTML=dat.text;
    dat.func();
}

main();