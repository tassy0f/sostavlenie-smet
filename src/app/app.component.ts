import { Component, OnInit } from '@angular/core';
import { Rates } from './models/rates';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sostavlenie-smet';
  constructor() {
  }

  ngOnInit(): Rates[] {
    return this.ratesList;
  }

  ratesList: Rates [] = [
    new Rates(
      'Базовый тариф',
      1100,
      '1 день',
      1,
      [
        'База ТСН МГЭ (56 дополнение)',
        'Индексы ТСН МГЭ (2019 год)',
        'Индексы  ТСН МГЭ, Глава 13 (2017 год)'
      ]
    ),
    new Rates(
      'Бизнес тариф',
      3300,
      '30 дней',
      2,
      [
        'База ТСН МГЭ (56 дополнение)',
        'Индексы ТСН МГЭ (2019 год)',
        'Индексы  ТСН МГЭ, Глава 13 (2017 год)'
      ]
    ),
    new Rates(
      'Энтерпрайз тариф',
      9900,
      '90 дней',
      3,
      [
        'База ТСН МГЭ (56 дополнение)',
        'Индексы ТСН МГЭ (2019 год)',
        'Индексы  ТСН МГЭ, Глава 13 (2017 год)'
      ]
    )
  ]

  registerForm = new FormGroup ({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  get userName () {
    return this.registerForm.get('userName')
  }

  get email () {
    return this.registerForm.get('email')
  }

  model: any = {}

  async register() {
    let connection = await fetch('http://localhost:5000', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(this.registerForm.value)
      }
    )
    if(connection.ok === true) {
      console.log("We send a query!");
    } else {
      console.log("false");
      
    }
  }
}