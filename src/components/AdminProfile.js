import React from 'react';
import "../styles/AdminProfile.css";
import accountImage from "../assets/account.png";

const adminProfile = () => {
  return (
    <section className='profile'>
      <div>
        <h2>Profile</h2>
      </div>

      <div>
        <div className='pic'>
          <img src={accountImage} alt='Profile' />
        </div>

        <div className='profile-details'>
          <div className='user-name'>
            <h4>Name:</h4>
            <p>Navneet Kumar</p>
          </div>
          <div className='user-email'>
            <h4>Email:</h4>
            <p>navneet@gmail.com</p>
          </div>
        </div>
      </div>

      <div className='edit-profile'>
        <button>Update Profile</button>
      </div>

    </section>
  )
}

export default adminProfile;