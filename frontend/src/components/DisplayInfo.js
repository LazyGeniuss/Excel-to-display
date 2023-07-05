import React, { useState, useEffect } from 'react';
import { readData } from './jsonToBackendApi';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';


const DisplayInfo = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    readData().then((data) => {
        setUser(data);
    });
  }, []);

  
  return (
    <div>
    <Typography variant="h4">Users</Typography>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Employee ID</TableCell>
          <TableCell>Employee Name</TableCell>
          <TableCell>Employee Status</TableCell>
          <TableCell>Joining Date</TableCell>
          <TableCell>Birth Date</TableCell>
          <TableCell>Skills</TableCell>
          <TableCell>Salary Details</TableCell>
          <TableCell>Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {user.map((employee) => (
          <TableRow key={employee.EmployeeID}>
            <TableCell>{employee.EmployeeID}</TableCell>
            <TableCell>{employee.EmployeeName}</TableCell>
            <TableCell>{employee.EmployeeStatus}</TableCell>
            <TableCell>{employee.JoiningDate}</TableCell>
            <TableCell>{employee.BirthDate}</TableCell>
            <TableCell>{employee.Skills}</TableCell>
            <TableCell>{employee.SalaryDetails}</TableCell>
            <TableCell>{employee.Address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </div>
  );
};

export default DisplayInfo;
