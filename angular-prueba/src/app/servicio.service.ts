import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  vector(): Array<Number>{
    let enteros = [];

    for(var i=0; i<100; i++){
      enteros.push(i);
    }
    return enteros;
  }
}
