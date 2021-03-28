import Staff from './Staff'

const StaffList = ( {staffMembers, onDelete, onDisplay} ) => {

    return (
        <div>
            <h2> Your staff </h2>
            <div className="container-vertical staff-container">
            {staffMembers.map((staff, index) => (
            <Staff key={index} staff={staff} onDelete={onDelete} onDisplay={onDisplay} />))}
            </div>
            
        </div>
    )
}

export default StaffList