import React, { Component } from 'react'
import Slides from '../shared/Slides/Slides';
import Sobre from '../shared/Sobre/Sobre';
import Destaque from '../shared/Destaque/Destaque';
import PremiumSection from '../shared/PremiumSection/PremiumSection';
import Footer from '../shared/Footer/Footer';
class Home extends Component {
    render() {
        return (
            <> 
                <Slides />  
                <Sobre />  
                <Destaque />  
                <PremiumSection />  
                <Footer />  
            </>
        );
    }
}
export default Home;