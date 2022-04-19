import React from 'react';
import HomeBanner from './HomeBanner';
import Navigation from '../../Components/Navigation/Navigation'

import HomePizza from './HomePizza';
import HomeBurger from './HomeBurger';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <HomePizza></HomePizza>
            <HomeBurger></HomeBurger>

            <Footer></Footer>
        </div>
    );
};

export default Home;