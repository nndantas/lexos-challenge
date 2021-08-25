import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  public currentRoute : any;

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

}
