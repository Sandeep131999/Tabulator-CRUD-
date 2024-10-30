
//custom formatter for create icons in designation table
function designationDetailsIconFormatter(cell,formatterParams, onRendered) {
    // create edit icon
    var editIcon = document.createElement("span");
    editIcon.innerHTML = "<i class='fa-solid fa-pen'></i>";
    editIcon.classList.add("btn-edit");
    editIcon.style.color="blue";
    editIcon.addEventListener("click", function () {
        toggleEditMode(cell, iconContainer);
    });

    // create delete icon
    var delIcon = document.createElement("span");
    delIcon.innerHTML = "<i class='fas fa-trash-alt'></i>";
    delIcon.style.marginLeft = "25px";
    delIcon.classList.add("btn-del");
    delIcon.addEventListener("click", function () {
        alert("delete icon clicked");
    });

    // add icons to a container
    var iconContainer = document.createElement("span");
    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(delIcon);

    return iconContainer;

    function toggleEditMode(cell, container) {
        // Clear the container
        container.innerHTML = "";

        // Create Save button
        var saveIcon = document.createElement("span");
        saveIcon.innerHTML = "<i class='fas fa-save'></i>";
        saveIcon.classList.add("btn-save");
        saveIcon.style.color="blue";
        saveIcon.addEventListener("click", function () {
            var data1 = cell.getRow().getData().desg_Name;
            alert(data1);
            toggleViewMode(cell, container);
        });

        //create cancel button
        var cancelIcon = document.createElement("span");
        cancelIcon.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        cancelIcon.style.marginLeft = "25px";
        cancelIcon.classList.add("btn-cancel");
        cancelIcon.style.color="red";
        cancelIcon.addEventListener("click", function () {
            alert('cancel icon clicked');
            toggleViewMode(cell, container);
        });

        // Append Save and Cancel buttons to the container
        container.appendChild(saveIcon);
        container.appendChild(cancelIcon);
    }

    //after the save and cancel function worked return back to edit and delete
    function toggleViewMode(cell, container) {
        // You can implement logic to switch back to view mode
        // For example, you can recreate the edit and delete icons
        container.innerHTML = "";
        container.appendChild(editIcon);
        container.appendChild(delIcon);
    }
}


var tables = new Tabulator("#tabulatorDesignation", {
    layout: "fitColumns",
    pagination: "local",
    editor:"input",
    paginationSize: 8,
    paginationSizeSelector: [8, 10, 20, 50],
    tooltipsHeader: false,
    data: [
        { desg_Id: "001", desg_Name: "HR" },
        { desg_Id: "002", desg_Name: "Manager"},
        { desg_Id: "003", desg_Name: "Junior sofware engineer" },
        { desg_Id: "004", desg_Name: "Senior sofware engineer" },
    ],
    columns: [
        { 
            title: " Designation Id  <i class='fa-solid fa-user-tie'></i>", 
            field: "desg_Id", 
            sorter: "string"
        },
        { 
            title: "DesignationName", 
            field:"desg_Name", 
            sorter: "string",
            editor:"input"
        }, 
        {
            title: "CRUD Operations",
            hozAlign:"center",
            formatter: designationDetailsIconFormatter
        },
    ],
});

