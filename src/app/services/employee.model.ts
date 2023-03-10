//Data
// “employee”:{
//   “username”: string,
//   “firstName”:string,
//   “lastName”:string,
//   “email”:string,
//   “birthDate”:datetime,
//   “basicSalary”:double,
//   “status”:string,
//   “group”:string,
//   “description”:datetime
//   }

export default interface Employee {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}
