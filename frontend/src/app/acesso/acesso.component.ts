import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AcessoService } from '../servicos/acesso.service';
import { Component, OnInit } from '@angular/core';

 
@Component({ 
  selector: 'app-acesso', 
  templateUrl: './acesso.component.html', 
  styleUrls: ['./acesso.component.scss'], 
})


export class AcessoComponent  implements OnInit {
triggerResize() {
throw new Error('Method not implemented.');
}

  formularioAcesso!: any
  listaAcesso!: any
fontSize: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    // private service: ProfessorService,
    private AcessoService: AcessoService,
    private _snackBar: MatSnackBar
  ) {
    this.gerarForm()
  }
  gerarForm() {
    this.formularioAcesso = this.fb.group({
      descricao: '',
      professor_id: '', 
      objeto_id: '',
 
    })
  }

    ngOnInit(): void {
      this.AcessoService.getAcesso().subscribe(data => {
        console.log(data);
        this.listaAcesso = data
      
      })
    }


  

    openSnackBar(message: string) {
      this._snackBar.open(message, 'OK');
    }
  }


  
  