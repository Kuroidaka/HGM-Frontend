import React from 'react';
import avatar from 'src/assert/img/user/avatar.jpg';
import banner from 'src/assert/img/user/banner.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { img } from '~/assert/img/index'
import { icon } from '~/assert/icon/icon'
import Avatar from '~/component/Avatar';

function UserProfile() {
  return (
    <Container className="user-profile">
      <div className="profile-header">  
          <div className="avatar-container">
              <div className="avatar-inner">
                <Avatar src={img.defaultAvatar} width='100%' />
                <div className="icon-wrapper">
                  <icon.edit/>
                </div>
              </div>

          </div>
        <img className="banner" src={banner} alt="Banner" />
      </div>
      <div className="profile-details">
        <h2> User Name</h2>
        <p><AiOutlineMail /> user@gmail.com</p>
        <p><FaPhoneAlt /> <span>(122) 000 111</span></p>
      </div>
      <div className="profile-menu">
        <ul>
          <li><Link to={'#'}>Account Settings</Link></li>
          <li><Link to={'#'}>Manage Password</Link></li>
          <li><Link to={'#'}>Order History</Link></li>
          <li><Link to={'#'}>Payment Methods</Link></li>
          <li><Link to={'#'}>Address</Link></li>
          <li><Link to={'#'}>Notifications</Link></li>
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
    </Container>
  );
}
export default UserProfile;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;


.profile-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  align-items: flex-end;
}

.profile-details {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}

.profile-details p {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.profile-details p svg {
  margin-right: 0.5rem;
}

.profile-details p span {
  margin-left: 0.5rem;
}

.avatar-container {
  position: absolute;
  width: 130px;
  margin: auto;
  z-index: 1;
  margin-left: 20px;
  
  /* Để hình avatar được hiển thị trên banner */

  .avatar-inner {
    position: relative;
    transform: translateY(13px);

    .icon-wrapper {
      top: 0px;
      position: absolute;
      right: 0px;
      width: 30px;
      height: 30px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background-color: white;
      border-radius: 7px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      cursor: pointer;

      svg {
        font-size: 20px;
      }
    }

  }
}

.banner {
  width: 100%;
  height: 175px;
  object-fit: cover;
  border-radius: 20px;
}

.profile-details {
  position: relative;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
}

h2 {
  margin-bottom: 5px;
  font-size: 28px;
}

p {
  color: #888;
}

.profile-menu {
  margin-bottom: 40px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

a {
  color: #333;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.2s ease;
}

a:hover {
  color: #666;
}

.order-history {
  margin-bottom: 10px;
  margin-top: 40px;
  padding: 20px;
  background-color: #f5f5f5;
}

h3 {
  margin-bottom: 20px;
  font-size: 24px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f2f2f2;
}

th {
  text-align: left;
  padding: 10px;
  font-weight: normal;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

td {
  padding: 10px;
}

td:first-child {
  width: 30%;
}

/* Style for the profile menu */
.profile-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.profile-menu li {
  margin-bottom: 10px;
}

.profile-menu a {
  color: #333;
  text-decoration: none;
  display: block;
  padding: 10px;
  border-radius: 5px;
  background-color: #eee;
  transition: background-color 0.3s ease;
}

.profile-menu a:hover {
  background-color: #ccc;
}

/* Style for the order history table */
.order-history table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.order-history th,
.order-history td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.order-history th {
  background-color: #eee;
  font-weight: normal;
}

.order-history tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccc;
  outline: none;
  width: 70%;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;
}

.order-table {
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.order-table table {
  border: 1px solid #ddd;
  text-align: left;
  background-color: #fff;
}
.order-table th, .order-table td {
  padding: 12px;
  border: 1px solid #ddd;
}
.order-table th {
  background-color: #f2f2f2;
  color: #444;
}
.order-table td button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.order-table td button:hover {
  background-color: #3e8e41;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
}

tr:hover {
  background-color: #f5f5f5;
}

button {
  padding: 15px;
  background-color: #4c90af;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}
`