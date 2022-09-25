import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

@Injectable()

export class ParamsActivate implements CanActivate {

    constructor(private router: Router) { };

    canActivate(route: ActivatedRouteSnapshot): UrlTree | boolean {

        const { data: { paramsActivate, paramsActivateRedirectUrl } } = route;

        if (!paramsActivate || !Array.isArray(paramsActivate) || paramsActivate.length === 0) { return true; }

        const hasAllRouteParams = paramsActivate.reduce((a, x) => {
            return !!route.params[x] && a;
        }, true);

        if (hasAllRouteParams) { return true; }

       return this.router.parseUrl(paramsActivateRedirectUrl || '/');
    }

}

