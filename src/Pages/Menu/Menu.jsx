import React from 'react';
import { Helmet } from 'react-helmet-async';
import ourMenu from '../../assets/menu/banner3.jpg'
import Cover from '../../Shared/Cover/Cover';
import { useMenu } from '../../hooks/useMenu';
import Title from '../../Components/Title/Title';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
           <Helmet><title>Bistro Boss | Menu</title></Helmet>
           <Cover img={ourMenu} title={"Our Menu"} subTitle={"Would you like to try a Dish"}></Cover>
           {/* Offered Menu */}
          <Title subHeading="Don't miss" Heading="today's offer"></Title>
          <MenuCategory items={offered}></MenuCategory>
          {/* Dessert Menu */}
          <MenuCategory items={desserts} img={dessertImg} title={"desserts"} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam mollitia quas nemo provident dignissimos tempore impedit voluptatibus laboriosam velit."}></MenuCategory>
          {/* Pizza Menu */}
        <MenuCategory items={pizza} title={"pizza"} img={pizzaImg} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam mollitia quas nemo provident dignissimos tempore impedit voluptatibus laboriosam velit."}></MenuCategory>
        {/* Salads Menu */}
        <MenuCategory items={salads} img={saladImg} title={"salads"} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam mollitia quas nemo provident dignissimos tempore impedit voluptatibus laboriosam velit."}></MenuCategory>
        {/* Soups Menu */}
        <MenuCategory items={soups} img={soupImg} title={"soups"} subTitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam mollitia quas nemo provident dignissimos tempore impedit voluptatibus laboriosam velit."}></MenuCategory>
        </div>
    );
};

export default Menu;