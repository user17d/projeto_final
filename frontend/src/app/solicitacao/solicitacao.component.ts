import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProfessoresService } from '../servicos/professores.service'; 
import { objetosService } from '../servicos/objetos.service'; 
import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from '../servicos/solicitacao.service';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss'],
})
export class SolicitacaoComponent implements OnInit {
  formularioSolicitacao!: any
  listaProfessores!: any
  listaObjeto!: any
  fontSize: any
  triggerResize() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private objetosService: objetosService,  
    private professoresService: ProfessoresService,
    private Service: SolicitacaoService,  
    private snackBar: MatSnackBar
 
    
  ) {
    this.gerarForm();
  }

  ngOnInit(): void {
  
    this.objetosService.getAll().subscribe(data => {
      console.log(data);
      this.listaObjeto = data;
    })
    this.professoresService.getAll().subscribe(data => {
      console.log(data);
      this.listaProfessores = data;
    })

  }

  gerarForm() {
    this.formularioSolicitacao = this.fb.group({
      descricao: '',
      professor_id: '',
      objeto_id: '',
    })
  }


  // salvar() {
  //   console.log(this.formularioSolicitacao.value);

  //   this.service.createSolicitacao(this.formularioSolicitacao.value).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.openSnackBar('Cadastrado com sucesso!')
  //       this.router.navigateByUrl('')
  //     },
  //     error: err => { console.log("Ocorreu um erro: " + err); }
  //   })

  // }


  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK');
  }
}
