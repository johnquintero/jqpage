import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projects : Project[];
  constructor(private serviceProjects : ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.serviceProjects.getProjects();
  }

}
