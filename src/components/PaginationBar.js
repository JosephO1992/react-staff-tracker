import {useState} from 'react'

const PaginationBar = ({numOfStaff}) => {

    // Pagination:

    // I need to know the number of items in the array (StaffMembers) this logic has been completed and passed down from App.js

    // Set how many people I will display by default

    const [staffPerPage, setStaffPerPage] = useState(3) // default of 3 per page
    const [currentPage, setCurrentPage] = useState(1) // default to current page being 1

    // Divide the number of people in the array by the default number to show, this will give me the number of pages

    const pagesToShow = Math.ceil(numOfStaff / staffPerPage) // We always need the number rounded up. This is will be along the bottom.

    // When the user clicks previous of next button, it will load the previous load of people.

    const nextPage = () => {
        if (currentPage < pagesToShow)
        setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if(currentPage > 1)
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="container pagination-bar">
            <button onClick={prevPage} >Previous</button>
            <p>{currentPage} of {pagesToShow} Pages</p>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}



export default PaginationBar
