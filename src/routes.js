import React from "react";
import About from "./components/HeadersComponents/About/about";
import Contacts from "./components/HeadersComponents/Contacts/contacts";
import Home from "./components/HeadersComponents/Home/home";
import Login from "./components/HeadersComponents/Login/login";
import Registration from "./components/HeadersComponents/Registration/registration";
import Portfolio from "./components/HeadersComponents/Portfolio/portfolio";
import Skills from "./components/HeadersComponents/Skills/skills";
import SliderImg from "./components/HeadersComponents/Slider/slider";
import Posts from "./components/HeadersComponents/Posts/posts";
import Post from "./components/HeadersComponents/Posts/Post/post";
import {
    ABOUT_PAGE,
    CONTACTS_PAGE,
    HOME_PAGE,
    LOGIN_PAGE,
    PORTFOLIO_PAGE,
    REGISTRATION_PAGE,
    SKILLS_PAGE,
    SLIDER_PAGE,
    POSTS_PAGE,
    POST_PAGE, NEWPOST_PAGE, COUNT_PAGE
} from "./UtilsURL/urla";
import NewPost from "./components/NewPost/newPost";
import Count from "./components/HeadersComponents/Count/count";

//*checked*//


export const isAuthRoutes = [
    {
        id: 1,
        path: HOME_PAGE ,
        Component: Home,
        name: "Home"
    },
    {
        id: 2,
        path: ABOUT_PAGE ,
        Component: About,
        name: "Photos"
    },
    {
        id: 3,
        path: CONTACTS_PAGE ,
        Component: Contacts,
        name: "Contacts"
    },
    {
        id: 4,
        path: PORTFOLIO_PAGE ,
        Component: Portfolio,
        name: "Portfolio"
    },
    {
        id:5,
        path: SKILLS_PAGE ,
        Component: Skills ,
        name: "Skills"
    },
    {
        id:6,
        path: POSTS_PAGE ,
        Component: Posts ,
        name: "Posts"
    },
    {
        id:7,
        path: POST_PAGE,
        Component:Post
    },
    {
        id:8,
        path: SLIDER_PAGE ,
        Component: SliderImg ,
        name: "Slider"
    },
    {
        id:9,
        path: NEWPOST_PAGE ,
        Component: NewPost ,
        name: "NewPost"
    },
    {
        id:10,
        path: COUNT_PAGE ,
        Component: Count ,
        name: "Count"
    }

]
export const notAuthRoutes = [
    {
        id: 11,
        path: LOGIN_PAGE ,
        Component: Login,
        name: "Login"
    },
    {
        id:12,
        path: REGISTRATION_PAGE ,
        Component: Registration,
        name: "Registration"
    }
]