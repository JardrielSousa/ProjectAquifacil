import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { PerfilPage } from '../pages/perfil/perfil';
import { ListaPage } from '../pages/lista/lista';
import { BaresPage } from '../pages/bares/bares';
import { LojasPage } from '../pages/lojas/lojas';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { FarmaciasPage } from '../pages/farmacias/farmacias';
import { NossasenhoraPage } from '../pages/nossasenhora/nossasenhora';
import { PaguemenosPage } from '../pages/paguemenos/paguemenos';
import { DjePage } from '../pages/dje/dje';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConfiguracoesPage,
    PerfilPage,
    ListaPage,
    BaresPage,
    RestaurantesPage,
    LojasPage,
    FarmaciasPage,
    NossasenhoraPage,
    PaguemenosPage,
    DjePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConfiguracoesPage,
    PerfilPage,
    ListaPage,
    BaresPage,
    RestaurantesPage,
    LojasPage,
    FarmaciasPage,
    NossasenhoraPage,
    PaguemenosPage,
    DjePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
