import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogModule, MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDialogModule, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  dialog = inject(MatDialog);

  myId = 0;

  openDialog(id:number){
    this.dialog.open(ModalComponent,{
    width: '60vw', // Ajusta el ancho
    height: '80vh', // Ajusta la altura
    maxWidth: 'none',
    panelClass: 'custom-modal',
    data: {id}
    });
    this.myId = id;
    console.log(this.myId)
  }
  ngOnInit(): void {
    
  }
}
