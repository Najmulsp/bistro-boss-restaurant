import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";

import Recommends from "./Recommends";
import Testimonial from "./Testimonial";
import SectionTitle from "../../shared/SectionTitle";
import PopularMenu from "./PopularMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bitro Boss/ Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <div>
            <SectionTitle heading="From Our Menu" subHeading="---From 11.00 am to 10.00 pm---"></SectionTitle>
            <PopularMenu></PopularMenu>
            </div>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;