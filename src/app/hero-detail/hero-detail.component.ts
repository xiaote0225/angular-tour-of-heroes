import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero | undefined;
  // hero: Hero | undefined;
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  // getHero(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  // }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // const id = 12;
    this.heroService
      .getHero(Number(id))
      .subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
