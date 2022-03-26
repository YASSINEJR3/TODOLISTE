const str = document.querySelector('#basic-url');
const container=document.getElementById("myForm");
const span =document.getElementById('count-span');

document.getElementById("myBtn").addEventListener("click",()=>{
    if(str.value.trim()=="") 
    {
        alert("Please enter something");
        return;
    }
    

    //balises
    const deleteButton = document.createElement('button');
    const valideButton = document.createElement('button');
    const resetButton = document.createElement('button');
    const paragraph =document.createElement('p');
    ///*** 
    paragraph.innerText = str.value;
    paragraph.style.fontFamily="arial";
    paragraph.style.border="1px solid black";
    paragraph.style.maxWidth="590px"
    paragraph.style.overflowWrap ="break-word";
    paragraph.style.backgroundColor="lightblue";
    paragraph.className="parag";
    
    ///*** Buttons***
    //valide
    valideButton.className="btn btn-success";
    valideButton.innerText="Valider";
    //reset
    resetButton.className="btn btn-info";
    resetButton.innerText="Reset";
    //delete
    deleteButton.className="btn btn-danger";
    deleteButton.innerText="Supprimer";


    //Visibility
    valideButton.style.visibility ="hidden";
    deleteButton.style.visibility ="hidden";
    resetButton.style.visibility ="hidden";

    ///***
    paragraph.appendChild(valideButton);
    paragraph.appendChild(resetButton);
    paragraph.appendChild(deleteButton);
    
    container.appendChild(paragraph);
    ///span
        /// *** 
    if($('p').length>0)
        span.innerText="Number tasks is "+$('p').length;
    else 
        span.innerText="";
    //
    str.value="";

    //Comptage des paragraphes
    /*console.log("Number paragraphe is "+$('p').length);
    console.log("Number boxes is "+$('div').length);
    console.log("Number buttons is "+$('button').length);*/
    //
    paragraph.addEventListener("mouseover",()=>{
        valideButton.style.visibility ="visible";
        deleteButton.style.visibility ="visible";
        resetButton.style.visibility ="visible";

        valideButton.addEventListener("click",()=>{
        
            paragraph.style.background="green";
            paragraph.style.textDecoration="line-through";
    
        });
    
        deleteButton.addEventListener("click",()=>{
            
            
            container.removeChild(paragraph);
            ///span
            if($('p').length >0)
                span.innerText="Number tasks is "+$('p').length;
            else 
                span.innerText="";
    
        })
        resetButton.addEventListener("click",()=>{
            
            paragraph.style.textDecoration="none";
            paragraph.style.backgroundColor="lightblue";

    
        })
    })

    paragraph.addEventListener("mouseout",()=>{
        valideButton.style.visibility ="hidden";
        deleteButton.style.visibility ="hidden";
        resetButton.style.visibility ="hidden";

    })
    
    
})
