import React from 'react';
import './Dishes.css'
import img1 from './img1.jpg'; 
import img2 from './img4.jpg';
import img3 from './img3.jpg';
import img4 from './img2.jpg';

function Dishes() {
  const dishes = [
    {
      
      img: img1,
      title: 'Dish A',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis adipisci. Nostrum perferendis, a et doloremque non ad quasi distinctio tempore molestias accusantium voluptatem architecto iusto itaque quod alias maxime.',
      price: '$9.99',
    },
    {
      img: img2,
      title: 'Dish B',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id sint, porro corporis sit placeat quidem esse est eligendi dolorum omnis quaerat animi aspernatur numquam excepturi ea consectetur, illum quas delectus.',
      price: '$11.00',
    },
    {
      img: img3,
      title: 'Dish C',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium repellendus nostrum nobis necessitatibus, unde consectetur dolor veritatis distinctio provident laboriosam ipsa itaque at repudiandae dolore, accusamus ea, nulla mollitia.',
      price: '$3.99',
    },
    {
      img: img4,
      title: 'Drinks',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis animi dolorem debitis! Officiis veniam eligendi, doloremque esse dolor omnis? Rem delectus itaque, neque aliquid tenetur atque eaque esse tempore?',
      price: '$4.99',
    },
    {
      img: img1,
      title: 'Dish A',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut aspernatur adipisci deleniti cupiditate? Ab voluptas ipsum ea commodi voluptates? Odit blanditiis voluptatibus corporis itaque suscipit temporibus mollitia. Nostrum, doloribus.',
      price: '$7.99',
    },
    {
      img: img2,
      title: 'Dish B',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium deserunt quia blanditiis magnam, corrupti, aperiam vitae est obcaecati dolor labore veritatis distinctio iusto sapiente maxime a quae laborum, expedita libero?',
      price: '$6.99',
    },
    {
      img: img3,
      title: 'Dish C',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum quia modi pariatur. Temporibus porro earum cumque nihil? Numquam, obcaecati! Quasi aspernatur modi nulla consectetur unde ipsa quia libero cumque.',
      price: '$8.99',
    },
    {
      img: img4,
      title: 'Drinks',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique magni doloribus, veniam omnis sunt. Quasi voluptas natus commodi vero perferendis sapiente est sed maiores velit provident voluptatum, impedit id!',
      price: '$5.99',
    },
    {
      img: img1,
      title: 'Dish E',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, tenetur, amet vel debitis velit eum obcaecati tempora odio aliquid dolorum incidunt. Delectus, eaque adipisci non explicabo aliquam hic atque aut!',
      price: '$9.50',
    },
    {
      img: img2,
      title: 'Dish F',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum animi asperiores illum aliquid fugit sint temporibus cum illo placeat nihil. Voluptates nihil iusto facilis optio eaque dolor quibusdam laboriosam reiciendis?',
      price: '$7.50',
    },
    {
      img: img3,
      title: 'Dish G',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit necessitatibus numquam nam culpa, tenetur vero atque obcaecati animi quidem soluta totam modi quod accusamus harum iste natus commodi adipisci voluptatibus.',
      price: '$10.00',
    },
    {
      img: img4,
      title: 'Drinks',
      description: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi at accusamus nam ex corrupti ea mollitia harum adipisci culpa voluptatem nesciunt quis unde eaque voluptatum dolores ipsum, labore enim.',
      price: '$12.00',
    },
  ];

  return (
    <div id="cart">
      <div id="cart-container">
        {dishes.map((dish, idx) => (
          <div key={idx} id="cart1">
            <img src={dish.img} alt={`${dish.title} not found`} />
            <h1>{dish.title}</h1>
            <p>{dish.description}</p>
            <h2>{dish.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;
