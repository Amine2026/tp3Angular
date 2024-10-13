import {Component} from '@angular/core';
import {Categorie} from "../models/categorie";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  categories: Categorie[] = [{
    "id": 1, "title": "Grand électroménager",
    "image": "/categorie_electromenager.jpg", "description": "very good !",
    "available": true
  },
    {
      "id": 2, "title": "Petit électroménager",
      "image": "/categorie_petit_electromenager.jpg", "description": "small home appliances",
      "available": true
    },
    {
      "id": 3, "title": "Produits informatiques",
      "image": "/categorie_produits_informatiques.jpg", "description": "Jaw !",
      "available": true
    },
    {
      "id": 4, "title": "Smart Phones", "image": "/categorie_smartPhone.jpg",
      "description": "your everyday companion", "available": true
    },
    {
      "id": 5, "title": "TV, images et son",
      "image": "/categorie_tv_image_son.jpg", "description": "hi fi stuff",
      "available": true
    },
    {
      "id": 6, "title": "Produits voiture", "image": "/produits_nettoyages.jpg",
      "description": "car products", "available": false
    }]

  titre : string = "";

  getDescription(description: string) {
    alert(description);
  }
}
