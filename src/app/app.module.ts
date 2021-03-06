import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { DragulaModule } from 'ng2-dragula';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { WindowService } from './services/window/window.service';
import {NgxDnDModule}  from '@swimlane/ngx-dnd';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// For AoT compilation:
export function getWindow() {
  return window;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    DragulaModule.forRoot(),
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full'},
      { path: 'speakers', loadChildren: './modules/speakers/speakers.module#SpeakersModule'}
    ]),
    NgxDnDModule,
    SharedModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    {
      provide: WindowService,
      useFactory: getWindow
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
