import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  public currentRoute : any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

}
