import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { FilmPageComponent } from './film-page/film-page.component';

export const routes: Routes = [
    {path:'',component:ListFilmComponent},
    {path:'listFilm', component:ListFilmComponent},
    {path:'filmPage/:id',component:FilmPageComponent}
];
