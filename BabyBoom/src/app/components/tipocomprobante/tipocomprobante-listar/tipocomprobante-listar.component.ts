import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tipocomprobante } from 'src/app/model/TipoComprobante';
import { TipocomprobanteService } from 'src/app/service/tipocomprobante.service';
import { TipocomprobanteDialogoComponent } from './tipocomprobante-dialogo/tipocomprobante-dialogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tipocomprobante-listar',
  templateUrl: './tipocomprobante-listar.component.html',
  styleUrls: ['./tipocomprobante-listar.component.css']
})
export class TipocomprobanteListarComponent implements OnInit{
  lista:Tipocomprobante[] = [];
  dataSource:MatTableDataSource<Tipocomprobante> = new MatTableDataSource();
  displayedColumns:string[] = ['id', 'tipoComprobante','accion1']
  private idMayor:number=0
  constructor(private tcS:TipocomprobanteService, private dialog:MatDialog){

  }
  ngOnInit(): void {
      this.tcS.list().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
      });
      this.tcS.getList().subscribe(data=>{
        this.dataSource= new MatTableDataSource(data);
      });
      this.tcS.getConfirmarEliminar().subscribe(data=>{
        data == true ? this.eliminar(this.idMayor):false;
      })
  }
  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(TipocomprobanteDialogoComponent);
  }
  eliminar(id:number){
    this.tcS.eliminar(id).subscribe(() =>{
      this.tcS.list().subscribe(data=>{
        this.tcS.setList(data);
      })
    })
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
