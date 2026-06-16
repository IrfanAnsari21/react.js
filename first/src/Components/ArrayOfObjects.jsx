export default function ArrayOfObjects() {
    let data = [
        { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 200000, city: "Faridabad", state: "Haryana" },
        { id: 1002, name: "Sumit Jain", dsg: "Trainer", salary: 150000, city: "Noida", state: "UP" },
        { id: 1003, name: "Arun Singh", dsg: "Trainer", salary: 400000, city: "Noida", state: "UP" },
        { id: 1004, name: "Naman Mishra", dsg: "Trainer", salary: 50000, city: "Noida", state: "UP" },
        { id: 1005, name: "Tarun Yadav", dsg: "Accountant", salary: 100000, city: "Noida", state: "UP" },
        { id: 1006, name: "Nikhil Verma", dsg: "Manager", salary: 300000, city: "Kanpur", state: "UP" },
    ]
    return (
        <>
            <h1>Array of Objects Example</h1>
            <table border={2} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            // return <tr key={item.id}>
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.dsg}</td>
                                <td>{item.salary}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}