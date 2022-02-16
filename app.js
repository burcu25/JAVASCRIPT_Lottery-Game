let howMany = document.getElementById("number");
console.log(howMany.value);
let button =document.getElementById("button");
let results = document.getElementById("results--area");
let resultsArr = document.getElementsByClassName("results");

function rndNumberArr(min, max) {
    let li = []
    let many = 1
    while(many < 7) {
        let numb = Math.floor(Math.random() * (max - min + 1) ) + min;
        if ( !li.includes(numb)){
            li.push(numb);
        }else{
            numb=Math.floor(Math.random() * (max - min + 1) ) + min; 
            li.push(numb);
        };
        many ++;
    }
    return li.sort((a,b)=>a-b);
}
// console.log(rndNumberArr(1, 90));

function joker() {
    let numbers = rndNumberArr(1, 90);
    let jokr = Math.floor(Math.random() * 90 ) + 1;
    let superstar = Math.floor(Math.random() * 90) + 1;
    let jokrTask = ""
    if( ! numbers.includes(jokr)){
        jokrTask = `|** ${jokr} **|`;
        numbers.push(jokrTask);
    }else {
        jokr = Math.floor(Math.random() * 90 ) + 1; 
        jokrTask = `|** ${jokr} **|`; 
        numbers.push(jokrTask);
    }
    numbers.push(superstar);
    return numbers;
}
// console.log(joker());

button.addEventListener("click",()=>{

    if(howMany.value>8 ){
        results.innerHTML = "";
        alert("You can see max 8 series at one time!");
    }else{
        results.innerHTML = "";
        let count = 1;
        while(count <= howMany.value){
            let p = document.createElement("p");
            p.innerText =joker().join(" - ");
            results.appendChild(p);
            count ++;

        };
    };

    
})


