import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  public currentRoute : any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

}
