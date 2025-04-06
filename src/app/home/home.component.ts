import { Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dialog = inject(MatDialog);

  openDialog(): void{
    this.dialog.open(ModalComponent,{
    width: '60vw', // Ajusta el ancho
    height: '80vh', // Ajusta la altura
    maxWidth: 'none',
    panelClass: 'custom-modal'
    });
  }
}
