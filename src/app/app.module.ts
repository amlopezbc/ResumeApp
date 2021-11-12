import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfilePicComponent } from './components/profile-pic/profile-pic.component';
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { HomeBackgroundComponent } from './components/home-background/home-background.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeCardComponent } from './components/resume-card/resume-card.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { TechStackCardComponent } from './components/tech-stack-card/tech-stack-card.component';
import { ReferenceCardComponent } from './components/reference-card/reference-card.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { QuoteComponent } from './components/quote/quote.component';
import { DegreeCategoryComponent } from './components/degree-category/degree-category.component';
import { NavCirclesComponent } from './components/nav-circles/nav-circles.component';
import { ResumeAboutMeComponent } from './components/resume-about-me/resume-about-me.component';
import { ResumeExperienceComponent } from './components/resume-experience/resume-experience.component';
import { ResumeReferencesComponent } from './components/resume-references/resume-references.component';
import { WeatherComponent } from './components/weather/weather.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    ProfilePicComponent,
    HomeComponent,
    TitleComponent,
    HomeBackgroundComponent,
    PersonalInfoComponent,
    FooterComponent,
    ResumeComponent,
    ContactComponent,
    ResumeCardComponent,
    ExperienceCardComponent,
    TechStackCardComponent,
    ReferenceCardComponent,
    ProgressBarComponent,
    HobbiesComponent,
    LearnMoreComponent,
    QuoteComponent,
    DegreeCategoryComponent,
    NavCirclesComponent,
    ResumeAboutMeComponent,
    ResumeExperienceComponent,
    ResumeReferencesComponent,
    WeatherComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
