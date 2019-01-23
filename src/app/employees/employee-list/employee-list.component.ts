import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployee();
  }

  onPopulate(employee:Employee)
  {
    this.employeeService.formData=Object.assign({},employee);
  }
  onDelete(employeeID:number)
  {
    this.employeeService.deleteEmployee(employeeID).subscribe(res=>{
      this.employeeService.getEmployee();
    });

  }
 


}
