import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { myModel } from 'src/api/modelscaffoldinExample';
import { FONT_ICONS } from './employe.const/font-icons.const';
import { EmployeModel } from './employe.model';
import { EmployService } from './employe.service';

@Component({
  selector: 'scfld-license-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.scss'],
})
export class EmployeListComponent implements OnInit {
  title = 'Employes';
  listEmployes$!: Observable<EmployeModel[]>;
  headsTable = {
    notFitColum: 'name',
    fitColum: ['Last Name', 'Age', 'Work', 'Roll', 'Gender', 'Suspended', 'Email'],
  };
  fontIcons = FONT_ICONS;
  mymodel = myModel;
  json!: string;
  constructor(private employService: EmployService) {
    this.listEmployes$ = this.employService.getAll();
  }
  ngOnInit(): void {
    this.json = JSON.stringify(this.mymodel, undefined, 2);
    //document.write(this.json)
  }
}
