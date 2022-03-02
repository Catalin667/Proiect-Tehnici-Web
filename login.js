function register()
{
    const utilizator=document.getElementById("username").value;
    const parola=document.getElementById("parola").value;
    var id = Math.floor((Math.random() * 100000) + 1);
    const newUtilizator={
        utilizator: utilizator,
        parola: parola,
        id:id
    }
    $.post({
        url:"http://localhost:3000/utilizatori",
        data: newUtilizator
    })
    var utilizatori=[];
    $.get({
        url:"http://localhost:3000/utilizatori"
    })
    .done((res)=>{
        utilizatori=res;
    })
     .done((res) => {
        localStorage.setItem("user", res.id);
    })
    .then((res)=>{
        console.log(utilizatori);
    })
   
}