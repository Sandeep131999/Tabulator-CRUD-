/*var enableDepartDetailsIcons = true;

function departHeaderDetailsIconFormatter(cell) {
    //Add icon
    var addIcon = document.createElement("span");
    addIcon.innerHTML = "<i class='fa-solid fa-add'></i>";
    addIcon.classList.add("btn-add");
    addIcon.setAttribute("title", "Add new department");
    addIcon.style.color="blue";
    addIcon.addEventListener("click", function () {
        toggleEditMode(cell, iconContainer);
        enableDepartDetailsIcons=false;
        table.addRow({}, true);
        disableIcons();
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
        saveIcons.style.color="orange";
        saveIcons.setAttribute("title", "Save department");
        saveIcons.addEventListener("click", function () {
   
        });

        //create cancel button
        var cancelIcons = document.createElement("span");
        cancelIcons.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        cancelIcons.style.marginLeft = "25px";
        cancelIcons.classList.add("btn-cancel");
        cancelIcons.style.color="red";
        cancelIcons.setAttribute("title", "Cancel");
        cancelIcons.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            var firstRow = table.getRows()[0]; // Get the first row object
            table.deleteRow(firstRow);
            enableDepartDetailsIcons=true;
            enableIcons();
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
    editIcon.classList.add("btn-edit");
    editIcon.style.color="blue";
    editIcon.addEventListener("click", function () 
    {
        var rowPosition = cell.getRow().getPosition(true);
        var rowComponent = table.getRow(rowPosition);
        var rowData = rowComponent.getData();
        

        // Get the specific "Department Name" cell (by its field name)
        var nameCell = rowComponent.getCell("name");

        // Get the element of the "Department Name" cell
        var nameCellElement = nameCell.getElement(); 
        
        // Clear the current content of the Department Name cell
        nameCellElement.innerHTML = ''; 

        // Create an input element
        var inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = rowData['name'];

        // Append the input element to the Department Name cell
        nameCellElement.appendChild(inputElement);

        // Focus on the input element for immediate editing
        inputElement.focus();

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
            var rowPosition = cell.getRow().getPosition(true);
            var rowComponent = table.getRow(rowPosition);
            var rowData = rowComponent.getData();
            // Get the element of the "Department Name" cell 
            var nameCell = rowComponent.getCell("name");
             // Get the actual DOM element of the cell
            var nameCellElement = nameCell.getElement(); 
        
            // Restore the original content of the "Department Name" cell
            nameCellElement.innerHTML = rowData['name'];  
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
function disableIcons() {
    var editIcons = document.querySelectorAll('.btn-edit');
    var delIcons = document.querySelectorAll('.btn-del');
    
    editIcons.forEach(function (icon) {
        icon.classList.add("disabled-button");
        icon.style.pointerEvents = "none"; // Disable interaction
    });

    delIcons.forEach(function (icon) {
        icon.classList.add("disabled-button");
        icon.style.pointerEvents = "none"; // Disable interaction
    });
}

function enableIcons() {
    var editIcons = document.querySelectorAll('.btn-edit');
    var delIcons = document.querySelectorAll('.btn-del');
    
    editIcons.forEach(function (icon) {
        icon.classList.remove("disabled-button");
        icon.style.pointerEvents = "auto"; // Enable interaction
    });

    delIcons.forEach(function (icon) {
        icon.classList.remove("disabled-button");
        icon.style.pointerEvents = "auto"; // Enable interaction
    });
}
*/


//**************************************************************************** */
/*var table = new Tabulator("#tabulatorDepartment", {
    layout: "fitColumns",
    pagination: "local",
    paginationSize: 8,
    paginationSizeSelector: [8, 10, 20, 50],
    tooltipsHeader: false,
    data: [
        { id: "001", name: "Human resource development" },
        { id: "002", name: "Quality control" },
        { id: "003", name: "Software development" },
        { id: "004", name: "Project management" },
        { id: "005", name: "Marketing" },
        { id: "006", name: "Financial analysis" },
        { id: "007", name: "Customer service" },
        { id: "008", name: "Data science" },
        { id: "009", name: "Information technology" },
        { id: "010", name: "Sales" },
        { id: "011", name: "Research and development" },
        { id: "012", name: "Supply chain management" },
        { id: "013", name: "Business analysis" },
        { id: "014", name: "Product management" },
        { id: "015", name: "Training and development" },
        { id: "016", name: "Public relations" },
        { id: "017", name: "Legal affairs" },
        { id: "018", name: "User experience design" },
        { id: "019", name: "Content creation" },
        { id: "020", name: "Corporate strategy" }
    ],    
    columns: [
        { 
            title: "Department Id     <i class='fa-regular fa-building'></i>", 
            field: "id"
        },
        { 
            title: "Department Name", 
            field: "name",
            
        },
        {
            field: "description",
            title:"CRUD",
            hozAlign:"center",
            headerFilter:departHeaderDetailsIconFormatter,
            formatter:departDetailsIconFormatter 
        },
    ],
});*/

// Variable to control whether department detail icons are enabled
var enableDepartDetailsIcons = true;

///******Formatter for the header icons in the department table********

    function departHeaderDetailsIconFormatter(cell) {
        // Create an 'Add' icon for adding a new department
        var addIcon = document.createElement("span");
        addIcon.innerHTML = "<i class='fa-solid fa-add'></i>";
        addIcon.classList.add("btn-add");
        addIcon.setAttribute("title", "Add new department");
        // Set icon color
        addIcon.style.color = "blue"; 
        // Add click event to handle adding a new department
        addIcon.addEventListener("click", function () {
            toggleEditMode(cell, iconContainer);
            // Disable other icons when adding
            enableDepartDetailsIcons = false;
            // Add a new empty row
            table.addRow({}, true); 
            // Disable interaction with existing icons
            disableIcons(); 
        });

        //Unused code below starts 
        var delIcon = document.createElement("span");
        // Add spacing to the left of the delete icon
        delIcon.style.marginLeft = "25px"; 
        delIcon.classList.add("btn-del");
        delIcon.addEventListener("click", function () {
            // Switch to edit mode on delete click
            toggleEditMode(cell, iconContainer); 
        });
        //Unused code below ends 

        // Create a container to hold the icons
        var iconContainer = document.createElement("span");
        // Add the add icon to the container
        iconContainer.appendChild(addIcon); 
        // Add the delete icon to the container
        iconContainer.appendChild(delIcon);
        // Return the icon container
        return iconContainer; 

        // Function to toggle to edit mode to enable save and cancel button
        function toggleEditMode(cell, container) {
            // Clear the icon container
            container.innerHTML = "";

            // Create a 'Save' button for saving changes
            var saveIcons = document.createElement("span");
            saveIcons.innerHTML = "<i class='fas fa-save'></i>";
            saveIcons.classList.add("btn-save");
            // Set save icon color
            saveIcons.style.color = "orange"; 
            // Set title for the icon
            saveIcons.setAttribute("title", "Save department"); 
            saveIcons.addEventListener("click", function () {
            // Logic to save the department details can be added here
            });

            // Create a 'Cancel' button to cancel the operation
            var cancelIcons = document.createElement("span");
            cancelIcons.innerHTML = "<i class='fa-solid fa-xmark'></i>";
            // Add spacing to the left of the cancel icon
            cancelIcons.style.marginLeft = "25px"; 
            cancelIcons.classList.add("btn-cancel");
            // Set cancel icon color
            cancelIcons.style.color = "red"; 
            // Set title for the icon
            cancelIcons.setAttribute("title", "Cancel"); 
            cancelIcons.addEventListener("click", function (event) {
                // Prevent default behavior
                event.preventDefault(); 
                // Stop event from bubbling up
                event.stopPropagation(); 
                // Get the first row object
            var firstRow = table.getRows()[0];
                // Delete the first row
                table.deleteRow(firstRow);
                // Re-enable other icons
                enableDepartDetailsIcons = true; 
                // Enable icons again
                enableIcons();
                // Switch back to view mode
                toggleViewMode(cell, container); 
            });

            // Append the 'Save' and 'Cancel' buttons to the container
            container.appendChild(saveIcons);
            container.appendChild(cancelIcons);
        }

        // Function to switch back to view mode after editing
        function toggleViewMode(cell, container) {
            container.innerHTML = ""; // Clear the container
            container.appendChild(addIcon); // Re-add the add icon
            container.appendChild(delIcon); // Re-add the delete icon
        }
    }

//*****Function to format the icons for each department detail row****

    function departDetailsIconFormatter(cell) {
        // Do not render icons if they are disabled
        if (!enableDepartDetailsIcons) return; 

        // Create an 'Edit' icon for editing a department
        var editIcon = document.createElement("span");
        editIcon.innerHTML = "<i class='fa-solid fa-pen'></i>";
        editIcon.classList.add("btn-edit");
         // Set icon color
        editIcon.style.color = "blue";
        editIcon.addEventListener("click", function () {
            // Get row position
            var rowPosition = cell.getRow().getPosition(true); 
            // Get the row component
            var rowComponent = table.getRow(rowPosition); 
            // Get row data
            var rowData = rowComponent.getData();

            // Get the specific "Department Name" cell by its field name
            var nameCell = rowComponent.getCell("name");

            // Get the DOM element of the "Department Name" cell
            var nameCellElement = nameCell.getElement();

            // Clear the current content of the Department Name cell
            nameCellElement.innerHTML = '';

            // Create an input element for editing
            var inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.style.width = "265px";
            inputElement.style.border = "2px solid green";


            // Set input value to current department name
            inputElement.value = rowData['name']; 

            // Append the input element to the Department Name cell
            nameCellElement.appendChild(inputElement);

            // Focus on the input element for immediate editing
            inputElement.focus();

            // Switch to edit mode
            toggleEditMode(cell, iconContainer);
        });

        // Create a 'Delete' icon for deleting a department
        var delIcon = document.createElement("span");
        delIcon.innerHTML = "<i class='fas fa-trash-alt'></i>";
        // Add spacing to the left of the delete icon
        delIcon.style.marginLeft = "25px"; 
        delIcon.classList.add("btn-del");
        delIcon.addEventListener("click", function () {
            // Alert on delete click (to be replaced with actual logic)
            alert("delete icon clicked"); 
        });

        // Create a container for the icons
        var iconContainer = document.createElement("span");
        // Add the edit icon to the container
        iconContainer.appendChild(editIcon);
        // Add the delete icon to the container 
        iconContainer.appendChild(delIcon); 
        // Return the icon container
        return iconContainer; 

        // Function to toggle edit mode for editing the department
        function toggleEditMode(cell, container) {
            // Clear the container
            container.innerHTML = "";

            // Create a 'Save' button for saving changes
            var saveIcon = document.createElement("span");
            saveIcon.innerHTML = "<i class='fas fa-save'></i>";
            saveIcon.classList.add("btn-save");
            // Set save icon color
            saveIcon.style.color = "blue"; 
            saveIcon.addEventListener("click", function () {
                 // Switch back to view mode
                toggleViewMode(cell, container);
            });

            // Create a 'Cancel' button to cancel the operation
            var cancelIcon = document.createElement("span");
            cancelIcon.innerHTML = "<i class='fa-solid fa-xmark'></i>";
            cancelIcon.style.marginLeft = "25px"; // Add spacing to the left of the cancel icon
            cancelIcon.classList.add("btn-cancel");
            cancelIcon.style.color = "red"; // Set cancel icon color
            cancelIcon.addEventListener("click", function () {
                var rowPosition = cell.getRow().getPosition(true); // Get row position
                var rowComponent = table.getRow(rowPosition); // Get the row component
                var rowData = rowComponent.getData(); // Get row data
                var nameCell = rowComponent.getCell("name"); // Get the Department Name cell
                var nameCellElement = nameCell.getElement(); // Get the DOM element of the cell

                // Restore the original content of the "Department Name" cell
                nameCellElement.innerHTML = rowData['name'];  
                toggleViewMode(cell, container); // Switch back to view mode
            });

            // Append the 'Save' and 'Cancel' buttons to the container
            container.appendChild(saveIcon);
            container.appendChild(cancelIcon);
        }

        // Function to switch back to view mode after editing
        function toggleViewMode(cell, container) {
            container.innerHTML = ""; // Clear the container
            container.appendChild(editIcon); // Re-add the edit icon
            container.appendChild(delIcon); // Re-add the delete icon
        }
    }

// Function to disable interaction with edit and delete icons
function disableIcons() {
    var editIcons = document.querySelectorAll('.btn-edit');
    var delIcons = document.querySelectorAll('.btn-del');
    
    editIcons.forEach(function (icon) {
        icon.classList.add("disabled-button"); // Add disabled class
        icon.style.pointerEvents = "none"; // Disable interaction
    });

    delIcons.forEach(function (icon) {
        icon.classList.add("disabled-button"); // Add disabled class
        icon.style.pointerEvents = "none"; // Disable interaction
    });
}

// Function to enable interaction with edit and delete icons
function enableIcons() {
    var editIcons = document.querySelectorAll('.btn-edit');
    var delIcons = document.querySelectorAll('.btn-del');
    
    editIcons.forEach(function (icon) {
        icon.classList.remove("disabled-button"); // Remove disabled class
        icon.style.pointerEvents = "auto"; // Enable interaction
    });

    delIcons.forEach(function (icon) {
        icon.classList.remove("disabled-button"); // Remove disabled class
        icon.style.pointerEvents = "auto"; // Enable interaction
    });
}

// Initialization of the Tabulator table
var table = new Tabulator("#tabulatorDepartment", {
    layout: "fitColumns", // Fit columns to the table width
    pagination: "local", // Use local pagination
    paginationSize: 8, // Default number of rows per page
    paginationSizeSelector: [8, 10, 20, 50], // Options for pagination size
    tooltipsHeader: false, // Disable tooltips for headers
    data: [ // Sample data for the table
        { id: "001", name: "Human resource development" },
        { id: "002", name: "Quality control" },
        { id: "003", name: "Software development" },
        { id: "004", name: "Project management" },
        { id: "005", name: "Marketing" },
        { id: "006", name: "Financial analysis" },
        { id: "007", name: "Customer service" },
        { id: "008", name: "Data science" },
        { id: "009", name: "Information technology" },
        { id: "010", name: "Sales" },
        { id: "011", name: "Research and development" },
        { id: "012", name: "Supply chain management" },
        { id: "013", name: "Business analysis" },
        { id: "014", name: "Product management" },
        { id: "015", name: "Training and development" },
        { id: "016", name: "Public relations" },
        { id: "017", name: "Legal affairs" },
        { id: "018", name: "User experience design" },
        { id: "019", name: "Content creation" },
        { id: "020", name: "Corporate strategy" }
    ],    
    columns: [ // Define columns for the table
        { 
            title: "Department Id     <i class='fa-regular fa-building'></i>", 
            field: "id" // Field for department ID
        },
        { 
            title: "Department Name", 
            field: "name", // Field for department name
        },
        {
            // Field for CRUD actions
            field: "description", 
            title: "CRUD",
            // Horizontal alignment of the header
            hozAlign: "center", 
            // Formatter for header icons
            headerFilter: departHeaderDetailsIconFormatter, 
            // Formatter for row icons
            formatter: departDetailsIconFormatter 
        },
    ],
});


