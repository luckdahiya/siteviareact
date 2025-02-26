import React from 'react'
import { Menu_list } from '../Menu/Menuu'
import './Exploremenu.css'

const Exploremenu = () => {
  return (
    <>
    <h1>Exploremenu</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eum vel recusandae deleniti dicta aperiam provident dolor quod suscipit ratione soluta in neque numquam harum quam, atque voluptas ipsam temporibus.</p>
    <div id="menulist">
        {Menu_list.map((item,index)=>
        {
            return(
                <div key={index} id='menu'>
                    <img src={item.menu_image} alt="" />
                    <div id="name">
                    <p>{item.menu_name}</p>
                    </div>
                    </div>
            )
        })}
    </div>
    </>
  )
}

export default Exploremenu