import {useState} from 'react'



export const AddStaff = ({onAdd}) => {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [dob, setDob] = useState('')
    const [salary, setSalary] = useState('')
    const [open, setOpen] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!name) {
        alert('Please add their name')
        return
    } 

    onAdd({ name, title, dob, salary, open })

    setName('')
    setTitle('')
    setDob('')
    setSalary('')
    setOpen(false)
}

    return (
        <div>
            <h2>Add Staff</h2>
                <form className='staff-form' onSubmit={onSubmit}> 
            <div className='container' id="form-label">
                <label> Staff Name </label>
                <input type="text" placeholder='Add Staff Name' value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
            </div>
            <div className='container' id="form-label">
                <label> Job Title </label>
                <input type="text" placeholder='Add Job Title' value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />
            </div>
            <div className='container' id="form-label"> 
                <label> Date of Birth </label>
                <input type="text" placeholder='Add Date of Birth' value={dob} onChange={(e) => {
                    setDob(e.target.value)
                }}/>
            </div>
            <div className='container' id="form-label">
                <label> Salary </label>
                <input type="number" placeholder='Add Salary' value={salary} onChange={(e) => {
                    setSalary(e.target.value)
                }}/>
            </div>
            <input type="submit" value='Add Staff Member'/>
        </form>

        </div>
        
    )
}

export default AddStaff