import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/shared/services/department.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  selectedEndpoint: string = ''; // Default endpoint
  departmentData: any; // Placeholder for department data

  constructor(private departmentService: DepartmentService) {}

  loadDepartment(endpoint: string) {
    this.selectedEndpoint = endpoint;
    switch (endpoint) {
      case '/speakers':
        this.departmentService.getDepartments("speakers").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/it':
        this.departmentService.getDepartments("it").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/marketing':
        this.departmentService.getDepartments("marketing").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/board':
        this.departmentService.getDepartments("board").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      case '/sponsorship':
        this.departmentService.getDepartments("sponsorship").subscribe((data) => {
          this.departmentData = data;
        });
        break;
      default:
        console.error('Invalid endpoint:', endpoint);
        break;
    }
  }
}
