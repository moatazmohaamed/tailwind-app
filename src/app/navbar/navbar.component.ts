import { Component, inject, OnInit, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Collapse } from 'flowbite';
import type { CollapseOptions, CollapseInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import { DarkmodeService } from '../serivces/darkmode.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    const $targetEl: HTMLElement = document.getElementById(
      'targetEl'
    ) as HTMLElement;

    const $triggerEl: HTMLElement = document.getElementById(
      'triggerEl'
    ) as HTMLElement;

    const options: CollapseOptions = {};

    const instanceOptions: InstanceOptions = {
      id: 'targetEl',
      override: true,
    };

    const collapse: CollapseInterface = new Collapse(
      $targetEl,
      $triggerEl,
      options,
      instanceOptions
    );

    collapse.expand();
  }

  darkModeService: DarkmodeService = inject(DarkmodeService);

  toogleDarkMode() {
    this.darkModeService.uptadeDarkMode();
  }
}
