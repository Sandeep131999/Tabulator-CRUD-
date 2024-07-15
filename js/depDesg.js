var enableDepartDetailsIcons = true;
var disableDepartDetailsIcons = true;

function departHeaderDetailsIconFormatter(cell) {
    // create edit icon
    var addIcon = document.createElement("span");
    addIcon.innerHTML = "<i class='fa-solid fa-add'></i>";
    addIcon.classList.add("btn-add");
    addIcon.style.marginTop = "5px";
    addIcon.style.color="blue";
    addIcon.addEventListener("click", function () {
        toggleEditMode(cell, iconContainer);
        enableDepartDetailsIcons=false;
        disableDepartDetailsIcons=false;
        table.addRow({}, true);
    });

    var delIcon = document.createElement("span");
    delIcon.style.marginLeft = "25px";
    delIcon.classList.add("btn-del");
    delIcon.addEventListener("click", function () {
        toggleEditMode(cell, iconContainer);
    });
    // add icons to a container
    var iconContainer = document.createElement("span");
    iconContainer.appendChild(addIcon);
    iconContainer.appendChild(delIcon);
    return iconContainer;
    

    function toggleEditMode(cell, container) {
        // Clear the container
        container.innerHTML = "";

        // Create Save button
        var saveIcons = document.createElement("span");
        saveIcons.innerHTML = "<i class='fas fa-save'></i>";
        saveIcons.classList.add("btn-save");
        saveIcons.style.color="blue";
        saveIcons.addEventListener("click", function () {
   
        });

        //create cancel button
        var cancelIcons = document.createElement("span");
        cancelIcons.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        cancelIcons.style.marginLeft = "25px";
        cancelIcons.classList.add("btn-cancel");
        cancelIcons.style.color="red";
        cancelIcons.addEventListener("click", function (event, rows) {
            event.preventDefault();
            event.stopPropagation();
            var firstRow = table.getRows()[0]; // Get the first row object
            table.deleteRow(firstRow);
            enableDepartDetailsIcons=true;
            toggleViewMode(cell, container);
        });

        // Append Save and Cancel buttons to the container
        container.appendChild(saveIcons);
        container.appendChild(cancelIcons);
    }

    //after the save and cancel function worked return back to edit and delete
    function toggleViewMode(cell, container) {
        // You can implement logic to switch back to view mode
        // For example, you can recreate the edit and delete icons
        container.innerHTML = "";
        container.appendChild(addIcon);
        container.appendChild(delIcon);
    }
}

//*********************************************************************
function departDetailsIconFormatter(cell) {
    if (!enableDepartDetailsIcons) return;
    // create edit icon
    var editIcon = document.createElement("span");
    editIcon.innerHTML = "<i class='fa-solid fa-pen'></i>";
    // editIcon.classList.add("btn-edit");
    editIcon.style.color="blue";
    if (!disableDepartDetailsIcons) {
        editIcon.classList.add("disabled-button");
        editIcon.style.pointerEvents = "none"; // Disable interaction
    }
    editIcon.addEventListener("click", function () {
        toggleEditMode(cell, iconContainer);
    });

    // create delete icon
    var delIcon = document.createElement("span");
    delIcon.innerHTML = "<i class='fas fa-trash-alt'></i>";
    delIcon.style.marginLeft = "25px";
    // delIcon.classList.add("btn-del");
    if (!disableDepartDetailsIcons) {
        delIcon.classList.replace("disabled-button");
        delIcon.style.pointerEvents = "none"; // Disable interaction
    }
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


//**************************************************************************** */
var table = new Tabulator("#tabulatorDepartment", {
    layout: "fitColumns",
    pagination: "local",
    paginationSize: 8,
    paginationSizeSelector: [8, 10, 20, 50],
    tooltipsHeader: false,
    data: [
        { id: "001", name: "Human resource development"},
        { id: "002", name: "Quality control",editor:true},
    ],
    columns: [
        { 
            title: "Department Id", 
            field: "id"
        },
        { 
            title: "Department Name", 
            field: "name",
            editor:"input"
        },
        {
            field: "description",
            title:"CRUD",
            hozAlign:"center",
            headerFilter:departHeaderDetailsIconFormatter,
            formatter:departDetailsIconFormatter 
        },
    ],
});



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
        { title: "DesgId", field: "desg_Id", sorter: "string"},
        { title: "DesgName", field:"desg_Name", sorter: "string",editor:"input"}, 
        {title: "CRUD Operations",hozAlign:"center",formatter: designationDetailsIconFormatter},
    ],
});

