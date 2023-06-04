import React, { useState } from 'react';
import Cover from '../../../Shared/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenu } from '../../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderFood = () => {
    const categories = ['salads', 'pizza', 'soups', 'desserts', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    console.log(initialIndex)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const salads = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div className='mx-auto text-center'>
          <Helmet>
            <title>Bistro Boss | Order Food</title>
          </Helmet>
            <Cover img={coverImg} title={"Our Order food"} subTitle={"Would you like to try a dish?"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => {
                console.log(index)
                setTabIndex(index)}}>
  <TabList focusTabOnClick={true} className='border-0 mb-16'>
   <div className='w-full flex justify-center '>
   <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
   </div>
  </TabList>
  <TabPanel>
    <OrderTab items={salads}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={pizza}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soups}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={dessert}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default OrderFood;