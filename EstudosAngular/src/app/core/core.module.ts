// core.module.ts
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  providers: [
    AuthService,
    LoaderService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule já foi importado! Só importe no AppModule.');
    }
  }
}
