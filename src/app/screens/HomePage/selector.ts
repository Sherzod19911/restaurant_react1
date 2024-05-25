import { createSelector } from "@reduxjs/toolkit"
import { AppRootState } from "../../../types/screen"


const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTodaysMenus = createSelector(
    selectHomePage,
(HomePage) => HomePage.todaysMenus
);

export const retrieveMenuPanel = createSelector(
    selectHomePage,
(HomePage) => HomePage.menuPanel
);

export const retrieveSpecialMenu = createSelector(
    selectHomePage,
(HomePage) => HomePage.specialMenu
);

export const retrieveBestBoarticles = createSelector(
    selectHomePage,
(HomePage) => HomePage.bestBoarticles
);

export const retrieveTrendBoarticles= createSelector(
    selectHomePage,
(HomePage) => HomePage.trendBoarticles
);

export const retrieveNewsBoarticles= createSelector(
    selectHomePage,
(HomePage) => HomePage.newsBoarticles
);