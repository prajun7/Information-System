const btnSubmit = document.querySelector("#submit");

const inputName = document.querySelector('#name');
const inputAge = document.querySelector("#age");
const inputAddress = document.querySelector("#address");
const table = document.querySelector("#updatetable");

btnSubmit.addEventListener("click", (element) =>{

    element.preventDefault();

    let name = inputName.value;
    let age = inputAge.value;
    let address = inputAddress.value;    

    let template = 
            `<tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${address}</td>
                <td><input type = "button" class = "deleteBtn" value = "Delete"></td>
            </tr>`;
    
    table.innerHTML += template;

});

function deleteRow(e){
    if (!e.target.classList.contains("deleteBtn")){
        // console.log(e.target);
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();

}

table.addEventListener("click",deleteRow);