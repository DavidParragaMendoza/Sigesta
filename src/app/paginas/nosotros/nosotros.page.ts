import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent} from '@ionic/angular/standalone';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderGlobalComponent]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NosotrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
