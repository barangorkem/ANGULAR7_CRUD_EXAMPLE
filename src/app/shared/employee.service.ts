import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData:Employee;
  formDataList:Employee[];

  constructor(private http:HttpClient) { }

  addEmployee(formData:Employee)
  {
    let Options = {
      headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
     };
    var body=JSON.stringify(formData);
   return this.http.post("http://localhost:51728/api/Employee",body,Options);
  }
  getEmployee()
  {
    return this.http.get("http://localhost:51728/api/Employee").toPromise().then(x=>{
      this.formDataList=x as Employee[];
    });
  }
  updateEmployee(formData:Employee)
  {
    let Options = {
      headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
     };
    var body=JSON.stringify(formData);
   return this.http.put("http://localhost:51728/api/Employee/"+formData.EmployeeID,body,Options);
  }
  deleteEmployee(EmployeeID:number)
  {
    let Options = {
      headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
     };
    return this.http.delete("http://localhost:51728/api/Employee/"+EmployeeID,Options);

  }
  
}
