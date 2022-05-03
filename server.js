const { prompt } = require("inquirer");
const express = require ('express');
const mysql = require('mysql2/promise');
let db;
  
awaitMySqlWithInquirer();

async function init(){
    db =await mysql.createConnection(
        {
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
      );
}

async function awaitMySqlWithInquirer(){
await init()

 const [employees] =  await db.execute("select * from employee")
 const [role] =  await db.execute("select * from employee_role")
 const [employeeDepartment] =  await db.execute("select * from department")

  // console.table(employees);
  // console.table(role);
  // console.table(employeeDepartment);

  // const {employee} = await prompt([{
  // type: 'list',
  // name: 'employee',
  // message: 'What employee do you want to talk to?',
  // choices: employees.map(employee=> ({name:employee.first_name + " "+ employee.last_name, value: employee}))
  // }])

  // console.log(employee)
  
  await prompt ([{
    type: 'list',
    name: 'questions',
    message: 'What would you like to do?',
    choices: ["view all departments?", 
    "view all roles?", 
    "view all employees?", 
    "add a department?", 
    "add a role?", 
    "add an employee?", 
    "update an employee role?"]
  },
  ])
  
.then (function(response) {
    if (response.questions === "view all departments?") {
      console.table(employeeDepartment);
      return awaitMySqlWithInquirer();
    }
    else if (response.questions === "view all employees?") {
      console.table(employees);
      return awaitMySqlWithInquirer();
    }
    else if (response.questions === "view all roles?") {
      console.table(role);
      return awaitMySqlWithInquirer();
    }
    else {
      console.log("error")
    }
})
// Questions needed: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

    
    
    // async function awaitWithInquirerByItself(){
      
    //   const {size} = await prompt([{
    //     type: 'list',
    //             name: 'size',
    //             message: 'What size do you need?',
    //             choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro']
    //           }])
              
    //       console.log(size);
    
}        




