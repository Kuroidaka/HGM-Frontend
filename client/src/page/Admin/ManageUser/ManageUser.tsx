import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import styled from 'styled-components'
import { img } from '~/assert/img';
import { icon } from '~/assert/icon';
import AddNewUser from '~/component/Modal/AddNewUser/AddNewUser';
import Button from '~/component/Button/Button';

const listUser = [ 
    {
        id: 1,
        username: 'idaka123',
        name: 'Canh Pham',
        role: 'admin',
        phone: '0949764207',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },
    {
        id: 2,
        username: 'Tram',
        name: 'Tram Huynh',
        role: 'manager',
        phone: '0385859098',
        status: false,
        createDate: Date.now(),
        avatar: img.logo
    },
    {
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },{
        id: 3,
        username: 'tinhmuaha123',
        name: 'Huynh Minh',
        role: 'admin',
        phone: '123456789',
        status: true,
        createDate: Date.now(),
        avatar: img.avatar
    },
]

const ManageUser = () => {
    const [userList, setUserList] = useState(listUser)
    const [isAddNew, setIsAddNew] = useState<boolean>(false)

    const handleOpenAddNew = () => {
        setIsAddNew(true)
    }

    return ( 
        <Container>
            { isAddNew && <AddNewUser setIsAddNew={setIsAddNew} />}

            <header>
                <div className="title">
                    Users
                </div>

                <div className="description">
                    Managing user's state
                </div>
            </header>


            <div className='form'>
                <div className="content">

                    <div className="add">

                        <Button title='Add New' handleOnClick={handleOpenAddNew}>
                            <AiOutlineUserAdd/>
                        </Button>

                    </div>

                    <div className="search">
                        <input type="text" placeholder='Search user...'/>
                    </div>


                    <table className="list">
                        <thead>
                            <tr>
                                <th id='id' style={{textAlign: 'center'}}>ID</th>
                                <th id='user'>User</th>
                                <th id='phone'>Phone Number</th>
                                <th id='email'>Email</th>
                                <th id='status'>Status</th>
                                <th id='date'>Create Date</th>
                                <th id='role'>Access Level</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {userList.map((user, idx) => {
                            return (
                                <tr key={idx} style={idx % 2 ===0 ? {backgroundColor: 'var(--light-bg)'}: {}}>
                                    <td style={{textAlign: 'center'}}>{user.id}</td>
                                    <td>
                                        <div className="user">
                                            <div className="img-wrap">
                                                <img src={user.avatar} alt="" />
                                            </div>
    
                                            <div className="info">
                                                <div className="name">{user.name}</div>
                                                <div className="username">{user.username}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.phone}</td>
                                    <td>{user.phone}</td>
                                    
    
                                    <td className={`${user.status? 'online' : 'offline'}`}>
                                       <span>{user.status? 'Online' : 'Offline'}</span> 
                                    </td>
    
                                    <td>{user.createDate}</td>
                                    <td><div className='role-btn'>
                                        <icon.adminRole />
                                        <span>{user.role}</span>
                                    </div></td>
                                </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>


        </Container>
    );
}
 
export default ManageUser;

const Container = styled.div`
    height: calc(100vh - var(--header-height));
    

    header {
        padding: 16px 20px;

        .title {
            font-size: 2rem;
            font-weight: 900;
        }

        .description {
            color: var(--secondary_admin);
            font-size: 1.4rem;
        }
    }

    .form {
        max-width: calc(100% - 40px);
        margin: 16px 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        background-color: #ffffff;
        border-radius: 10px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

            .content{
                height: 100%;
                width: 100%;
                padding: 20px;
                display: flex;
                flex-wrap: wrap;

                .add{
                    flex: 1;
                    button{
                        border: none;
                        padding: 8.8px 16px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                        border-radius: 5px;
                        gap: 7px;
                        background-color: var(--third_admin);
                        color: white;
                        font-size: 1.2rem;
                        transition: all .2s ease-in-out;
                    
                        &:hover {
                            box-shadow: 0 0.1rem 0.5rem rgb(37 71 106 / 50%), 0 0.25rem 1rem rgb(55 60 67 / 20%);
                        }
                    }
                
                }

                .search{

                    input{
                        display: block;
                        width: 280px;
                        padding: 0.55rem 1rem;
                        font-size: 1.35rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #75868f;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid rgba(0,0,0,.07);
                        appearance: none;
                        border-radius: 0.4375rem;
                        box-shadow: inset 0 1px 2px rgb(55 60 67 / 8%);
                        transition: border-color .35s ease-in-out,box-shadow .35s ease-in-out;

                        &:focus{
                            color: #75868f;
                            background-color: #fff;
                            border-color: #25476a;
                            outline: 0;
                            box-shadow: inset 0 1px 2px rgb(55 60 67 / 8%), 0 0 0.75rem 0 rgb(0 0 0 / 13%);
                        }
                    }
                }

                .list{
                    width: 100%;

                    thead, tbody tr {
                        display: table;
                        width: 100%;
                        table-layout: fixed;/* even columns width , fix width of table too*/
                    }

                    thead{
                        font-size: 1.3rem;
                        border-bottom: 2px solid black;

                        tr{
                            th{
                                text-align: start;
                                padding: 12px 8px;
                            }
                        }
                    }

                    tbody{
                        display: block;
                        height: 60vh;
                        overflow: auto;

                        tr{
                            font-size: 1.2rem;
                            td{
                                color: var(--text-color);
                                padding: 12px 8px;


                                .role-btn{
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    gap: 5px;
                                    background: var(--role-admin);
                                    color: white;
                                    max-width: 100px;
                                    height: 30px;
                                    border-radius: 7px;

                                    svg{
                                        font-size: 1rem;
                                    }
                                }

                                &.online{
                                    span {
                                        color: var(--online);
                                    }
                                }

                                &.offline{
                                    span {
                                        color: var(--offline);
                                    }
                                }

                                .user{
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                .img-wrap{
                                    width: 40px;
                                    height: 40px;
                                    overflow: hidden;
                                    border-radius: 50%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                }

                                img{
                                    width: 100%;
                                }
                                }

                                .info{
                                    margin-left: 10px;
                                    text-align: start;

                                    .name{
                                        font-weight: 700;
                                    }

                                    .username{
                                        font-size: 1.2rem;
                                        color: var(--side-bar-normal-text);
                                    }
                                }

                                

                            }

                                
                        }
                    }

                        
                }


            }
                

    }
    
`