import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//views
import { ProfileStudentComponent } from './views/profile-student/profile-student.component'
import { ProfileCoachComponent } from './views/profile-coach/profile-coach.component'
import { HomeComponent } from './views/home/home.component';
// import {SignInComponent} from "./security/pages/sign-in/sign-in.component";
// import {SignUpComponent} from "./security/pages/sign-up/sign-up.component";
import {ViewTournamentComponent} from "./views/view-tournament/view-tournament.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "profile-student/:studentId", component: ProfileStudentComponent },
  { path: "profile-coach/:coachId", component: ProfileCoachComponent },
  // { path: "sign-in", component: SignInComponent },
  // { path: "sign-up", component: SignUpComponent },
  {path: "tournaments", component: ViewTournamentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


