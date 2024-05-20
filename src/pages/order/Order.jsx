import orderImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import Cover from "../../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FoodTabs from "../../shared/FoodTabs";



const Order = () => {
    const categories = ['Salad', 'Pizza' , 'Soup', 'Dessert', 'Drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabindex, setTabIndex] = useState(initialIndex)
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

 
  return (
    <div>
        <Helmet>
                <title>Home/ Order Food</title>
            </Helmet>
      <Cover
        img={orderImg}
        title="OUR FOODS"
        details="Would You Like to Try a Dish.Then Order Your Dish"
      ></Cover>
      <Tabs className="text-center mx-4 my-10"
       defaultIndex={tabindex}
        onSelect={(index) => setTabIndex(index)}>
        <TabList className="py-4 ">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        <TabPanel>
        <FoodTabs items={salads}></FoodTabs>
        </TabPanel>
        <TabPanel>
        <FoodTabs items={pizzas}></FoodTabs>
        </TabPanel>
        <TabPanel>
        <FoodTabs items={soups}></FoodTabs>
        </TabPanel>
        <TabPanel>
        <FoodTabs items={desserts}></FoodTabs>
        </TabPanel>
        <TabPanel>
        <FoodTabs items={drinks}></FoodTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
