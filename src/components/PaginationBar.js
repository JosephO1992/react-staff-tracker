

const PaginationBar = ({numOfStaff}) => {

    // Pagination:

    // I need to know the number of items in the array (StaffMembers) this logic has been completed and passed down from App.js

    

    // Set how many people I will display by default

    const staffPerPage = 3

    // Divide the number of people in the array by the default number to show, this will give me the number of pages

    const pagesToShow = Math.ceil(numOfStaff / staffPerPage) // We always need the number rounded up.


    // When the user clicks previous of next button, it will load the previous load of people.

    return (
        <div className="container pagination-bar">
            <button>Previous</button>
            <p>{pagesToShow} Pages</p>
            <button>Next</button>
        </div>
    )
}



export default PaginationBar
