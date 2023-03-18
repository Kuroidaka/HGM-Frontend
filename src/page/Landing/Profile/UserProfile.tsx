import React from 'react';
import './user.css';
import avatar from 'src/assert/img/user/avatar.jpg';
import banner from 'src/assert/img/user/banner.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img className="avatar" src={avatar} alt="Avatar" />
        <img className="banner" src={banner} alt="Banner" />
      </div>
      <div className="profile-details">
        <h2> User Name</h2>
        <p><AiOutlineMail /> user@gmail.com</p>
        <p><FaPhoneAlt /> <span>(122) 000 111</span></p>
      </div>
      <div className="profile-menu">
        <ul>
          <li><a href="#">Account Settings</a></li>
          <li><a href="#">Manage Password</a></li>
          <li><a href="#">Order History</a></li>
          <li><a href="#">Payment Methods</a></li>
          <li><a href="#">Address</a></li>
          <li><a href="#">Notifications</a></li>
        </ul>
      </div>
      <div className="order-history">
        <h3>Order History</h3>
        <p>Here you can manage your order</p>
        <div className="search-bar">
          <input type="text" placeholder="Search for OrderID or Product"/>
          <button><BiSearchAlt /></button>
        </div>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1234</td>
                <td>2023-03-17</td>
                <td>2</td>
                <td>$100.00</td>
                <td>Delivered</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>#5678</td>
                <td>2023-03-16</td>
                <td>1</td>
                <td>$50.00</td>
                <td>Cancelled</td>
                <td><button>View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;