import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PrincipalPage implements OnInit {
  productos=[
    {
      id: 1,
      titulo: "Logo del sistema de gestion de tareas" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/Img1.png",
    },

    {
      id: 2,
      titulo: "Lorem ipsum dolor" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img1.jpg",
    },

    {
      id: 3,
      titulo: "Logo del sistema de gestion de tareas" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img2.jpg",
    },

    {
      id: 4,
      titulo: "Logo del sistema de gestion de tareas" ,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minus quasi unde illum repudiandae velit nostrum molestiae tempore nobis modi quam ipsam mollitia ut, voluptates, maiores officia eius, expedita ipsa?",
      img: "assets/img/img3.jpg",
    },

  ]

  constructor(
    private router:Router
  ) { }

  ngOnInit() {

  }

  irvermas(producto: any){
    this.router.navigate(['/vermas'], {queryParams: producto});
  }

}
