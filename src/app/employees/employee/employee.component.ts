import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.employeeService.formData={
      EmployeeID:null,
      FullName:'',
      Position:'',
      EMPCode:'',
      Mobile:''

    }
  }
  onSubmit(form:NgForm)
  {
    if(form.value.EmployeeID!=null)
    {
      this.employeeService.updateEmployee(form.value).subscribe(x=>{
        this.resetForm(form);
        this.employeeService.getEmployee();
      })
    }
    else
    {
      this.employeeService.addEmployee(form.value).subscribe(res=>{
        console.log(res);
        this.resetForm(form);
        this.employeeService.getEmployee();
      })
    }
    
  }

}
