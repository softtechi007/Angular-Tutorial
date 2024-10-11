import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [NgFor],
  template:`
    <h2>Employee details</h2>
    <ul *ngFor = "let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public employees:any = [];
  constructor(private _employeeService: EmployeeService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._employeeService.getEmployess()
      .subscribe(data => this.employees = data);
  }
}
