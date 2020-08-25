import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {



  @Input() project : Project;

  claseDev : boolean = true;
  clasePm : boolean = false;
  claseMixed : boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.project.role === 'pm') {
        this.clasePm= true;
    }

    if (this.project.role === 'mix') {
      this.claseMixed =  true;
      //console.log(this.project);
      
    }

    
  }

}
