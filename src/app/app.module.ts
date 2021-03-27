import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { storeProvider } from '../providers/services-user/storeService';
import { HttpClientModule } from '@angular/common/http';
import { ServicesPubProvider } from '../providers/services-pub/services-pub';
import { ServicesRestaurantsProvider } from '../providers/services-restaurants/services-restaurants';
import { ServicesPharmacyProvider } from '../providers/services-pharmacy/services-pharmacy';
import { ProductsPage } from '../pages/products/products';
import { ProductsProvider } from '../providers/products/products';
import { AddProductsPage } from '../pages/add-products/add-products';
import { AddStorePage } from '../pages/add-store//add-store';

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
    ProductsPage,
    AddProductsPage,
    AddStorePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
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
    ProductsPage,
    AddProductsPage,
    AddStorePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    storeProvider,
    ServicesPubProvider,
    ServicesRestaurantsProvider,
    ServicesPharmacyProvider,
    ProductsProvider,
    AddProductsPage
  ],
})
export class AppModule {}
