import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {ProjectManagementComponent} from './components/project-management/project-management.component';
import {AuthGuard} from './guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserListResolver} from './resolver/user-list.resolver';
import {AdminRoleGuard} from './guards/admin-role.guard';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {TimeTrackingFormComponent} from './components/time-tracking-form/time-tracking-form.component';
import {UserFormComponent} from './components/user-form/user-form.component';
import {UserRolesResolver} from './resolver/user-roles.resolver';
import {UserResolver} from './resolver/user.resolver';
import {PrjMgrRoleGuard} from './guards/prj-mgr-role.guard';
import {ProjectListOfUserResolver} from './resolver/project-list-of-user.resolver';
import {ProjectResolver} from './resolver/project.resolver';
import {ProjectFormComponent} from './components/project-form/project-form.component';
import {ProjectListResolver} from './resolver/project-list.resolver';
import {TimeTrackingOfUserResolver} from './resolver/time-tracking-of-user.resolver';
import {TimeTrackingComponent} from './components/time-tracking/time-tracking.component';
import {ProjectDetailComponent} from './components/project-detail/project-detail.component';
import {TimeTrackingOfProjectResolver} from './resolver/time-tracking-of-project.resolver';
import {AboutComponent} from './components/about/about.component';
import {LoginGuard} from './guards/login.guard';
import {TimeTrackingResolver} from './resolver/time-tracking.resolver';

const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    // Guard checks if user is logged in. in that case redirect to dashboard...
    path: 'login', component: LoginComponent, canActivate: [LoginGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    resolve: {
      projects: ProjectListResolver,
      alreadyTrackedTimes: TimeTrackingOfUserResolver,
    }
  },
  {
    path: 'user-management', component: UserManagementComponent, canActivate: [AdminRoleGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      users: UserListResolver
    }
  },
  {
    path: 'user-management/:alert', component: UserManagementComponent, canActivate: [AdminRoleGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      users: UserListResolver
    }
  },
  {
    path: 'user-form', component: UserFormComponent, canActivate: [AdminRoleGuard],
    resolve: {
      usersRoles: UserRolesResolver
    }
  },
  {
    path: 'user-form/:username', component: UserFormComponent, canActivate: [AdminRoleGuard],
    resolve: {
      user: UserResolver,
      usersRoles: UserRolesResolver
    }
  },
  {
    path: 'project-management', component: ProjectManagementComponent, canActivate: [PrjMgrRoleGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      projects: ProjectListOfUserResolver
    }
  },
  {
    path: 'project-form', component: ProjectFormComponent, canActivate: [PrjMgrRoleGuard],
  },
  {
    path: 'project-form/:projectID', component: ProjectFormComponent, canActivate: [PrjMgrRoleGuard],
    resolve: {
      project: ProjectResolver,
    }
  },
  {
    path: 'time-tracking', component: TimeTrackingComponent, canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      projects: ProjectListResolver,
      alreadyTrackedTimes: TimeTrackingOfUserResolver
    }
  },
  {
    path: 'time-tracking-edit/:timeTrackingID', component: TimeTrackingFormComponent, canActivate: [AuthGuard],
    resolve: {
      timeTracking: TimeTrackingResolver,
      projectOptions: ProjectListResolver
    }
  },
  {
    path: 'project-details/:projectID', component: ProjectDetailComponent, canActivate: [PrjMgrRoleGuard],
    runGuardsAndResolvers: 'always',
    resolve: {
      project: ProjectResolver,
      projectTimes: TimeTrackingOfProjectResolver
    }
  },
  {
    path: 'about', component: AboutComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
