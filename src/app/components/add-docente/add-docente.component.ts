import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { DocenteService } from 'src/app/services/docente.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';
//********************************************************************COMPONENTE inicio *********************************************************************/
@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.css'],
})
//********************************************************************COMPONENTE fin ************************************************************************/

//********************************************************************CLASE inicio***************************************************************************/
export class AddDocenteComponent implements OnInit {
  //  variables globales para el combo de ubigeo
  departamentos?: string[] = [];
  provincias?: string[] = [];
  distritos?: Ubigeo[] = [];

  //  variable global del formulario. Aqui dices que los selects al inicios van a estar en la opcion "Seleccione"
  docente?: Docente = {
    ubigeo: {
      idUbigeo: -1,
      departamento: '-1',
      provincia: '-1',
      distrito: '-1',
    },
  };
  //  El constructor que construye objetos.
  //  Recuerda que aquí "ubigeo" es un atributo de la clase "Docente".
  //  Aqui permitira mostrar una lista con los Departamento 
  constructor(
    private ubigeoService: UbigeoService,
    private docenteService: DocenteService
  ) {
    this.ubigeoService
      .listaDepartamentos()
      .subscribe((x) => (this.departamentos = x));
  }

  cargaProvincia() {
    console.log(
      '>>> cargaProvincia >>  departamento >> ' +
        this.docente?.ubigeo?.departamento
    );

    this.ubigeoService
      .listaProvincias(this.docente?.ubigeo?.departamento)
      .subscribe((x) => (this.provincias = x));

    //  this.distritos = [];
    this.docente!.ubigeo!.idUbigeo = -1;
    this.docente!.ubigeo!.provincia = '-1'; //  pone a Provincia en -1 osea en [Selecciones]
  }

  cargaDistritos() {
    console.log(
      '>>> cargaDistritos >>  departamento >> ' +
        this.docente?.ubigeo?.departamento
    );
    console.log(
      '>>> cargaDistritos >>  provincia >> ' + this.docente?.ubigeo?.provincia
    );

    this.ubigeoService
      .listaDistritos(
        this.docente?.ubigeo?.departamento,
        this.docente?.ubigeo?.provincia
      )
      .subscribe((x) => (this.distritos = x));
    // this.docente!.ubigeo!.idUbigeo = -1;
  }
//   Espara que esta informacion lo inserte en el Docente  ***********************************/
  insertado() {
    this.docenteService
      .insertaDocente(this.docente)
      .subscribe((x) => alert(x.mensaje));
  }

  ngOnInit(): void {}
}
//********************************************************************CLASE fin **************************************************************************/

//    ************************************************************************************************************
//    (x) => this.departamentos = x     cuando lleguen los datos (la variable x) los guardo en la "variable global
//                                      departamentos".
//
