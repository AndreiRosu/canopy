import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LgAccordionModule,
  LgAlertModule,
  lgBrandIconCalendar,
  LgBrandIconModule,
  LgBrandIconRegistry,
  LgBreadcrumbModule,
  LgButtonModule,
  LgCardModule,
  LgCarouselModule,
  LgCheckboxGroupModule,
  LgDataPointModule,
  LgDateFieldModule,
  LgDetailsModule,
  LgFilterContainerModule,
  LgFooterModule,
  LgGridModule,
  LgHeaderModule,
  LgHeadingModule,
  LgHeroModule,
  LgHintModule,
  lgIconAdd,
  lgIconArrowDown,
  lgIconClose,
  lgIconFilter,
  LgIconModule,
  LgIconRegistry,
  lgIconRepeat,
  lgIconSearch,
  lgIconSecureMessaging,
  lgIconCheckmark,
  LgInputModule,
  LgLinkMenuModule,
  LgListWithIconsModule,
  LgMarginModule,
  LgPaddingModule,
  LgPageModule,
  LgPaginationModule,
  LgPrimaryMessageModule,
  LgPromoCardModule,
  LgQuickActionModule,
  LgRadioModule,
  LgSelectModule,
  LgSeparatorModule,
  LgSideNavModule,
  LgSortCodeModule,
  LgSpinnerModule,
  LgTabsModule,
  LgToggleModule,
  LgProgressIndicatorModule,
} from 'canopy';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoryContentComponent } from './story-content.component';

@NgModule({
  declarations: [ AppComponent, StoryContentComponent ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    LgAccordionModule,
    LgAlertModule,
    LgBrandIconModule,
    LgBreadcrumbModule,
    LgButtonModule,
    LgCardModule,
    LgCarouselModule,
    LgCheckboxGroupModule,
    LgDataPointModule,
    LgDateFieldModule,
    LgDetailsModule,
    LgFilterContainerModule,
    LgFooterModule,
    LgGridModule,
    LgHeaderModule,
    LgHeadingModule,
    LgHeroModule,
    LgHintModule,
    LgIconModule,
    LgInputModule,
    LgListWithIconsModule,
    LgMarginModule,
    LgPaddingModule,
    LgPageModule,
    LgPaginationModule,
    LgPaddingModule,
    LgPrimaryMessageModule,
    LgPromoCardModule,
    LgQuickActionModule,
    LgRadioModule,
    LgSelectModule,
    LgSeparatorModule,
    LgSideNavModule,
    LgSortCodeModule,
    LgSpinnerModule,
    LgTabsModule,
    LgToggleModule,
    LgLinkMenuModule,
    LgProgressIndicatorModule,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  constructor(
    private iconRegistry: LgIconRegistry,
    private brandIconRegistry: LgBrandIconRegistry,
  ) {
    this.iconRegistry.registerIcons([
      lgIconAdd,
      lgIconArrowDown,
      lgIconClose,
      lgIconSearch,
      lgIconRepeat,
      lgIconSecureMessaging,
      lgIconFilter,
      lgIconCheckmark,
    ]);

    this.brandIconRegistry.registerBrandIcon([ lgBrandIconCalendar ]);
  }
}
