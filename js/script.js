// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let id = null
let fullName = null
let ext = null
let email = null
let department = null

let $ = (id) => document.getElementById(id)

let form = $('addForm')
let table = $('employees')

// ADD EMPLOYEE
form.addEventListener('submit', (event) => {
    // PREVENT FORM SUBMISSION
    event.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    id         = $('id').value
    fullName   = $('name').value
    ext        = $('extension').value
    email      = $('email').value
    department = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellFullName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDepartment = row.insertCell()
    let cellDeleteBtn = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id))
    cellFullName.appendChild(document.createTextNode(fullName))
    cellExt.appendChild(document.createTextNode(ext))
    cellEmail.appendChild(document.createTextNode(email))
    cellDepartment.appendChild(document.createTextNode(department))

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cellDeleteBtn.appendChild(deleteBtn)
    
    // RESET THE FORM
    $('id').value = ''
    $('name').value = ''
    $('extension').value = ''
    $('email').value = ''
    $('department').value = ''

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {

        if (confirm('Are you sure you want to delete this task?')) {
           let rowIndex = e.target.closest('tr').rowIndex;
            table.deleteRow(rowIndex);
        }
})