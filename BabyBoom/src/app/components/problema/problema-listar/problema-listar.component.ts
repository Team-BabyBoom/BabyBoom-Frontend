import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Problema } from 'src/app/model/Problema';
import { ProblemaService } from 'src/app/service/problema.service';


@Component({
  selector: 'app-problema-listar',
  templateUrl: './problema-listar.component.html',
  styleUrls: ['./problema-listar.component.css']
})
export class ProblemaListarComponent implements OnInit{
lista: Problema[] = [];
dataSource:MatTableDataSource<Problema> =new MatTableDataSource();
displayedColumns: string[] = ['idproblema','idsoporte','idapoderado','titulo','descripcion','fechainicio','fechafin']

private idMayor:number=0;

constructor(private prS:ProblemaService, private dialog: MatDialog) {

}
ngOnInit(): void {
  this.prS.list().subscribe(data =>{
    this.dataSource = new MatTableDataSource(data);
  })
  this.prS.getLista().subscribe(data=>{
    this.dataSource = new MatTableDataSource(data);
  });
}


  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}