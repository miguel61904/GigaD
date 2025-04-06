import { Component, inject, ViewEncapsulation } from '@angular/core';
import{MatDialogRef , MatDialogModule} from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  productos: any[] = [
    {
      id: 1,
      nombre: "Premium Himalayan Shilajit Resin 600mg",
      descripcion: `
        Unlock the power of nature with our Shilajit Resin, a potent and pure dietary supplement harvested from the Himalayan mountains. Rich in over 85 trace minerals, fulvic acid, and humic acid, this ancient superfood supports energy, stamina, cognitive function, and overall vitality.<br><br>
        ✔️ 600mg of pure Shilajit resin per serving<br>
        ✔️ Sourced from high altitudes in the Himalayas<br>
        ✔️ Supports mental clarity and physical endurance<br>
        ✔️ Natural detoxifier and immune booster<br>
        ✔️ No fillers, additives, or preservatives – just pure Shilajit<br><br>
        Experience the ancient secret of wellness that has been treasured for centuries. Perfect for those seeking a natural way to enhance their performance and well-being.
      `
    },
    {
      id: 2,
      nombre: "Shilajit Fusion with Borojó, Chontaduro & Maca",
      descripcion:`Experience the powerful synergy of nature’s finest energizers in our Shilajit Fusion. Enriched with Borojó, Chontaduro, and Maca, this premium blend is designed to elevate your vitality, stamina, and overall wellness.

<br><br>

✔️ Authentic Himalayan Shilajit – Known for its mineral-rich profile and rejuvenating effects
✔️ Borojó & Chontaduro – Superfruits from the Amazon that boost natural energy and libido
✔️ Maca Root – An adaptogen that supports hormonal balance and endurance
✔️ All-Natural Formula – No fillers, artificial additives, or preservatives
✔️ Ideal for athletes, professionals, and anyone seeking a natural performance edge

<br>
Unlock your potential with a product that combines ancient wisdom and modern vitality – naturally powerful, undeniably effective.`

    }
  ];

  dialogRef = inject(MatDialogRef<ModalComponent>)

  close(): void{
    this.dialogRef.close();
  }
}
