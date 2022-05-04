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

// think about doing something like this for your insert prompts
//  db.execute(`INSERT INTO employee (first_name, last_name, role_title) VALUES (?,?,?)`, [response.employee.first_name, response.employee.last_name, response.employee.role_title])



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
    "add a department?", // post
    "add a role?", // post
    "add an employee?", // post
    "update an employee role?"] //put
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
    // using inquirer we need to know what the employees first, last, role
    // then we take those and do a sql insert to make sure it gets added
    // then we need to display the new results again in a console table which means we have to query using a select to see it again
    else if(response.questions === "add a role?"){
      addEmployeeRole()

    }
    else if(response.questions === "add an employee?"){
      addEmployee()
    }
    else if(response.questions === "update an employee role?"){
      updateEmployeeRole()
    }
    else {
      console.log("error")
    }
  })
// Questions needed: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

    
  //   async function addDepartment() {
  //   await init()  
  //   const [employees] = await db.execute("select * from employees")
  //   const [department] = await db.execute("select * from department")

  //   const response = await prompt([
  //     {
  //       type: 'input',
  //       first_name: 'firstName_id',
  //       message: 'Add first name:',
  //     },
  //     {
  //       type: 'input',
  //       last_name: 'lastName_id',
  //       message: 'Add last name:',
  //     },
  //     {
  //       type: 'list',
  //       name: 'selectRole',
  //       message: 'Select a role:',
  //       choices: department.map(department => ({name: department.name, value: department}))
  //     },
  //     {
  //       type: 'list',
  //       name: 'selectManager',
  //       message: 'Select a manager id:',
  //       choices: employees.map(employee=> ({name:employee.first_name + " "+ employee.last_name, value: employee}))

  //     },
  //   ])
  //   db.execute(`INSERT INTO employee (first_name, last_name, role_id, manager id) VALUES ("${response.firstName_id}", "${response.lastName_id}", "${response.selectRole}", "${response.selectManager}");`)
  //   viewEmployee()
    
  // }
  //   async function addEmployeeRole() {
  //   await init()  
  //   const [role] = await db.execute("select * from employee_role")
  //   const [department] = await db.execute("select * from department")

  //   const response = await prompt([
  //     {
  //       type: 'input',
  //       name: 'role_id',
  //       message: 'Add your new role:',
  //     },
  //     {
  //       type: 'input',
  //       name: 'salary',
  //       message: 'Salary of added new role:',
  //     },
  //     {
  //       type: 'list',
  //       name: 'decideDepartment',
  //       message: 'Which department does your new role belong in?',
  //       choices: department.map(department => ({name: department.name, value: department}))
  //     },
  //   ])
  //   db.execute(`INSERT INTO employee_role (department_id, title, salary ) VALUES ("${response.decideDepartment.id}, ${response.role_id}", "${response.salary}");`)
  //   viewRole()
    
  // }
  async function addEmployee() {
    await init()  
    const [employees] = await db.execute("select * from employee")
    const [department] = await db.execute("select * from department")

    const response = await prompt([
      {
        type: 'input',
        name: 'firstName_id',
        message: 'Add first name:',
      },
      {
        type: 'input',
        name: 'lastName_id',
        message: 'Add last name:',
      },
      {
        type: 'list',
        name: 'selectRole',
        message: 'Select a role:',
        choices: department.map(department => ({name: department.name, value: department}))
      },
      {
        type: 'list',
        name: 'selectManager',
        message: 'Select a manager id:',
        choices: employees.map(employee=> ({name:employee.first_name + " "+ employee.last_name, value: employee}))

      },
    ])
    db.execute(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${response.firstName_id}", "${response.lastName_id}", ${response.selectRole.id}, ${response.selectManager.id});`)
    viewEmployee()
    
  }

  async function viewEmployee() {
    const [employee] =  await db.execute("select * from employee")
    console.table(employee);
    return awaitMySqlWithInquirer()
  }




}