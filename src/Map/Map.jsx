import React from 'react';
import './Map.css'

function Map() {
  return (
    <>
    <div id="map">
        <h1>Get In Touch</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ut fuga modi velit reprehenderit atque illo accusantium maxime et porro dignissimos cum tenetur eum nemo eveniet animi, omnis aut quod! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae cupiditate, ducimus harum amet magni commodi nulla id tenetur. Optio, voluptatem. Vel eum neque nostrum necessitatibus. Iure itaque impedit optio cum? </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.180116463787!2d77.28366925320911!3d28.635904660602726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb5034037b69%3A0x833f7bdabb4ed317!2sPreet%20Vihar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1726401448440!5m2!1sen!2sin"
        width="98%"
        height="600px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </>
  );
}

export default Map;
