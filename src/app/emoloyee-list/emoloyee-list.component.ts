import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emoloyee-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2>Employee list</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrl: './emoloyee-list.component.css'
})
export class EmoloyeeListComponent {

  public employees:any = [];

  constructor(private _employeeService: EmployeeService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._employeeService.getEmployess()
      .subscribe(data => this.employees = data);
  }

}
