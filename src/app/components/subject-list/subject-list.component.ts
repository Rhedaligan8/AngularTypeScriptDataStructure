import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subject: { name: string; professor: string; schedule: Date; unit:number; }[] = [];
  
  // Properties for Add Car Model
  name: string = '';
  professor: string = '';
  schedule: Date = new Date (2024,9,9);
  unit: number = 0;


  addSubject() {
    const newSubject = { name: this.name, professor: this.professor, schedule: this.schedule, unit: this.unit };
    this.subject.push(newSubject);
}
}