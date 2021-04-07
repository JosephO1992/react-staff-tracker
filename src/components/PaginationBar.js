
const PaginationBar = ({ numOfStaff, postsPerPage, paginate, prevPage, nextPage}) => {

    const pageNumbers = [];
   
    // define how many pages there are to show...


    // We will do this by taking the staffMembers.length (numOfStaff), 
   
    // then math.ceil the number of posts per page

    // then loop through to put the amount of pages on the bar along the bottom. (should be <a> links.)
    
        for(let i = 1; i <= Math.ceil(numOfStaff / postsPerPage); i++) {
            pageNumbers.push(i)
        }

 

    // When the user clicks previous of next button, it will load the previous load of people.

    // const nextPage = () => {
    //     // if (currentPage < pagesToShow)
    //     // setCurrentPage(currentPage + 1) 
    //     // TODO - change this back to adjust the current page.
    //     console.log('clicked')
    // }

    // const prevPage = () => {
    //     // if(currentPage > 1)
    //     // setCurrentPage(currentPage - 1);
    //     console.log('clicked')
    // };

    return (
        <div className="container pagination-bar">
            <button onClick={prevPage} >Previous</button>
            
            <ul className="container">
               {pageNumbers.map(number => (
                   <li className='pagination-list-items' key={number}>
                       <a className='pagination-links' onClick={()=> paginate(number)} href="!#">{number}</a>
                   </li>
               ))}
            </ul>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}



export default PaginationBar
