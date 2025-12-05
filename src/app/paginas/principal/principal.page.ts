import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule,HeaderGlobalComponent, FooterGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PrincipalPage implements OnInit {
  productos=[
    {
      id: 1,
      titulo: "Sistema de gestion de tareas" ,
      des: "Sigesta es una plataforma integral diseñada para optimizar el flujo de trabajo y la organización personal. Permite crear, asignar y monitorear tareas en tiempo real, garantizando que nunca pierdas de vista tus objetivos prioritarios mediante una interfaz intuitiva y eficiente",
      img: "assets/img/Img1.png",
    },

    {
      id: 2,
      titulo: "a" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img1.jpg",
    },

    {
      id: 3,
      titulo: "Gatito panzon" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },

    {
      id: 4,
      titulo: "b" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

    {
      id: 5,
      titulo: "c" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

        {
      id: 6,
      titulo: "d" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

        {
      id: 7,
      titulo: "e" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

    {
      id: 8,
      titulo: "aa" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },

    {
      id: 9,
      titulo: "bb" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },

    {
      id: 10,
      titulo: "cc" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },


    {
      id: 11,
      titulo: "Sistema de gestion de tareas" ,
      des: "Sigesta es una plataforma integral diseñada para optimizar el flujo de trabajo y la organización personal. Permite crear, asignar y monitorear tareas en tiempo real, garantizando que nunca pierdas de vista tus objetivos prioritarios mediante una interfaz intuitiva y eficiente",
      img: "assets/img/Img1.png",
    },

    {
      id: 12,
      titulo: "a" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img1.jpg",
    },

    {
      id: 13,
      titulo: "Gatito panzon" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },

    {
      id: 14,
      titulo: "b" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

    {
      id: 15,
      titulo: "c" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

        {
      id: 16,
      titulo: "d" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

        {
      id: 17,
      titulo: "e" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

    {
      id: 18,
      titulo: "aa" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },

    {
      id: 19,
      titulo: "bb" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },

    {
      id: 20,
      titulo: "cc" ,
      des: "Un gatito panzon a tan solo: $100",
      img: "assets/img/img2.jpg",
    },

    
  ]
  
  productosFiltrados=[...this.productos];

  constructor(
    private router:Router
  ) { }

  ngOnInit() {

  }

  irvermas(producto: any){
    this.router.navigate(['/vermas'], {queryParams: producto});
  }

  //funcion para filtrar los productos.
  filtrar(event:any){
    const texto =(event.target.value || '').toLowerCase().trim();

    if (texto==='') {
      this.productosFiltrados=[...this.productos];
      return;
    }

    this.productosFiltrados = this.productos.filter(
      p=>p.titulo.toLowerCase().includes(texto) 
      //|| p.des.toLowerCase().includes(texto)
      //||p.precio.toString
  
  );

  }

 

}
