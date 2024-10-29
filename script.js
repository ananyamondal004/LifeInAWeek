let answer=document.querySelector(".answer");
let head2=document.querySelector("#head2");
let alert1=document.querySelector(".alert1");
let alert2=document.querySelector(".alert2");
let input=document.querySelector(".input");
let cal=document.querySelector(".btn1");
let rest=document.querySelector(".btn2");
let ref=document.querySelector(".ref");
let dis_result=document.querySelector(".result_box");

let age;
let mytimer;


cal.addEventListener("click",()=>{
    age=input.value.trim();
    clearInterval(mytimer);

    if (age==""){
        alert1.classList.add("active");
        mytimer=setInterval(()=>{
            alert1.classList.remove("active");
        },3000);

    }else if(isNaN(age)==true){
        alert2.classList.add("active");
        mytimer=setInterval(()=>{
            alert2.classList.remove("active");
        },3000);
    }else{
        answer.classList.add("active");
        let remaining_year=90-age;
        let remaining_week=48*remaining_year;
        head2.innerHTML=remaining_week;
        input.value="";
    }
    
})
rest.addEventListener("click",()=>{
    ref.click();
})

