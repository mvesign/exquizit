import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import * as subjects from "../../../assets/subjects.json";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public subjects: Subject[];
  public type: string;
  public key: string;

  constructor() { }

  ngOnInit(): void {
    this.subjects = (subjects as any).default
  }

  toggle(type: string, key: string) {
    if (this.type == type && this.key == key) {
      this.type = null;
      this.key = null;
    }
    else {
      this.type = type;
      this.key = key;
    }
  }
}
