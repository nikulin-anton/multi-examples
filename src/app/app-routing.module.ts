import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAIN_LINKS_TOKEN } from './tokens/main-links.token';

const INTERCEPTORS_PATH = 'interceptors';
const HANDERS_PATH = 'handlers';

const routes: Routes = [
  {
    path: INTERCEPTORS_PATH,
    loadChildren: () =>
      import('./pages/interceptors/interceptors.module').then(
        (m) => m.InterceptorsModule
      ),
  },
  {
    path: HANDERS_PATH,
    loadChildren: () =>
      import('./pages/handlers/handlers.module').then((m) => m.HandlersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: MAIN_LINKS_TOKEN,
      useValue: [
        { name: 'Главная', path: '' },
        { name: 'Работа с интерсепторами', path: INTERCEPTORS_PATH },
        { name: 'Работа с обработчиками', path: HANDERS_PATH },
      ],
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
