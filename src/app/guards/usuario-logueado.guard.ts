import { CanActivateFn } from '@angular/router';

export const usuarioLogueadoGuard: CanActivateFn = (route, state) => {
  return true;
};
