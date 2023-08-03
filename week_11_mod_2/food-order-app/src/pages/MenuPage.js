import React, { useEffect, useState } from 'react';
import fetchData from '../data';
import CountButton from '../components/CountButton';
import styled from 'styled-components';


const Wrapper = styled.div`
   padding-left: 100px;
  display: flex;
  flex-direction: row;

`;


const MenuPage = (props) => {
  const [menuItem, setMenuItem] = useState([]);
 
  console.log(props)

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await fetchData();
      console.log(data); // 添加这行来查看返回的数据
      if (Array.isArray(data)) {
        setMenuItem(data);
      }
    };

    fetchMenuData();
  }, []);

  // const price = burger.price;

  return (
    <div>
      <h1>Menu</h1>
      
      {/* 在这里使用 menuData 显示数据 */}
      {menuItem.map((burger) => (
        <div key={burger.id}>
          <main>
          <h2>{burger.name}</h2>
          <img src={burger.image_url} alt={burger.name} />
          <p>{burger.description}</p>
          </main>
          <Wrapper>
          <aside><CountButton price={burger.price}  /></aside>
          </Wrapper>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;
