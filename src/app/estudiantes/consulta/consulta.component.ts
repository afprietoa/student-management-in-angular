import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { RegistroComponent } from '../registro/registro.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditarComponent } from '../editar/editar.component';
import { VerComponent } from '../ver/ver.component';
import { InhabilitarComponent } from '../inhabilitar/inhabilitar.component';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent  implements OnInit, AfterViewInit {
 
  estudiantes: any[] = [];
  displayedColumns: string[] = ['id','nombre','apellidos', 'celular','correo','fechaCreacion', 'acciones']
  dataSource = new MatTableDataSource<any>(this.estudiantes);

  constructor(
    private estudiantesService: EstudiantesService,
    public dialog: MatDialog
  ){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.estudiantesService.obtenerEstudiantes().subscribe({
      next:(response: any) => {
        this.estudiantes = response.data;
        this.dataSource = new MatTableDataSource<any>(this.estudiantes);
        this.dataSource.paginator = this.paginator;
      },
      error:(error) => {
        console.log(error);
      }
  });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  abrirDialogoRegistro() {

    const dialogRef = this.dialog.open(RegistroComponent,{
      width: '500px',
     //height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      
      this.estudiantesService.obtenerEstudiantes().subscribe(
        (response: any) => {
          this.estudiantes = response.data;
          this.dataSource = new MatTableDataSource<any>(this.estudiantes);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );
      
    });

  }

  verEstudiante(estudiante: number) {
    const dialogRef = this.dialog.open(VerComponent,{
      width: '500px',
     //height: '600px'
     data:{estudiante:estudiante}
    });


  }

  abrirDialogoEditar(estudiante: number) {
    const dialogRefEdit = this.dialog.open(EditarComponent,{
      width: '500px',
     //height: '600px'
     data:{estudiante:estudiante}
    });

    dialogRefEdit.afterClosed().subscribe(result => {
      
      this.estudiantesService.obtenerEstudiantes().subscribe(
        (response: any) => {
          this.estudiantes = response.data;
          this.dataSource = new MatTableDataSource<any>(this.estudiantes);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );
      
    });
  }
  inhabilitarEstudiante(estudiante: number) {
    const dialogRefInh = this.dialog.open(InhabilitarComponent,{
      width: '500px',
     //height: '600px'
     data:{estudiante:estudiante}
    });
    dialogRefInh.afterClosed().subscribe(result => {
      
      this.estudiantesService.obtenerEstudiantes().subscribe(
        (response: any) => {
          this.estudiantes = response.data;
          this.dataSource = new MatTableDataSource<any>(this.estudiantes);
          this.dataSource.paginator = this.paginator;
        },
        (error) => {
          console.log(error);
        }
      );
      
    });
  }
}
