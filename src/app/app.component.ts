import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmoloyeeListComponent } from './emoloyee-list/emoloyee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmoloyeeListComponent,EmployeeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sevices';
}
