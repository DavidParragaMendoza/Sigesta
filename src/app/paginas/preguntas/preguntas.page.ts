import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
  standalone: true,
  imports: [IonContent,  CommonModule, FormsModule, HeaderGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PreguntasPage implements OnInit {


  preguntas=[
    {
      icono: 'cart-outline',
      pregunta: '¿Cómo puedo realizar una compra?',
      respuesta: 'Para realizar una compra, simplemente navega por nuestro catálogo, selecciona los productos que deseas y agrégalos a tu carrito. Luego, procede al pago siguiendo las instrucciones en pantalla.'

    },

    {
      icono: 'shield-checkmark-outline',
      pregunta: '¿Es seguro comprar en línea?',
      respuesta: 'Sí, nuestra plataforma utiliza tecnología de encriptación avanzada para proteger tus datos personales y de pago. Además, contamos con políticas estrictas para garantizar la seguridad de tus transacciones.'
    },

    {
      icono: 'swap-horizontal-outline',
      pregunta: '¿Cuál es la política de devoluciones?',
      respuesta: 'Ofrecemos una política de devoluciones de 30 días. Si no estás satisfecho con tu compra, puedes devolver los productos en su estado original para un reembolso completo o un cambio.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
