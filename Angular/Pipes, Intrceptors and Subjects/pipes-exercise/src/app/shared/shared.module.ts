import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ParamsActivate } from './guards/params.activate';
import { GetPropPipe } from './get-prop.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    GetPropPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    GetPropPipe
  ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [ParamsActivate]
        }
    }
}
