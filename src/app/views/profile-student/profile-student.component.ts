import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss'],
})
export class ProfileStudentComponent implements OnInit {
  studentId!: string;
  constructor(private route: ActivatedRoute, private api: UsersApiService) {

  }
  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.route.paramMap.subscribe(params =>
      this.studentId = String(params.get("studentId"))
    );
  }
}
