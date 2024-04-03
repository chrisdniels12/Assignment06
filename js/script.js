// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector("form")  // select the EE form
let table = document.querySelector("table")  // select the table
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// function to update the count inside the display tag
function updateCount() {
    let outPutTag = document.querySelector("#empCount")
    outPutTag.textContent = `(${count})`
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = form.querySelector("#id").value;
    let name = form.querySelector("#name").value;
    let extension = form.querySelector("#extension").value;
    let email = form.querySelector("#email").value;
    let department = form.querySelector("#department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = table.insertRow(-1)
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell(0)
    let cellName = newRow.insertCell(1)
    let cellExtension = newRow.insertCell(2)
    let cellEmail = newRow.insertCell(3)
    let cellDepartment = newRow.insertCell(4)
    let cellDeleteBtn = newRow.insertCell(5)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id))
    cellName.appendChild(document.createTextNode(name))
    cellExtension.appendChild(document.createTextNode(extension))
    cellEmail.appendChild(document.createTextNode(email))
    cellDepartment.appendChild(document.createTextNode(department))

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.classList.add("btn", "btn-danger")   // add bootstrap styles
    deleteBtn.addEventListener("click", ()=>{
        let confirmDelete = confirm("Are you sure you want to delete this entry?");
        if (confirmDelete) {
            // remove the row, decrement the count, and update the output
        table.deleteRow(newRow.rowIndex)
        count--
        updateCount()
        }
    })
    cellDeleteBtn.appendChild(deleteBtn)  // append the delete btn to the cell

    // RESET THE FORM, clear its contents
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    form.querySelector("#id").focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++
    updateCount()

})

// DELETE EMPLOYEE