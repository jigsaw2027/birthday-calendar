let people = []

var rIndex,table = document.getElementById("show"),index;
var nam=document.getElementById("fname").value+" ";
nam+=document.getElementById("lname").value;

function checkEmpty(){
    let isEmpty=false;
    var fname= document.getElementById('fname').value,
    lname= document.getElementById('lname').value,
    date= document.getElementById("date").value,
    gender=document.getElementById("male").value,
    password=document.getElementById("password").value,
    wishlist=document.getElementById("wishlist").value;
    if(fname===""){
        isEmpty=false;
    }else if(lname===""){
        alert("last Name must be filled");
        isEmpty=true;
    }else if(date===""){
        alert("date is empty");
        isEmpty=true;
    }else if(gender===null){
        alert("select a gender");
        isEmpty=true;
    }else if(password===""){
        alert("Enter Password");
        isEmpty=true;
    }else if(wishlist===""){
        alert("wishlist is empty");
        isEmpty=true;
    }
    return isEmpty;
}

function sortingName (table , column, asc =true) {
                const dirModifier= asc? 1:-1;
                const tBody= table.tBodies[0];
                const rows= Array.from(tBody.querySelectorAll("tr"));


                //Sort each row
                const sortedRows= rows.sort((a,b)=>{
                    const aColText=a.querySelector(`td:nth-child(${column +1})`).textContext;
                    const bColText=b.querySelector(`td:nth-child(${column +1})`).textContext;

                    return aColText>bColText? (1*dirModifier):(-1*dirModifier)
                });
                while(tBody.firstChild){
                    tBody.removeChild(tBody.firstChild);
                }
                tBody.append(...sortedRows);


                table.querySelectorAll("th").forEach(th=>th.classList.remove("th-sort-asc","th-sort-desc")) 
                 table.querySelector(`th-nth-child(${column +1})`).classList.toggle("th-sort-asc",asc);
                 table.querySelector(`th-nth-child(${column +1})`).classList.toggle("th-sort-desc",!asc);   
                };
            document.querySelectorAll(".show thead").forEach(headerCell=>{
                headerCell.addEventListener("click",()=>{
                    const tableElement=headerCell.parentElement.parentElement.parentElement;
                    const headerIndex =Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
                    const currentAscending =headerCell.classList.contains("th-sort-asc");

                    sortingName(tableElement,headerIndex, !currentAscending);
                });
            });

            function searchName(){
                let input,filter,table,tr,td,i,textValue;
            input=document.getElementById("search1");
            filter=input.value.toUpperCase();
            table=document.getElementById("show");
            tr=table.getElementsByTagName("tr");

            for(let i=0;i<tr.length;i++){
                td=tr[i].getElementsByTagName("td")[0];

                if(td){
                    textValue=td.textContext || td.innerText;
                    if(textValue.toUpperCase().indexOf(filter)>-1){
                        tr[i].style.display="";
                    } else{
                        tr[i].style.display= "none";
                    }
                }
            }
         }

                        function addTableRow(){
                            if(!checkEmpty()){

                            var table =document.getElementById("show");
                            newRow=table.insertRow(table.length);
                            cell1 = newRow.insertCell(0),
                            cell2 = newRow.insertCell(1),
                            cell3 = newRow.insertCell(2);
                            cell4=newRow.insertCell(3);
                            cell5=newRow.insertCell(4);
                            var nam=document.getElementById("fname").value+" ";
                            nam+=document.getElementById("lname").value;
                            date= document.getElementById("date").value;
                            gender= document.getElementById("male").checked;
                            gender?"male":"female";
                            ed=document.getElementById("edit").value;
                            ed="<a type='submit' id='edit' onclick= 'editTableRow(); myFunction();'>Edit</a>"
                            dele=document.getElementById("delete").value;
                            dele="<i onClick=deleteSelRow() class='fa' style='font-size:24px color:#000'>&#xf014;</i>";
                            cell1.innerHTML = nam;
                            cell2.innerHTML= date;
                            cell3.innerHTML = gender;
                            cell4.innerHTML=ed;
                            cell5.innerHTML=dele;
                            }

                            people.push(
                                {
                                    firstName: document.getElementById("fname").value,
                                    lastName: document.getElementById("lname").value,
                                    date: document.getElementById("date").value,
                                    gender: document.getElementById("male").value,
                                    wishList: document.getElementById("wishlist").value.split(',')
                                }
                            )

                            console.log(people);

                        }

                          function rowToInput(){
                var rIndex,table=document.getElementById("show");
                for (var i=1;i<table.rows.length;i++){
                    table.rows[i].onClick=function(){
                        rIndex = this.rowIndex;
                      document.getElementById("fname")=this.cells[0].innerHTML;
                      document.getElementById("lname")=this.cells[0].innerHTML
                       document.getElementById("date")=this.cells[1].innerHTML;
                       document.getElementById("male")=this.cells[2].innerHTML;
                       document.getElementById("edit")=this.cells[3].innerHTML;
                       document.getElementById("delete")=this.cells[4].innerHTML;
                    };
                }
            }
            
            rowToInput();

            function editTableRow(){
                var nam= document.getElementById('fname').value;
                var date= document.getElementById("date").value,
                gender=document.getElementById("male").value;
                
                ed=document.getElementById("edit").value;
                del=document.getElementById("delete").value;
                table.rows[rIndex].cells[0].innerHTML = nam;
                table.rows[rIndex].cells[1].innerHTML = date;
                table.rows[rIndex].cells[2].innerHTML = gender;
                table.rows[rIndex].cells[3].innerHTML=ed;
                table.rows[rIndex].cells[4].innerHTML=del;

            }
            

            function deleteSelRow(){
                
                for (var i=1;i<table.rows.length;i++){
        table.rows[i].cells[4].onclick=function(){
            rIndex=this.parentElement.rowIndex;
            table.deleteRow(rIndex);
            console.log(rIndex);
        };
        
                
  
    const c=confirm("Delete Entry?");
      
    if(c===true){
       password=prompt("Enter Password");
   if(password===true && password!==null){
       return deleteSelRow;
   }else if(password===false){
       return false;
   }
   
}
    return false;
    
            
}
            }
           

            function myFunction(){
                document.getElementById("tab").style.display="";
            document.getElementById("pls").style.display="none";
            }
            function yourFunction(){
                document.getElementById("pls").style.display="";
                document.getElementById("tab").style.display="none";
            }
            function nameFunc(){
                document.getElementById("wish").style.display="inline";
                document.getElementById("show").style.display="none";
                console.log("wishlist");
            }
            function wishFunc(){
                document.getElementById("show").style.display="";
                document.getElementById("wish").style.display="none";
             console.log("take me home")
            }

            function addLi(){
                var nam=document.getElementById("fname");
                nam=`<h2 class="wishtit"> ${nam}'s<br>birthday Wishlist</h2>`
                var wishlist=document.getElementById("wishlist").value,
                listNode= document.getElementById("list"),
                liNode=document.createElement("LI"),
                wishNode=document.createTextNode(wishlist);

                liNode.appendChild(wishNode);
                listNode.appendChild(liNode);

            }
