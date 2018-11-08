import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RazaServiceService } from '../raza-service.service';
import { Raza } from '../raza';

@Component({
  selector: 'app-raza-list',
  templateUrl: './raza-list.component.html',
  styleUrls: ['./raza-list.component.css']
})
export class RazaListComponent implements OnInit {

constructor(private servicio : RazaServiceService ,
    private route : ActivatedRoute
    ) {}

  /**
  * La lista de mascotas de venta.
  */
  razas : Raza[];

  getRazas(): void{
    this.servicio.getMascotasVenta()
    .subscribe( lista => this.razas=lista);
  }

  /**
   * La lista de razas que pertenece a la tienda
   */
  razas: Raza[];



  /**
   * Asks the service to update the list of razas
   */
  getRazas(): void {
    this.razas = JSON.parse('[{ "id": "1212", "nombre": "sdfdsf"}]');
  }

  /**
   * this will initialize the component, retrieving the list of razas, from the server
   * this method will be called when the component is created.
   */
  ngOnInit() {
    this.getRazas();
  }

}
