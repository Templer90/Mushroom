var type="Magic8Ball";

function init(){
   var but=document.getElementById("dropdownMenuButtonList");
    for(s in data){
        var b=document.createElement("button");
        b.setAttribute("class", "dropdown-item");
        b.setAttribute("type", "button");
        b.setAttribute('onClick',"changeType('"+s+"');");
        b.innerHTML=s;
        but.appendChild(b);
    }
    changeType(type);
}

function changeType(t){
    let but=document.getElementById("dropdownMenuButton");
    but.innerHTML=t;
    type=t;
    main();
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
    let ret=dat.func(dat);
    if (typeof(ret) !== 'undefined'){
        div.innerHTML=ret;
    }
}


init();
main();