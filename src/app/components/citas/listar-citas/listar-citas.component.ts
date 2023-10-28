import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/interfaces/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {
  turnos: Lista[] = [];
  ngOnInit(): void {
    this.getTurnos();
    
  }
  constructor(private apiServis: ApiService){
    
  }
  public getTurnos() {
    this.apiServis.getApiList().subscribe((data: Lista[]) => {
      this.turnos = data;
    });
  }
}
