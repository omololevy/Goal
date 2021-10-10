import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[]= [
    new Goal(1, 'Watch Finding Nemo', 'Find an online version of Merlin looking for his son Nemo.'),
    new Goal(2, 'Buy Cookies', 'Not for me but for the Parrot.'),
    new Goal(3, 'Get new Phone Case','My sister has her birthday coming up.'),
    new Goal(4, 'Get Dog Food', 'Rex likes roasted meat'),
    new Goal(5, 'Solve coding assignment', 'Debug the angular code to completion.'),
    new Goal(6, 'Plot my world domination plan', 'Because i want to terminate it with sophisticated AI.')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
