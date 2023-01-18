import Employee from './employee.model';

const generateEmployee = (amount: number) => {
  let employeeList: Employee[] = [];

  for (let i = 1; i <= amount; i++) {
    const newEmployee: Employee = {
      id: crypto.randomUUID(),
      username: `employee${i}`,
      firstName: `Employee`,
      lastName: `${i}`,
      basicSalary: 1000000 * i,
      birthDate: new Date().toLocaleDateString(),
      email: `employee${i}@mail.com`,
      group: `${((i - 1) % 3) + 1}`, // Membuat group 1-3
      status: 'AKTIF',
      description: new Date().toLocaleDateString(),
    };
    employeeList.push(newEmployee);
  }
  return employeeList;
};

export default generateEmployee;
