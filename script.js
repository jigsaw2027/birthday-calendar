var rIndex,table = document.getElementById("show"),index;
var del= document.getElementById("del");
var name=document.getElementById("fname").value+" ";
                            name+=document.getElementById("lname").value;
                        function checkEmpty(){
                            let isEmpty=false;
                            var fname= document.getElementById('fname').value,
                lname= document.getElementById('lname').value,
                 date= document.getElementById("date").value,
                gender=document.getElementById("male").value,
                dele=document.getElementById("delete").value,
                ed=document.getElementById("edit").value,
                password=document.getElementById("password").value,
                wishlist=document.getElementById("wishlist").value;

               if(fname===""){
                alert("First Name must be filled");
                isEmpty=true;
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
               }return isEmpty;
                

                }

                        function addTableRow(){
                            if(!checkEmpty())

                            var table =document.getElementById("show");
                            newRow=table.insertRow(table.length);
                            cell1 = newRow.insertCell(0),
                            cell2 = newRow.insertCell(1),
                            cell3 = newRow.insertCell(2);
                            cell4=newRow.insertCell(3);
                            cell5=newRow.insertCell(4);
                            var name=document.getElementById("fname").value+" ";
                            name+=document.getElementById("lname").value;
                            date= document.getElementById("date").value;
                            gender= document.getElementById("male").value;
                            ed=document.getElementById("edit").value;
                            dele=document.getElementById("delete").value;

                            cell1.innerHTML = name;
                            cell2.innerHTML= date;
                            cell3.innerHTML = gender;
                            cell4.innerHTML=ed;
                            cell5.innerHTML=dele;
                           
                            rowToInput();
                            console.log(rowToInput());
                        }
                        addTableRow();
                          function rowToInput(){
                
                for (var i=1;i<table.rows.length;i++){
                    table.rows[i].onClick=function(){
                        rIndex = this.parentElement.rowIndex;
                      name=this.cell[0].innerHTML;
                       document.getElementById("date")=this.cell[1].innerHTML;
                       document.getElementById("male")=this.cell[2].innerHTML;
                    };
                }
            }
            rowToInput();

            function editTableRow(){
                var name= document.getElementById('fname').value;
                name+= document.getElementById('lname').value;
                var date= document.getElementById("date").value,
                gender=document.getElementById("male").value;
                table.rows[rIndex].cell1.innerHTML = name;
                table.rows[rIndex].cell2.innerHTML = date;
                table.rows[rIndex].cell3.innerHTML = gender;
            }
            editTableRow();

            function deleteSelRow(){
                
                for (var i=1;i<table.rows.length;i++){
        table.rows[i].cells[4].onclick=function(){
            rIndex=this.parentElement.rowIndex;
            table.deleteRow(rIndex);
            console.log(rIndex);
        };
        
    }
  

    
            
}
if(deleteSelRow()){
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
           

            function myFunction(){
                document.getElementById("tab").style.display="";
            document.getElementById("pls").style.display="none";
            }
            function yourFunction(){
                document.getElementById("pls").style.display="";
                document.getElementById("tab").style.display="none";
            }
