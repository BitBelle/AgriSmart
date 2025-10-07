import { Routes } from '@angular/router';
import { AdviceFeedComponent } from './components/farmerDashbord/advice-feed/advice-feed.component';
import { WeatherWidgetComponent } from './components/farmerDashbord/weather-widget/weather-widget.component';
import { CropTrackingComponent } from './components/farmerDashbord/crop-tracking/crop-tracking.component';
import { FarmerDashboardComponent } from './components/farmerDashbord/farmer-dashboard/farmer-dashboard.component';
import { ProfileComponent } from './components/farmerDashbord/profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticlesComponent } from './components/knowledgeHub/articles/articles.component';
import { ExpertAdviceComponent } from './components/knowledgeHub/expert-advice/expert-advice.component';
import { FaqsComponent } from './components/knowledgeHub/faqs/faqs.component';
import { ProductsComponent } from './components/marketPlace/products/products.component';
import { TransactionComponent } from './components/marketPlace/transaction/transaction.component';
import { ForumsComponent } from './components/forums/forums.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';

// import { ArticleListComponent } from './components/article-list/article-list.component';
// import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // welcome page
  // {path: 'welcome', component:WelcomepageComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},

  { path: 'home', component: HomepageComponent },
  { path: 'dashboard', component: FarmerDashboardComponent },

  // Farmer Dashboard
  { 
    path: 'profile', 
    component: ProfileComponent ,
    children: [
      //child route lazy loading
      {
        path: 'my-farm',
        loadComponent: () => import('././components/farmerDashbord/my-farm/my-farm.component')
          .then(m => m.MyFarmComponent)
      },
      {
        path: 'market-trends',
        loadComponent: () => import('././components/farmerDashbord/market-trends/market-trends.component')
          .then(m => m.MarketTrendsComponent)
      },
    ]
  },

  { path: 'crop-tracking', component: CropTrackingComponent },
  { path: 'recommendations', component: AdviceFeedComponent },
  { path: 'weather', component: WeatherWidgetComponent },

  // Knowledge Hub
  { path: 'knowledge-hub/articles', component: ArticlesComponent },
  { path: 'knowledge-hub/expert-advice', component: ExpertAdviceComponent },
  { path: 'knowledge-hub/faq', component: FaqsComponent },

  //market place
  { path: 'marketplace/products', component: ProductsComponent },
  { path: 'marketplace/transactions', component: TransactionComponent },

  // forums
  { path: 'community/forums', component: ForumsComponent},


  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];
