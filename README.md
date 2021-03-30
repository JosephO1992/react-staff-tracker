# About the App

This app will allow the user to add staff to a database and delete them. I want to get used to passing props and functions down components, working with click events etc. 

## How the app works

I've used the JSON Server extension to simulate having a database so I can make actual HTTP requests. 

## What I want to learn from building this

This will give me a good chance to understand how props work and moving them up and down the application. The funcitonality of the app requires me to pass props & functions up and down the parent and child components. 

## Things left to do

- [ ] Add more form validation
    - [x] The input for the dates have no set format, which I don't like. 
    - [ ] Add some functions to the input to make sure the text is all capitalise the same way.

- [ ] Add dashboarding functionality - I have left the bottom right portion of the screen empty for this.
    - [x] Current salary spend.
```
    // Dashboard component logic

let salaries = staffMembers.map((staffMember) => { // maps through our staffMember array and returns just the salary into a new array salaries. Note: staffMember arg can be named anything.

  return staffMember.salary
  
})

const salarySpend = salaries.reduce((acc, it) => acc + it, 0)

```

I created a variable for the salaries, I map through my staffMember logic array which returns an array with just the staffMember.salary.

I then use a reduce function to turn this into 1 single value. This salarySpend constant is then passed down as props into the child 'Dashboard' component. 


    - [x] Salary spend per capita.

I also passed down my staffMembers array, so I can run the .length method on this. This allows me to divide the total spend by the total amount of staff to give me an avg spend. Also applied a .toFixed method to manage the decimal places.

```

<h3>Overall Salary Spend: ${salarySpend}</h3>
            <h3>Average Salary: ${(salarySpend / staffMembers.length).toFixed(2)}</h3>
        </div>

```

    - [ ] Average age.

- [ ] Search functionality from the input bar
    - [x] Pass down function from the parent component to the SearchBar.js component.
    - [x] Get the input from the bar passed up to the app.js parent component.
    - [ ] Filter through the StaffMembers array and display these staff members when the user types and input.

- [ ] Add an edit function to the app.

- [ ] Pagination

Lots of things to keep me busy!

