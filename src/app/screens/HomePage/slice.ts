import { createSlice} from "@reduxjs/toolkit";
import { HomePageState } from "../../../types/screen";
import { SpecialMenu } from "./specialMenu";

const initialState :  HomePageState = {
    todaysMenus: [],
    menuPanel: [],
    specialMenu: [],
    bestBoarticles: [],
    trendBoarticles: [],
    newsBoarticles: [],
    
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setTodaysMenus: (state, action)=> {
            state.todaysMenus = action.payload
        },
        setMenuPanel: (state, action)=> {
            state.menuPanel = action.payload
        },
        setSpecialMenu: (state, action)=> {
            state.specialMenu = action.payload
        },
        setBestBoarticles: (state, action)=> {
            state.bestBoarticles = action.payload
        },
        setTrendBoarticles: (state, action)=> {
            state.trendBoarticles = action.payload
        },
        setNewsBoarticles: (state, action)=> {
            state.newsBoarticles = action.payload
        }
    }
});

export const {
    setTodaysMenus, 
    setMenuPanel, 
    setSpecialMenu, 
    setBestBoarticles,
    setTrendBoarticles,
    setNewsBoarticles
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;

export default HomePageReducer;