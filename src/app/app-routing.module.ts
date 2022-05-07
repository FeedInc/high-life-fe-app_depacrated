import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { ProfileStudentComponent } from './views/profile-student/profile-student.component'
import { ProfileCoachComponent } from './views/profile-coach/profile-coach.component'
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "profile-student", component: ProfileStudentComponent },
  { path: "profile-coach", component: ProfileCoachComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


