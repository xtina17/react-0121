import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {SkillsProviders} from "./components/Providers/skillsProvider";
import {PortfolioProvider} from "./components/Providers/portfolioProvider";
import {SliderProvider} from "./components/Providers/sliderProvider";
import {PostsProvider} from "./components/Providers/postsProvider";
import {PercentProvider} from "./components/Providers/percentProvider";
import {Provider} from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
    <BrowserRouter>
        <PortfolioProvider>
            <SkillsProviders>
                <SliderProvider>
                    <PostsProvider>
                        <PercentProvider>
                            <Provider store={store}>
                                <App />
                            </Provider>
                        </PercentProvider>
                    </PostsProvider>
                </SliderProvider>
            </SkillsProviders>
        </PortfolioProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

