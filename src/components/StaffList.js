import Staff from './Staff'
import PaginationBar from './PaginationBar'

const StaffList = ( {staffMembers, onDelete, onDisplay, numOfStaff} ) => {
    
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