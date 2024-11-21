import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css'],
})
export class PaquetesComponent implements OnInit {
  paquetesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.paquetesForm = this.formBuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fechaIda: ['', Validators.required],
      fechaVuelta: [''],
      habitaciones: [1, [Validators.required, Validators.min(1)]],
      pasajeros: [1, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    // Lógica adicional al inicializar
  }
}
