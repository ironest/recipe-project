import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Stake',
      'Juicy garlic angus stake',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
      ),
    new Recipe(
      'Comisa',
      'Healty tomato cake',
      'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg'
    ),
    new Recipe(
      'Risotto',
      'Grilled Prawn Basmati Risotto',
      'https://cdn.pixabay.com/photo/2018/10/31/12/37/healthy-food-3785722_1280.jpg'
    )
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
