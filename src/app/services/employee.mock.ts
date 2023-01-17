import Employee from "./employee.model";

const generateEmployee = (amount:number) => {
    let employeeList: Employee[] = []

    for(let i=1;i<=amount;i++){
        const newEmployee: Employee = {
            username: `employee${i}`,
            firstName: `Employee`,
            lastName: `${i}`,
            basicSalary: 1000000 * i,
            birthDate: new Date(),
            email: `employee${i}@mail.com`,
            group: `${((i-1)%3)+1}`, // Membuat group 1-3
            status: 'Active',
            description: new Date()
        }
        employeeList.push(newEmployee)
    }
    return employeeList
}

export default generateEmployee