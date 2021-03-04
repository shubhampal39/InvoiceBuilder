import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-builder',
  template: `
    <p>
      <app-side-nav></app-side-nav>
    </p>
  `,
  styles: [
  ]
})
export class InvoiceBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
