import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployess(){
    return[
      {"id":1, "name":"Andrew", "age":30},
      {"id":2, "name":"Vasanth", "age":40},
      {"id":3, "name":"Binu", "age":20},
      {"id":4, "name":"Jyoyhi", "age":30}
    ];
  }
}
