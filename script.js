let people = []

var rIndex,table = document.getElementById("show"),index;
var nam=document.getElementById("fname").value+" ";
nam+=document.getElementById("lname").value;

//hey i'm doing x HERE
function checkEmpty(){
    let isEmpty=false;
    var fname= document.getElementById('fname').value,
    lname= document.getElementById('lname').value,
    date= document.getElementById("date").value,
    gender=document.getElementById("male").value,
    password=document.getElementById("password").value,
    wishlist=document.getElementById("wishlist").value;
    // hey finished doing x here
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

// function sortingName(table, col, reverse) {
//     var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
//         tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
//         i;
//     reverse = -((+reverse) || -1);
//     tr = tr.sort(function (a, b) { // sort rows
//         return reverse // `-1 *` if want opposite order
//            (a.cells[col].textContent.trim() // using `.textContent.trim()` for test
//                 .localeCompare(b.cells[col].textContent.trim(), undefined,{numeric:true})
//                );
//     });
//     for(i = 0; i < tr.length; ++i) tb.appendChild(tr[i]); // append each row in order
// }
// function makeSortable(table) {
//     var th = table.tHead, i;
//     th && (th = th.rows[0]) && (th = th.cells);
//     if (th) i = th.length;
//     else return; // if no `<thead>` then do nothing
//     while (--i >= 0) (function (i) {
//         var dir = 1;
//         th[i].addEventListener('click', function () {sortingName(table, i, (dir = 1 - dir))});
//     }(i));
// }

// function makeAllSortable(parent) {
//     parent = parent || document.body;
//     var t = parent.getElementsByTagName('table'), i = t.length;
//     while (--i >= 0) makeSortable(t[i]);
// }


function table_sort() {
    const styleSheet = document.createElement('style')
    styleSheet.innerHTML = `
          .order-inactive span {
              visibility:hidden;
          }
          .order-inactive:hover span {
              visibility:visible;
          }
          .order-active span {
              visibility: visible;
          }
      `
    document.head.appendChild(styleSheet)
  
    document.querySelectorAll('th.order').forEach(th_elem => {
      let asc = true
      const span_elem = document.createElement('span')
      span_elem.style = "font-size:0.8rem; margin-left:0.5rem"
      span_elem.innerHTML = "▼"
      th_elem.appendChild(span_elem)
      th_elem.classList.add('order-inactive')
  
      const index = Array.from(th_elem.parentNode.children).indexOf(th_elem)
      th_elem.addEventListener('click', (e) => {
        document.querySelectorAll('th.order').forEach(elem => {
          elem.classList.remove('order-active')
          elem.classList.add('order-inactive')
        })
        th_elem.classList.remove('order-inactive')
        th_elem.classList.add('order-active')
  
        if (!asc) {
          th_elem.querySelector('span').innerHTML = '▲'
        } else {
          th_elem.querySelector('span').innerHTML = '▼'
        }
        const arr=Array.from(th_elem.closest("table").querySelectorAll('tbody tr'))
        arr.sort((a, b) =>{
          const a_val = a.children[index].innerText
          const b_val = b.children[index].innerText
          return (asc) ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val)
        })
        arr.forEach(elem => {
          th_elem.closest("table").querySelector("tbody").appendChild(elem)
        })
        asc = !asc
      })
    })
  }
  
  table_sort()

            function searchName(){
                let input,filter,table,tr,td,i,textValue;
            input=document.getElementById("search1");
            filter=input.value.toUpperCase();
            table=document.getElementById("show");
            tr=table.getElementsByTagName("tr");

            for( i=0;i<tr.length;i++){
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
                            let personGender=gender?"male":"female";
                            ed=document.getElementById("edit").value;
                            ed="<a type='submit' id='edit' onclick= 'editTableRow(); myFunction();'>Edit</a>"
                            dele="<a type='submit' id='delete' onClick='deleteSelRow()'><i class='fa' style='font-size:24px color:#000'>&#xf014;</i></a>";
                            dele=document.getElementById("delete").value;
                            
                            cell1.innerHTML = nam;
                            cell2.innerHTML= date;
                            cell3.innerHTML = personGender;
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
                        //    let lis= function() {
                        //         const reply = [this.nam, "'s birthday wishlist"].join(' ');
                            
                        //         console.log(reply);
                        //       }
                              
                        //       const obj = {
                        //         nam: document.getElementById("fname")
                        //       };
                              
                        //       lis.call(obj,this.people.wishlist());
                
                        cell1.onclick= function(){
                            nameFunc();
                        }
                        cell2.onclick= function(){
                            nameFunc();
                        }
                        cell3.onclick= function(){
                            nameFunc();
                        }
                            console.log(people);

                        }

                          function rowToInput(){
                var rIndex,table=document.getElementById("show");
                for (var i=1;i<table.rows.length;i++){
                    table.rows[i].onClick=function(){
                        rIndex = this.rowIndex;
                         nam=document.getElementById("fname").value+" ";
                        nam+=document.getElementById("lname").value;
                            nam=this.cells[0].innerHTML;
                      
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
                gender=document.getElementById("male").checked;
                
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
        table.rows[i].cells[4].onclick= function(){
            rIndex=this.parentElement.rowIndex;
            table.deleteRow(rIndex);
            console.log(rIndex);
        };
  
  
    
            
}
            }

            function checkDelete(){
                const c=confirm("Delete Entry?");
      
                if(c===true){
                   password=prompt("Enter Password");
               if(password===true && password!==null){
                   return deleteSelRow;
               }else if(password===null){
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
                nam=`<h2 class="wishtit"> ${nam}'s<br>birthday Wishlist</h2>`;
                var wishlist=document.getElementById("wishlist").value,
                listNode= document.getElementById("list"),
                liNode=document.createElement("LI"),
                wishNode=document.createTextNode(wishlist);

                // liNode.appendChild(wishNode);
                // listNode.appendChild(liNode);

            }
          