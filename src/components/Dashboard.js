export const Dashboard = ({salarySpend, numOfStaff}) => {
    return (
        <div>
            <h2>Overview</h2>
            <h4>More information about your employees</h4>
            <h3>Overall Salary Spend: ${salarySpend}</h3>
            <h3>Average Salary: ${(salarySpend / numOfStaff).toFixed(2)}</h3>
        </div>
    )
}

export default Dashboard;
