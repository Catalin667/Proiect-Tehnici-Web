 window.onload=function()
{      
      document.getElementById("Insc").style.display="none";
      document.getElementById("sfarsit").style.display="none";
    
      setTimeout(function() {
        document.getElementById("Insc").style.display="block";
        }, 1000)

      document.getElementById("Canto").style.display="none";
      document.getElementById("Instrumente").style.display="none";
      document.getElementById("Ipopulare").style.display="none";
      document.getElementById("Teatru").style.display="none";
      document.getElementById("Avizuale").style.display="none";
      document.getElementById("Aplastice").style.display="none";
    
  document.getElementById("Specializare").onchange = afisare;
  function afisare()
  {
    var el = this.value
    if(el=="-1")
    {
      document.getElementById("Canto").style.display="none";
      document.getElementById("Instrumente").style.display="none";
      document.getElementById("Ipopulare").style.display="none";
      document.getElementById("Teatru").style.display="none";
      document.getElementById("Avizuale").style.display="none";
      document.getElementById("Aplastice").style.display="none";
    }
    if(el=="Canto")
    {
      document.getElementById("Canto").style.display="block";
      document.getElementById("Instrumente").style.display="none";
      document.getElementById("Ipopulare").style.display="none";
      document.getElementById("Teatru").style.display="none";
      document.getElementById("Avizuale").style.display="none";
      document.getElementById("Aplastice").style.display="none";
    }
    
    if(el=="Instrumente")
    {
      document.getElementById("Canto").style.display="none";
      document.getElementById("Instrumente").style.display="block";
      document.getElementById("Ipopulare").style.display="none";
      document.getElementById("Teatru").style.display="none";
      document.getElementById("Avizuale").style.display="none";
      document.getElementById("Aplastice").style.display="none";
    }
    
    if(el=="Ipopulare")
    {    
        document.getElementById("Canto").style.display="none";
        document.getElementById("Instrumente").style.display="none";
        document.getElementById("Ipopulare").style.display="block";
        document.getElementById("Teatru").style.display="none";
        document.getElementById("Avizuale").style.display="none";
        document.getElementById("Aplastice").style.display="none";
    }
    
    if(el=="Teatru")
    {
      document.getElementById("Canto").style.display="none";
      document.getElementById("Instrumente").style.display="none";
      document.getElementById("Ipopulare").style.display="none";
      document.getElementById("Teatru").style.display="block";
      document.getElementById("Avizuale").style.display="none";
      document.getElementById("Aplastice").style.display="none";
    }
    
    if(el=="Avizuale")
    {
      document.getElementById("Canto").style.display="none";
      document.getElementById("Instrumente").style.display="none";
      document.getElementById("Ipopulare").style.display="none";
      document.getElementById("Teatru").style.display="none";
      document.getElementById("Avizuale").style.display="block";
      document.getElementById("Aplastice").style.display="none";
    }
    
    if(el=="Aplastice")
    {
      document.getElementById("Canto").style.display="none";
      document.getElementById("Instrumente").style.display="none";
      document.getElementById("Ipopulare").style.display="none";
      document.getElementById("Teatru").style.display="none";
      document.getElementById("Avizuale").style.display="none";
      document.getElementById("Aplastice").style.display="block";
    }
     
      
  }
  var proprietatiCSS=document.getElementById("Insc");
  var prop = getComputedStyle(proprietatiCSS, null).getPropertyValue("border-color");
  console.log("GetComputedStyle(Pentru formular): " + prop);

}
function majuscule(){
  var rasp = document.getElementById("raspuns");
  rasp.value = rasp.value.toUpperCase();
}
 function validare()
 {
    if( document.Inscrierestudenti.nume.value == "" )
   {
     alert( "Adauga nume!" );
     document.getElementById("nume").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.nume.focus();
     return false;
   }
   else{
    var regnume = /^[A-Z][a-zA-Z]*$/ ;
    var nume =document.getElementById("nume").value;
    if(!regnume.test(nume)){
      alert("Nume invalid.");
      document.getElementById("nume").style.backgroundColor ="DodgerBlue";
      document.Inscrierestudenti.nume.focus() ;
      return false;}
      document.getElementById("nume").style.backgroundColor ="white";
   } 
   localStorage.setItem("nume",document.Inscrierestudenti.nume.value);
   ///const nume  = getElementById("nume").value;
  
   if( document.Inscrierestudenti.prenume.value == "")
   {
     
     alert( "Adauga prenume!" );
     document.getElementById("prenume").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.prenume.focus() ;
     return false;
   }
   else{
    var regprenume = /^[A-Z][a-zA-Z- ]*$/ ;
    var prenume =document.getElementById("prenume").value;
    if(!regprenume.test(prenume)){
      alert("Prenume invalid.");
      document.getElementById("prenume").style.backgroundColor ="DodgerBlue";
      document.Inscrierestudenti.prenume.focus() ;
      return false;}
      document.getElementById("prenume").style.backgroundColor ="white";
   }
   
   localStorage.setItem("prenume",document.Inscrierestudenti.prenume.value);
   ///const prenume  = getElementById("prenume").value;
  
   if( document.Inscrierestudenti.prenumet.value == "" )
   {
     
     alert("Adauga prenumele tatalui!" );
     document.getElementById("prenumet").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.prenumet.focus() ;
     return false;
   }
   else{
    var regprenumet = /^[A-Z][a-zA-Z-]*$/ ;
    var prenumet =document.getElementById("prenumet").value;
    if(!regprenumet.test(prenumet)){
      alert("Prenumele tatalui este invalid.");
      document.getElementById("prenumet").style.backgroundColor ="DodgerBlue";
      document.Inscrierestudenti.prenumet.focus() ;
      return false;}
      document.getElementById("prenumet").style.backgroundColor ="white";
   }
   localStorage.setItem("prenumet",document.Inscrierestudenti.prenumet.value);
   ///const  prenumet = getElementById("prenumet").value;
 
   if( document.Inscrierestudenti.prenumem.value == "" )
   {
 
     alert( "Adauga prenumele mamei!" );
     document.getElementById("prenumem").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.prenumem.focus() ;
     return false;
   }
   else{
    var regprenumem = /^[A-Z][a-zA-Z-]*$/ ;
    var prenumem =document.getElementById("prenumem").value;
    if(!regprenumem.test(prenumem)){
      alert("Prenumele mamei este invalid.");
      document.getElementById("prenumem").style.backgroundColor ="DodgerBlue";
      document.Inscrierestudenti.prenumem.focus() ;
      return false;}
      document.getElementById("prenumem").style.backgroundColor ="white";
   }
    
   localStorage.setItem("prenumem",document.Inscrierestudenti.prenumem.value);
   ///const  prenumem = getElementById("prenumem").value;

  
   if( document.Inscrierestudenti.adresa.value == "" )
   {
 
     alert( "Adauga adresa!" );
     document.getElementById("adresa").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.adresa.focus() ;
     return false;
   }
   else
   {document.getElementById("adresa").style.backgroundColor ="white";}

   localStorage.setItem("adresa",document.Inscrierestudenti.adresa.value);
   ///const  adresa = getElementById("adresa").value;

   if( document.Inscrierestudenti.oras.value == "" )
   {
 
     alert( "Adauga oras!" );
     document.getElementById("oras").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.oras.focus() ;
     return false;
   }
   else{
    var regoras =/^[A-Z][a-zA-Z-]*$/;
    var oras =document.getElementById("oras").value;
    if(!regoras.test(oras)){
      alert("Orasul este invalid.");
      document.getElementById("oras").style.backgroundColor ="DodgerBlue";
      document.Inscrierestudenti.oras.focus() ;
      return false;}
      document.getElementById("oras").style.backgroundColor ="white";
   }
   
   localStorage.setItem("oras",document.Inscrierestudenti.oras.value);
   ///const  oras = getElementById("oras").value;


   if( document.Inscrierestudenti.judet.value == "" )
   {
   
     alert( "Adauga judet!" ); 
     document.getElementById("judet").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.judet.focus() ;
     return false;
   }
   else{
    var regjudet =/^[A-Z][a-zA-Z-]*$/;
    var judet =document.getElementById("judet").value;
  
    if(!regjudet.test(judet) || (judet!="Alba"&&judet!="Arad"&&judet!="Arges"&&judet!="Bacau"&&judet!="Bihor"&&judet!="Bistrita-Nasaud"&&judet!="Botosani"&&judet!="Brasov"&&judet!="Bucuresti"&&
    judet!="Buzau"&&judet!="Caras-Severin"&&judet!="Calarasi"&&judet!="Cluj"&&judet!="Constanta"&&judet!="Covasna"&&judet!="Dambovita"&&judet!="Dolj"&&judet!="Galati"&&judet!="Giurgiu"&&judet!="Gorj"&&judet!="Harghita"&&judet!="Hunedoara"&&judet!="Ialomita"&&judet!="Iasi"&&
    judet!="Ilfov"&&judet!="Maramures"&&judet!="Mehedinti"&&judet!="Mures"&&judet!="Neamt"&&judet!="Olt"&&judet!="Prahova"&&judet!="Satu-Mare"&&judet!="Salaj"&&judet!="Sibiu"&&judet!="Suceava"&&judet!="Teleorman"&&judet!="Timis"&&judet!="Tulcea"&&judet!="Vaslui"&&
    judet!="Vrancea" )){
      alert("Judetul este invalid.");
      document.getElementById("judet").style.backgroundColor ="DodgerBlue";
      document.Inscrierestudenti.judet.focus() ;
      return false;}
      document.getElementById("judet").style.backgroundColor ="white";
   }
    
   localStorage.setItem("judet",document.Inscrierestudenti.judet.value);
   ///const  judet = getElementById("judet").value;

   
   if( document.Inscrierestudenti.email.value == "" )
   {
 
     alert( "Adauga email!" );
     document.getElementById("email").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.judet.focus() ;
     return false;
   }
   else{  
      var regemail= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var email =document.getElementById("email").value;
      if(!regemail.test(email)){
        alert("Email invalid.");
        document.getElementById("email").style.backgroundColor ="DodgerBlue";
        document.Inscrierestudenti.email.focus() ;
        return false;}
        document.getElementById("email").style.backgroundColor ="white";
   }
   
   localStorage.setItem("email",document.Inscrierestudenti.email.value);
   ///const email = getElementById("email").value;

   if( document.Inscrierestudenti.telefon.value == "" )
   {
 
     alert( "Adauga telefon!" );
     document.getElementById("telefon").style.backgroundColor ="DodgerBlue";
     document.Inscrierestudenti.telefon.focus() ;
     return false;
   }
   else{  
    var telefon =document.getElementById("telefon").value;
    var tf=telefon.toString();
    if(tf.length!=10) 
      {alert("Telefon invalid.");
      document.getElementById("telefon").style.backgroundColor ="DodgerBlue";
      document.Inscrierestudenti.telefon.focus() ;
      return false;}
      document.getElementById("telefon").style.backgroundColor ="white";
 }
   localStorage.setItem("telefon",document.Inscrierestudenti.telefon.value);
   ///const telefon = getElementById("telefon").value;
 
   if ( ( Inscrierestudenti.sex[0].checked == false ) && ( Inscrierestudenti.sex[1].checked == false ) )
   {
   alert ( "Alegeti sexul!");
   return false;
   }   
   localStorage.setItem("sex",document.Inscrierestudenti.sex.value);
   ///const sex = getElementById("sex").value;
  if(document.Inscrierestudenti.Domeniu.value=="-1")
  {
    alert("Alegeti un domeniu!");
    return false;
  }
  else
  {
    if(document.Inscrierestudenti.Domeniu.value=="Canto")
    {
      if ( ( Inscrierestudenti.muzica[0].checked == false ) && ( Inscrierestudenti.muzica[1].checked == false ) 
      && ( Inscrierestudenti.muzica[2].checked == false))
       {
        alert ( "Alegeti o specializare!");
        return false;
        }   
        localStorage.setItem("specializare",document.Inscrierestudenti.muzica.value); 
        ///const specializare = getElementById("specializare").value;
    }
    
    if(document.Inscrierestudenti.Domeniu.value=="Instrumente")
    {
      if ((Inscrierestudenti.muzica1[0].checked == false)&&( Inscrierestudenti.muzica1[1].checked == false) 
      &&(Inscrierestudenti.muzica1[2].checked == false)&&(Inscrierestudenti.muzica1[3].checked == false)  
      && (Inscrierestudenti.muzica1[4].checked == false)&&(Inscrierestudenti.muzica1[5].checked == false) 
      && ( Inscrierestudenti.muzica1[6].checked == false )&&(Inscrierestudenti.muzica1[7].checked == false)
      && (Inscrierestudenti.muzica1[8].checked == false)&&( Inscrierestudenti.muzica1[9].checked == false )
      && ( Inscrierestudenti.muzica1[10].checked == false)&&(Inscrierestudenti.muzica1[11].checked == false)
      && ( Inscrierestudenti.muzica1[12].checked == false)&&(Inscrierestudenti.muzica1[13].checked == false))
       {
        alert ( "Alegeti o specializare!");
        return false;
        }   
        localStorage.setItem("specializare",document.Inscrierestudenti.muzica1.value); 
        ///const specializare = getElementById("specializare").value;
    }
    
    if(document.Inscrierestudenti.Domeniu.value=="Ipopulare")
    {
      if (( Inscrierestudenti.muzica2[0].checked == false)&&(Inscrierestudenti.muzica2[1].checked == false) 
      &&(Inscrierestudenti.muzica2[2].checked == false)&&( Inscrierestudenti.muzica2[3].checked == false) 
      && (Inscrierestudenti.muzica2[4].checked == false)&&(Inscrierestudenti.muzica2[5].checked == false ) 
      && ( Inscrierestudenti.muzica2[6].checked == false )&&(Inscrierestudenti.muzica2[7].checked == false ) 
      && ( Inscrierestudenti.muzica2[8].checked == false )&&( Inscrierestudenti.muzica2[9].checked == false ) 
      && ( Inscrierestudenti.muzica2[10].checked == false ))
       {
        alert ( "Alegeti o specializare!");
        return false;
      }  
      localStorage.setItem("specializare",document.Inscrierestudenti.muzica2.value);  
      ///const specializare = getElementById("specializare").value;
    }
    if(document.Inscrierestudenti.Domeniu.value=="Teatru")
    {
      if ( ( Inscrierestudenti.teatru[0].checked == false ) && ( Inscrierestudenti.teatru[1].checked == false ) 
      && ( Inscrierestudenti.teatru[2].checked == false))
       {
        alert ( "Alegeti o specializare!");
        return false;
        }   
        localStorage.setItem("specializare",document.Inscrierestudenti.teatru.value); 
        ///const specializare = getElementById("specializare").value;
    }
    
    if(document.Inscrierestudenti.Domeniu.value=="Avizuale")
    {
      if ( ( Inscrierestudenti.artav[0].checked == false ) && ( Inscrierestudenti.artav[1].checked == false))
       {
        alert ( "Alegeti o specializare!");
        return false;
        }   
        localStorage.setItem("specializare",document.Inscrierestudenti.artav.value);  
        ///const specializare = getElementById("specializare").value;
    }
    
    if(document.Inscrierestudenti.Domeniu.value=="Aplastice")
    {
      if ( ( Inscrierestudenti.ap[0].checked == false ) && ( Inscrierestudenti.ap[1].checked == false ) 
      && ( Inscrierestudenti.ap[2].checked == false)&&( Inscrierestudenti.ap[3].checked == false ) 
      && ( Inscrierestudenti.ap[4].checked == false)&&(Inscrierestudenti.ap[5].checked == false)
      && ( Inscrierestudenti.ap[6].checked == false))
       {
        alert ( "Alegeti o specializare!");
        return false;
        }
        localStorage.setItem("specializare",document.Inscrierestudenti.ap.value);   
        ///const specializare = getElementById("specializare").value;
    }
  }
  localStorage.setItem("domeniu",document.Inscrierestudenti.Domeniu.value);
  ///const domeniu = getElementById("domeniu").value;
   var data_inscriere = new Date();
   var dd = String(data_inscriere.getDate()).padStart(2, '0');
   var mm = String(data_inscriere.getMonth() + 1).padStart(2, '0'); 
   var yyyy = data_inscriere.getFullYear();
   
   var hh = String(data_inscriere.getHours()).padStart(2, '0');
   var mm = String(data_inscriere.getMinutes()).padStart(2, '0');
   var data = mm + '/' + dd + '/' + yyyy + " Ora inscrierii: "+ hh + ":" +mm;
    console.log(data);
   localStorage.setItem("data",data);
   return true; 
 }
 
     setInterval(function() {    
       document.getElementById("tiberiu").src = "Tiberiu.jpg";
       document.getElementById("sfarsit").classList.toggle("sfarsitstyle");
       document.getElementById("sfarsit").style.display="block";
       document.getElementById("tiberiu").style.display="block";
      }, 8000)
      var interval = setInterval(intervalFunctionText, 9000);
      function intervalFunctionText() { 
        document.getElementById("tiberiu").src = "http://www.pressalert.ro/wp-content/uploads/2015/10/3.-tiberiu-brediceanu.jpg";
        document.getElementById("sfarsit").classList.remove("sfarsitstyle");
        document.getElementById("sfarsit").style.display="block"; 
        document.getElementById("tiberiu").style.display="block";
      }
     function target(event)
     {
       alert("Acest "+event.currentTarget.nodeName+" iti spune: "+"Bine ati venit pe site-ul nostru si nu uitati sa va inscrieti!!");
       event.stopPropagation();
     }
     function target1(event)
     {
       if(event.target.nodeName=="BUTTON")
       alert("Acest "+event.target.nodeName+" iti spune: "+"Multumim ca ati vizitat aceasta pagina si speram ca te-ai inscris!!");
       else
       alert("Acest "+event.target.nodeName+" iti spune: "+"Bine ati venit pe site-ul nostru si nu uitati sa va inscrieti!!");
     }

            student_inscris = {
              nume:localStorage.getItem("nume"),
              prenume:localStorage.getItem("prenume"),
              prenumet: localStorage.getItem("prenumet"),
              prenumem:localStorage.getItem("prenumem"),
              adresa:localStorage.getItem("adresa"),
              oras:localStorage.getItem("oras"),
              judet:localStorage.getItem("judet"),
              email:localStorage.getItem("email"),
              telefon:localStorage.getItem("telefon"),
              sex: localStorage.getItem("sex"),
              domeniu: localStorage.getItem("domeniu"),
              specializare:localStorage.getItem("specializare"),
              data_inscriere:localStorage.getItem("data")
            }
  /* 
     function afisare_student(){
      console.log(student_inscris);
      document.getElementById("date_inscr").style.display="block";
      var el = document.createElement("p");
      document.getElementById("div").innerHTML = " Datele dumneavoastra au fost inregistrate cu succes.<br>"+
        "Nume: "+ student_inscris.nume + "<br>" +"Preume: "+ student_inscris.prenume + "<br>" + "Preumele tatalui: "+student_inscris.prenumet+ "<br>" + "Preumele mamei: " +student_inscris.prenumem + "<br>" +"Adresa: " +
         student_inscris.adresa +  "<br>" + "Oras: "+ student_inscris.oras + "<br>" + "Judet: "+  student_inscris.judet + "<br>" +"Email: "+student_inscris.email + "<br>" + "Nr. telefon: "  +  student_inscris.telefon + "<br>" +
         "Sex: "+ student_inscris.sex + "<br>" + "Domeniu: "+ student_inscris.domeniu + "<br>" + "Specializare: "+ student_inscris.specializare + "<br>" + "Data inscrierii: "+  student_inscris.data_inscriere + "<br>" ;
      document.getElementById("date_inscr").appendChild(el);
     
       ///console.log(document.getElementById("date_inscr"));
      if( document.getElementById("date_inscr"))
      {
        var nr =  Math.floor((Math.random() * 13) + 1);
        //console.log(nr);
        var d = document.getElementById("date_inscr").children.length
        console.log(d)
        if(d<=nr)
        var string=document.getElementById("date_inscr").text;
        console.log(string[nr].text);
      }
}
 */
     function afisare_student(){
      document.getElementById("date_inscr").style.display="block";
      for (var key of Object.keys(student_inscris))
      {
        var paragraf = document.createElement("P");
        paragraf.innerHTML = key + ": " + student_inscris[key];
        document.getElementById("div").appendChild(paragraf);
        console.log(key + ": " + student_inscris[key]) 
      }
      var nr =  Math.floor((Math.random() * 13) + 1);
      console.log("Numarul random este: "+nr);
      var d = document.getElementById("div").children.length
      if(d!=0)
      {
        var string=document.getElementById("div");
        string.removeChild(string.childNodes[nr-1]);
      }
}      
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
function preia_informatii()
  {  var id = Math.floor((Math.random() * 100000) + 1);
    const newStudent = {
    nume:localStorage.getItem("nume"),
    prenume:localStorage.getItem("prenume"),
    prenumet: localStorage.getItem("prenumet"),
    prenumem:localStorage.getItem("prenumem"),
    adresa:localStorage.getItem("adresa"),
    oras:localStorage.getItem("oras"),
    judet:localStorage.getItem("judet"),
    email:localStorage.getItem("email"),
    telefon:localStorage.getItem("telefon"),
    sex: localStorage.getItem("sex"),
    domeniu: localStorage.getItem("domeniu"),
    specializare:localStorage.getItem("specializare"),
    data_inscriere:localStorage.getItem("data"),
    id:id
  }
    $.post({
      url:" http://localhost:3000/studenti",
      data: newStudent 
    })
    var studenti=[]
    $.get({
        url:"http://localhost:3000/studenti"
    })
    .done((res)=>{
      studenti=res;
    })
    .then(()=>{
        console.log(studenti);
    })
  }
  function update() {
    const nume=document.getElementById("nume").value;
    const prenume=document.getElementById("prenume").value;
    const prenumem=document.getElementById("prenumem").value;
    const prenumet=document.getElementById("prenumet").value;
    const adresa=document.getElementById("adresa").value;
    const oras=document.getElementById("oras").value;
    const judet=document.getElementById("judet").value;
    const email=document.getElementById("email").value;
    const telefon=document.getElementById("telefon").value;
    const sex=document.getElementById("sex").value;
    const domeniu=document.getElementById("program_studiu").value;
    const specializare=document.getElementById("specializare").value;
    
    const newStudent = {
      nume:nume,
      prenume:prenume,
      prenumet: prenumet,
      prenumem:prenumem,
      adresa:adresa,
      oras:oras,
      judet:judet,
      email:email,
      telefon:telefon,
      sex:sex,
      domeniu: domeniu,
      specializare:specializare
      
    }
    console.log(newStudent)
    var id = 57607;
    $.ajax({
        type: "PUT",
        url:"http://localhost:3000?id=" + id,
        data: newStudent 
    })
}
function deleteStudent() {
  var id = 57607;
  $.ajax({
      type: "DELETE",
      url:"http://localhost:3000?id=" + id
  })
}
function notFound() {
  $.ajax({
      type: "GET",
      url: "http://localhost:3000/inexistent",
      statusCode: {
          200: function() {
              console.log("Pagina a fost gasita cu succes")
          },
          404: function() {
              console.log("Not found!")
          }
      }
  })
} 
 


