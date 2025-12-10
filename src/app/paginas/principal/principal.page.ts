import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';
import { MasComponent } from 'src/app/componentes/mas/mas.component';
import {ModalController} from '@ionic/angular/standalone'; //nuevo
import { HttpClient, HttpClientModule,  } from '@angular/common/http';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [HttpClientModule ,IonContent, CommonModule, FormsModule,HeaderGlobalComponent, FooterGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PrincipalPage implements OnInit {
  
  productos: any[]=[]
  productosFiltrados: any[]=[];
  categorias: any;
  //modalCtrl: any;

  constructor(
    private router:Router,
    private modalCtrl: ModalController, //esta linea es nueva
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.cargarCategorias();

  }

  filtarCategoria(nombre:string){
    this.productosFiltrados = this.productos.filter(p=> p.categoria===nombre);
  }

  /*NUEVO */
  filtrarPorSubcategoria(subcategoria: string) {
    this.productosFiltrados = this.productos.filter(p => p.subcategoria === subcategoria);
  }

  mostrarTodos() {
    this.productosFiltrados = [...this.productos];
  }

  cargarCategorias(){
    this.http.get('assets/BD/categorias.json').subscribe((data:any)=>{
      this.categorias = data;
    });

  }

  cargarProductos(){
    this.http.get('assets/BD/productos.json').subscribe((data:any)=>{
      this.productos=data;
      this.productosFiltrados=[...this.productos];
    });  
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

  async ver_modal(producto: any){
    const modal = await this.modalCtrl.create({
      component: MasComponent,
      componentProps: { imagen: producto.img, 
        titulo: producto.titulo },
        cssClass: 'estilo_modal'
    });
    await modal.present();
    
    
  }


 

}
