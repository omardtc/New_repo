import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  usuario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', Validators.email],
    edad: ['', Validators.min(18)],
    aceptaTerminos: [false, [Validators.requiredTrue]],
  });

  cambiarNombre(){
    this.usuario.controls.nombre.setValue('Ornitorrinco');
  }

  guardarDatos(){
    console.log(this.usuario.value);
  }

  constructor(private fb: FormBuilder) {}

}


