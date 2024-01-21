import { Routes } from '@angular/router';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './pages/company-yandex-map/company-yandex-map.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: 'list', component: CompanyListComponent},
    {path: 'detail/:id', component: CompanyDetailComponent},
    {path: 'map', component: CompanyYandexMapComponent},
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}    
];
