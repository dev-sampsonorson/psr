import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  template: `
    <p>
      secret works!
    </p>
  `,
  styles: [
  ]
})
export class SecretComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
