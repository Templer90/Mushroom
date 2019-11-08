function main(){
    let index=Math.floor(Math.random()*data.length);
    let div=document.getElementById("effect");
    div.innerText=data[index];
}