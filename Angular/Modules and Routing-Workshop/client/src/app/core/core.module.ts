import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LocalStorage } from './injection-token';
import { AuthActivate } from './guards/auth.activate';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
    providers: [
        {
            provide: LocalStorage,
            useFactory: (platformId: object) => {
                if (isPlatformBrowser(platformId)) {
                    return window.localStorage;
                }

                if (isPlatformServer(platformId)) {

                    return class implements Storage {
                        [name: string]: any;
                        length = 0;
                        private data: Record<string, string> = {};

                        clear(): void {
                            this.data = {};
                        }

                        getItem(key: string): string | null {
                            return this.data[key];
                        }

                        key(index: number): string | null {
                            throw new Error('Method not implemented.');
                        }

                        removeItem(key: string): void {
                            const { [key]: removedItem, ...others } = this.data;
                            this.data = others;
                        }

                        setItem(key: string, value: string): void {
                            this.data[key] = value;
                        }

                    }
                }

                throw Error('NOT IMPLEMENTED!');
                return {};


            },
            deps: [PLATFORM_ID]
        },
        AuthActivate
    ]
})
export class CoreModule { }
