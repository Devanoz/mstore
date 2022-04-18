import React from 'react'


//import components
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Hero from "../component/homeComponents/Hero";
import ShopSection from "../component/homeComponents/ShopSection";
import Hero from '../component/homeComponents/Hero';


class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero/>
                <ShopSection />
            </div>
        );
    }
}

// hai andy
export default Home;