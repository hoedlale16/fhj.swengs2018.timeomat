import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ProjectService} from '../services/project.service';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectListResolver implements Resolve<Observable<Array<any>>> {

  constructor(private projectService: ProjectService, private authService: AuthService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
      return this.projectService.getAllProjects();
  }

}
