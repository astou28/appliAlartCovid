import { Component, OnInit } from '@angular/core';
import { monModel } from '../models/mon-model.model';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'alertCovid';
  donnee: monModel[] = [];

  constructor(private api: GetApiService) {}

  ngOnInit(): void {
    this.getDonnee();
  }
  getDonnee() {
    this.api.apiCall().subscribe(
      (data) => {
        this.donnee = [data];
        console.log(data);
      },
      (err) => {
        alert('erreur');
      }
    );
  }
}
