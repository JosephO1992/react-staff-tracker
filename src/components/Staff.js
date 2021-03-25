import {FaTimes} from 'react-icons/fa'



const Staff = ({staff, onDelete, onDisplay}) => {
    return (
        <div className='staff-item'>
            <h3>{staff.name} <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(staff.id)}/> </h3>

         
            
            <h3>{staff.title} <button onClick={() => onDisplay(staff.id)}>{`${staff.open ? 'Less info' : 'More info' }`}</button> </h3>

            <div className={`${staff.open ? ' ' :  'more-info'}`}>
            <p>{staff.dob}</p>
            <p>${staff.salary}</p>
            </div> 
        </div>
    )
}

export default Staff
