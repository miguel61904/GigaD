import { Component, Inject, inject, Input, Optional, ViewEncapsulation, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import{MatDialogRef , MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { url } from 'node:inspector';
import { style } from '@angular/animations';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  @ViewChild('contInfo') divInfo: ElementRef;
  @ViewChild('contImg') divImg: ElementRef;
  constructor(private Render2:Renderer2, @Optional() @Inject(MAT_DIALOG_DATA) public data: ({ id: number }),
 @Optional() private dialogRef?: MatDialogRef<ModalComponent>) {
 }

  productoSeleccionado?: any;

ngOnInit(): void {
  
  this.productoSeleccionado = this.productos.find(p => p.id === this.data?.id);
  
}

ngAfterViewInit(): void{
  const divinfo = this.divInfo.nativeElement;
  const divImg = this.divImg.nativeElement;
  if(this.data.id === this.productoSeleccionado.id){
    this.Render2.setStyle(divinfo, 'background-image', `url(${this.productoSeleccionado.imgfon})`) 
    this.Render2.setStyle(divImg, 'background-image', `url(${this.productoSeleccionado.img})`)
   }
}
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
        Experience the ancient secret of wellness that has been treasured for centuries. Perfect for those seeking a natural way to enhance their performance and well-being.`,
        url: "https://wa.me/573204577645?text=Me%20gustaría%20saber%20sobre%20el%20Shilajit%20pequeño",
        img: '/img/small.png',
        imgfon: "/img/chica1.png"
    },
    {
      id: 2,
      nombre: "Shilajit Fusion with Borojó, Chontaduro & Maca",
      descripcion:`Experience the powerful synergy of nature’s finest energizers in our Shilajit Fusion. Enriched with Borojó, Chontaduro, and Maca, this premium blend is designed to elevate your vitality, stamina, and overall wellness.

<br><br>

✔️ Authentic Himalayan Shilajit – Known for its mineral-rich profile and rejuvenating effects<br>
✔️ Borojó & Chontaduro – Superfruits from the Amazon that boost natural energy and libido<br>
✔️ Maca Root – An adaptogen that supports hormonal balance and endurance<br>
✔️ All-Natural Formula – No fillers, artificial additives, or preservatives<br>
✔️ Ideal for athletes, professionals, and anyone seeking a natural performance edge<br>

<br>
Unlock your potential with a product that combines ancient wisdom and modern vitality – naturally powerful, undeniably effective.`,
      url:"https://wa.me/573204577645?text=Me%20gustaría%20saber%20sobre%20el%20Shilajit%20mediano",
      img: '/img/medium.png',
       imgfon: "img/chica2.png"
    },
    {
      id: 3,
      nombre: "Shilajit H+ – Vitality Support for Men",
      descripcion:`Fuel your strength and stamina with Shilajit H+, a high-potency vitality supplement designed specifically for men. Each capsule delivers 550mg of pure energy-boosting support to help you power through your day — whether it’s in the gym, at work, or beyond.
<br><br>
🔥 Promotes testosterone levels naturally<br>
💪 Enhances physical performance and muscle strength<br>
🧠 Supports mental focus and endurance<br>
🌿 100% vegetarian capsules – no artificial additives<br>
⚡ Ideal for active men seeking all-day energy and vitality<br>
<br>
With 100 capsules per bottle, Shilajit H+ is your ultimate daily ally for peak performance and lasting vitality.`,
      url:"https://wa.me/573204577645?text=Me%20gustaría%20saber%20sobre%20el%20Shilajit%20grande",
      img: '/img/big.png',
      imgfon: "img/chica3.png"
    }
  ];

 
  close(): void{
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  redyWhatsapp(){
    if(this.data.id === this.productoSeleccionado.id){
      window.location.href= this.productoSeleccionado.url;
    }
  }
}
