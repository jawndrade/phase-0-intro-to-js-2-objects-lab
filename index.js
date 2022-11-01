// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "",
    };
   function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee, name: "Sam", streetAddress: "11 Broadway"};
    return newEmployee;
   }

   function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = "12 Broadway";
    return employee;
   }

   function deleteFromEmployeeByKey(employee, key) {
    const newEmployee2 = {...employee[key]};
    delete newEmployee2[key];
    return newEmployee2;
   }

   function destructivelyDeleteFromEmployeeByKey(employee, key) {
delete employee[key];
return employee;
   };
