import React, { Component } from 'react'
import Slides from '../shared/Slides/container';
import Sobre from '../shared/Sobre/container';
import Destaque from '../shared/Destaque/container';
import PremiumSection from '../shared/PremiumSection/container';
class Home extends Component {
    render() {
        return (
            <> 
                <Slides />  
                <Sobre />  
                <Destaque />  
                <PremiumSection />  
            </>
        );
    }
}
export default Home;