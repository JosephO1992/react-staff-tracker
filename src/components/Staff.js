import {FaTimes} from 'react-icons/fa'



const Staff = ({staff, onDelete, onDisplay}) => {
    return (
        <div className='staff-item'>
            <div className='container staff-display'>
            <h3>{staff.name}</h3> <FaTimes className='delete-button' style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(staff.id)}/>
            </div>
           

            <div className='container staff-display'>
            <h3>{staff.title}  </h3> <button className='info-button'onClick={() => onDisplay(staff.id)}>{`${staff.open ? 'Less info' : 'More info' }`}</button>

            </div>
            
           

            <div className={`${staff.open ? ' ' :  'more-info'}`}>
            <p>{staff.dob}</p>
            <p>${staff.salary}</p>
            </div> 
        </div>
    )
}

export default Staff
