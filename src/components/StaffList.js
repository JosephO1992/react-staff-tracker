import Staff from './Staff'
import PaginationBar from './PaginationBar'


const StaffList = ( {staffMembers, onDelete, onDisplay, numOfStaff, search} ) => {
    

    
    let testArr = staffMembers;
    let newArr = testArr.filter(el => el.name.includes({search})) // Doesn't seem to work...
    let newNewArr = staffMembers.filter(el => el.salary > 25000) // Testing out filter function to get the hand of it. 
    console.log(newNewArr)
    console.log(newArr)
    console.log(search)

    // Things to follow up:

    // I can't seem to get the values from the staffMembers either from the testArr or directly. I tried to see the value of testArr[0].name
    // It does seem to work and then when the browser re renders it says name is not defined, even though it already printed to the console.
   
    return (

    
        
        <div>
            <h2> Your staff </h2>
            <div className="container-vertical staff-container">
            {staffMembers.map((staff, index) => (
            <Staff key={index} staff={staff} onDelete={onDelete} onDisplay={onDisplay} />))}
            <div >

            <PaginationBar numOfStaff={numOfStaff}/>
            </div>
            </div>
            
        </div>
    )
}

export default StaffList