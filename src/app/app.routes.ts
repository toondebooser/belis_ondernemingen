import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SnoeienComponent } from "./snoeien/snoeien.component";
import { VellenComponent } from "./vellen/vellen.component";
import { VerkoopComponent } from "./verkoop/verkoop.component";
import { FrezenComponent } from "./frezen/frezen.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Belis Ondernemingen",
  },
  {
    path:"snoeien",
    component: SnoeienComponent,
    title: "Snoeien",
  },
  {
    path:"vellen",
    component: VellenComponent,
    title: "Vellen",
  },
  {
    path:"verkoop",
    component: VerkoopComponent,
    title: "Verkoop",
  },
  {
    path:"frezen",
    component: FrezenComponent,
    title: "Frezen"

  }
];
