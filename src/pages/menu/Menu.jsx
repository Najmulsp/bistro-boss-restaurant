import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import coverImg1 from "../../assets/menu/banner3.jpg";
import coverImg2 from "../../assets/menu/dessert-bg.jpeg";
import coverImg3 from "../../assets/menu/pizza-bg.jpg";
import coverImg4 from "../../assets/menu/salad-bg.jpg";
import coverImg5 from "../../assets/menu/soup-bg.jpg";

import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../shared/SectionTitle";
import MenuItems from "../../shared/MenuItems";



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter( item => item.category === 'dessert');
    const salads = menu.filter( item => item.category === 'salad');
    const pizzas = menu.filter( item => item.category === 'pizza');
    const soups = menu.filter( item => item.category === 'soup');
    const offereds = menu.filter( item => item.category === 'offered');
    
    return (
        <div>
            <Helmet>
                <title>Home/ Our Menu</title>
            </Helmet>
            {/* Offered */}
            <Cover img={coverImg1} title="Our menu" details="Would You Like to Try A Dish.">
            </Cover>
            <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't Miss---"></SectionTitle>
            <MenuItems items={offereds} btnText="Order Your Favorite Food"></MenuItems>
            {/* Desserts */}
            <div className="mt-10">
            <Cover img={coverImg2} title="DESSERTS" details="Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette.">
            </Cover>
            <div className="mt-10">
            <MenuItems items={desserts} title="Dessert" btnText="Order Your Favorite Food"></MenuItems>
            </div>
            </div>
            {/* Pizza */}
            <div className="mt-10">
            <Cover img={coverImg3} title="PIZZAS" details="Sautéed breaded veal escalope with watercress, lemon and veal jus.">
            </Cover>
            <div className="mt-10">
            <MenuItems items={pizzas} title="Pizza" btnText="Order Your Favorite Food"></MenuItems>
            </div>
            </div>
            {/* Salad */}
            <div className="mt-10">
            <Cover img={coverImg4} title="SALADS" details="Warm goats cheese and roasted vegetable salad with black olive tapenade crostini.">
            </Cover>
            <div className="mt-10">
            <MenuItems items={salads} title="Salad" btnText="Order Your Favorite Food"></MenuItems>
            </div>
            </div>
            {/* Soup */}
            <div className="mt-10">
            <Cover img={coverImg5} title="SOUPS" details="Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus.">
            </Cover>
            <div className="mt-10">
            <MenuItems items={soups} title="Soup" btnText="Order Your Favorite Food"></MenuItems>
            </div>
        </div>
            
        </div>
    );
};

export default Menu;