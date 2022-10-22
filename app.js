/*
    To do:
        - make createTaskGroup only work when not running already
        - createGroup function
    
*/

var groupArray = [];
var currentNewDiv;
var addTaskGroupButton;
var index = 0; // uniquely assigns name to new group divs
var inputField; // reference to inputfield created in "addTaskGroup" function

function addTaskGroup()
{
    console.log("Creating Task Group");


    // make this only work
    // delete the addGroupTaskButton
    addTaskGroupButton = document.getElementById("addTaskGroupButton");
    addTaskGroupButton.remove();

    // create div with text - then can go onto greate the groups
    const newTaskDiv = document.getElementById("newTaskGroup");
    const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");
        currentNewDiv = newDiv;

    const span = document.createElement("span");
    const input = document.createElement("input");
        inputField = input;

    const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.style.width = "auto";
        cancelButton.onclick= cancel;


    const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.style.width = "auto";
        submitButton.onclick= createGroup;

    span.appendChild(input);
    
    newDiv.appendChild(span);
    newDiv.appendChild(submitButton);
    newDiv.appendChild(cancelButton);

    newTaskDiv.appendChild(newDiv);
}

function createGroup()
{
    if (inputField.value.length > 0)
    {
        currentNewDiv.remove();

        // create new task elements
        // new div for group
        // const newGroupDiv = document.createElement("div");
        //     newGroupDiv.setAttribute("id", "groupTask" + index);
        //     index++;
        
        // const title = document.createElement("h1");
        //     title.innerHTML = inputField.value; // see if this sets the value of the title

    
        // // 4 divs in square formation that each have h1 for their titles
        // const bigItems = document.createElement("div");
        //     bigItems.setAttribute("id", "bigItems_" + inputField.value);

        // const smallItems = document.createElement("div");
        //     smallItems.setAttribute("id", "smallItems_" + inputField.value);

        // const other = document.createElement("div");
        //     other.setAttribute("id", "other" + inputField.value);

        // const reminders = document.createElement("div");
        //     reminders.setAttribute("id", "reminders" + inputField.value);

        // events section



        // append all newly created divs to 


        console.log("Created Group Task");
        
        reCreateAddTaskGroupButton();
    }
}

function cancel()
{
    console.log("Cancel");
    currentNewDiv.remove();
    reCreateAddTaskGroupButton();
}

function reCreateAddTaskGroupButton()
{
    var buttonDiv = document.getElementById("addTaskGroup");
    buttonDiv.appendChild(addTaskGroupButton);
}


