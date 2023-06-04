import React from 'react';
import ItemMenu from '../../Shared/ItemMenu/ItemMenu';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({items, img, title, subTitle}) => {
    return (
        <div>
            { title &&   <Cover img={img} title={title} subTitle={subTitle}></Cover>}
        <div className='grid md:grid-cols-2 gap-y-8 gap-x-2 my-16'>
                {
                    items.map(item => <ItemMenu
                    key={item._id}
                    item={item}
                    >
                    </ItemMenu>)
                }
            </div>
            <div className='w-full flex justify-center my-8'>
          <Link to={`/order/${title}`}><button className='btn btn-outline  border-0 border-b-4 text-xl uppercase'>ORDER YOUR FAVOURITE FOOD</button></Link>
           </div>
        </div>
    );
};

export default MenuCategory;