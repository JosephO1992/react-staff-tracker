export const Dashboard = ({salarySpend, staffMembers}) => {
    return (
        <div>
            <h2>Overview</h2>
            <h4>More information about your employees</h4>
            <h3>Overall Salary Spend: ${salarySpend}</h3>
            <h3>Average Salary: ${(salarySpend / staffMembers.length).toFixed(2)}</h3>
        </div>
    )
}

export default Dashboard;
