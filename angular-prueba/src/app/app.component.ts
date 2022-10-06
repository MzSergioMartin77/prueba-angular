import { Component} from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  
  public title = 'Prueba técnica de angular';
  public op = '';
  public enteros: Number[] = [];

  constructor(private servicio: ServicioService){}

  listEnteros(){
    this.op = '1';
    this.enteros = this.servicio.vector();
    console.log(this.enteros);
  }

  getNumero(numero: number): Observable<Number>{
    return of(numero);
  }

  impares(numero: number){
    let impar = this.getNumero(numero).pipe(filter(n => numero%2!==0));
    impar.subscribe(x => console.log('Numero impar:'+ x));
  }

  numImpar(){
    this.op = '2';
    let random = Math.floor(Math.random()*(10 - 0) + 0);
    console.log(random);
    this.impares(random);
  }

}

