import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcoes-adm',
  templateUrl: './funcoes-adm.component.html',
  styleUrls: ['./funcoes-adm.component.css']
})
export class FuncoesAdmComponent implements OnInit {
  
  public currentRoute : any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

}
