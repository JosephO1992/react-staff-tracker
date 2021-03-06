import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StaffList from "./components/StaffList";
import AddStaff from "./components/AddStaff";
import Dashboard from "./components/Dashboard";


function App() {
	const [staffMembers, setStaff] = useState([]);
	const [search, setSearch] = useState('') // Getting search pushed up from SearchBar.js and put into a state variable.
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage] = useState(3)
  
  	const numOfStaff = staffMembers.length
	

	// Get staff

	useEffect(() => {
		const getStaff = async () => {
		
			const staffFromServer = await fetchStaff();

			setStaff(staffFromServer);
		
		};

		getStaff();
	}, []);

	// Fetch Staff

	const fetchStaff = async () => {
		const res = await fetch("http://localhost:5000/staff");
		const data = await res.json();

		return data;
	};

	// PAGINATION

	// Get current posts 
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = staffMembers.slice(indexOfFirstPost, indexOfLastPost)

	// paginate links

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	console.log(currentPage)

	// next / prev page

	 const nextPage = () => {
        if (currentPage < staffMembers.length)
        setCurrentPage(currentPage + 1) 
       
        console.log('clicked')
    }

    const prevPage = () => {
        if(currentPage > 1)
        setCurrentPage(currentPage - 1);
        console.log('clicked')
    };

	// Add Staff

	const addStaff = async (staff) => {
		const res = await fetch("http://localhost:5000/staff", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(staff),
		});

		const data = await res.json();

		setStaff([...staffMembers, data]);

		// const id = Math.floor(Math.random() * 10000 ) + 1
		// const newStaff = {id, ...staff}
		// setStaff([...staffMembers, newStaff])
	};

	// Delete Staff

	const deleteStaff = async (id) => {
		await fetch(`http://localhost:5000/staff/${id}`, {
			method: "DELETE",
		});

		setStaff(staffMembers.filter((staff) => staff.id !== id)); // filters through the staffMembers array, then returns out any id's that aren't equal to the id passed in.
	};

	// Toggle more info

	const displayInfo = (id) => {
		setStaff(
			staffMembers.map((staff) =>
				staff.id === id ? { ...staff, open: !staff.open } : staff
			)
		); // id of the component is passed into the function. Then the staffMembers data is mapped through, if the staff.id (specific to the actually staffItem) is the same as the ID we are mapping through. We want to then use the spread operator to copy the existing props, apart from open, which will be set to the opposite of whatever it's already set to.
	};

	// Search 

  // Need to use filter() to return the staffMembers array with the search input applied
  const onSearch = (searchInput) => {
    setSearch(searchInput)
  }
	

	staffMembers.defaultProps = {
		open: false,
	};

	staffMembers.PropTypes = {
		name: PropTypes.string,
		title: PropTypes.string,
		dob: PropTypes.string,
		salary: PropTypes.number,
	};

	// Dashboard component logic

	let salaries = staffMembers.map((staffMember) => {
		// maps through our staffMember array and returns just the salary into a new array salaries. Note: staffMember arg can be named anything.

		return staffMember.salary;
	});

	const salarySpend = salaries.reduce((acc, it) => acc + it, 0);

	// console.log(staffMembers.length);

	return (
		<div className="App">
			<div className="app-container">
				<header className="App-header">
					<Header />
					<SearchBar onSearch={onSearch} />
				</header>
				<div className="container">
					<StaffList
						staffMembers={currentPosts}
						onDelete={deleteStaff}
						onDisplay={displayInfo}
            			numOfStaff={numOfStaff}
            			search={search}
						paginateBar={staffMembers}
						postsPerPage={postsPerPage}
						paginate={paginate}
						prevPage={prevPage}
						nextPage={nextPage}
					/>
					<div>
						<div>
							<AddStaff onAdd={addStaff} />
						</div>
					</div>
				</div>
				<div className="dashboard">
					<Dashboard salarySpend={salarySpend} numOfStaff={numOfStaff} />
				</div>
			</div>
		</div>
	);
}

export default App;
