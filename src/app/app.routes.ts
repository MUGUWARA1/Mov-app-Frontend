import { Routes } from '@angular/router';
import { ListFilmComponent } from './list-film/list-film.component';
import { FilmPageComponent } from './film-page/film-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { FavoriesComponent } from './favories/favories.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent,
        title: "Login"
    },
    {
        path:'main',
        component:MainComponent,
        title:"Main",
        children:[
            {
                path:"home",
                component:ListFilmComponent,
                title:"home"
            },
            {
                path:"favories",
                component:FavoriesComponent,
                title:"Les Films Favorisee"
            },
            {
                path:'filmPage/:id',
                component:FilmPageComponent,
                title:"film page :id"
            },

        ]

    },
    
];
