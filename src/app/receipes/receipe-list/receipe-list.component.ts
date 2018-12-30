import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  receipes: Receipe[] = [
  new Receipe("Omelete", "Morning Breakfast", "https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237"),
  new Receipe("Omelete", "Morning Breakfast", "https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237"),
  new Receipe("Omelete", "Morning Breakfast", "https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237"),
  new Receipe("Omelete", "Morning Breakfast", "https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237"),
  new Receipe("Omelete", "Morning Breakfast", "https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237")
];
  constructor() { }

  ngOnInit() {
  }

}
