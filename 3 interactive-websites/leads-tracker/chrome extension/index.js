/*Create two variables:
myLeads -> should be assigned to an empty array
inputEl -> should be assigned to the text input field*/
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
/*Grab the unordered list and store it in a const variable called ulEl*/
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)    
/*Save the myLeads array to localStorage,PS: remember JSON.stringify()*/
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    /*Create a variable, listItems, to hold all the HTML for the list items
    Assign it to an empty string to begin with*/
    let listItems = ""
    /*Log out the items in the myLeads array using a for loop*/ 
    for (let i = 0; i < leads.length; i++) 
     /*Add the item to the listItems variable instead of the ulEl.innerHTML*/{
        listItems += `
      
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    /*Render the listItems inside the unordered list using ulEl.innerHTML*/
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})


