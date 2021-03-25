import { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import StaffList from './components/StaffList'
import AddStaff from './components/AddStaff'

function App() {
  const [staffMembers, setStaff ] = useState([
      
    {   
        id: 1,
        name: "Joe O'Reilly",
        title: 'React Developer',
        dob: "22-10-1992",
        salary: 25000,
        open: false
    },
    {
        id: 2,
        name: "Chloe Stanley",
        title: 'UX Designer',
        dob: "2-7-1993",
        salary: 28000,
        open: false
      
    }

])

// Add Task

const addStaff = (staff) => {
  const id = Math.floor(Math.random() * 10000 ) + 1
  const newStaff = {id, ...staff}
  setStaff([...staffMembers, newStaff])
}

// Delete Task 

const deleteStaff = (id) => {
  setStaff(staffMembers.filter((staff) => staff.id !== id)) // filters through the staffMembers array, then returns out any id's that aren't equal to the id passed in. 
}

// Toggle more info

const displayInfo = (id) => {
  setStaff(staffMembers.map((staff) => staff.id === id ? {...staff, open: !staff.open} : staff)) // id of the component is passed into the function. Then the staffMembers data is mapped through, if the staff.id (specific to the actually staffItem) is the same as the ID we are mapping through. We want to then use the spread operator to copy the existing props, apart from open, which will be set to the opposite of whatever it's already set to. 
}

staffMembers.defaultProps = {
  open: false
}

staffMembers.PropTypes = {
  name: PropTypes.string
}

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBar />
      </header>
      <div className='container'>
      <StaffList staffMembers={staffMembers} onDelete={deleteStaff} onDisplay={displayInfo}/>
      <div>
        <div>
        <h2>Add Staff</h2>
        <AddStaff onAdd={addStaff}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
