import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css']
})
export class PlanoComponent implements OnInit {

  public currentRoute : any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

}
