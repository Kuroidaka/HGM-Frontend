import { useState } from "react";
import styled from "styled-components";
import { icon } from "~/assert/icon/icon";

const cardLine = [
    {
        title: 'Price',
    },
    {
        title: 'Color',
    },
    {
        title: 'Gender',
    },
    {
        title: 'Discount',
    },
]

const Navbar = () => {

    // function open card select
    const handleClickCardLine = (e: any) => {
        console.log(e.target);
        
        const activeEml = e.target.closest('.card-line')
        if (activeEml.classList.contains('active')) {
            activeEml.classList.remove('active')

        }
        else {
            activeEml.classList.add('active')
        }

    }

    return (
        <Nav>
            <div className="card">
                
                {cardLine.map((card, idx) => {
                    return <div className="card-line-wrapper" key={idx} >
                        <div className="card-line" onClick={handleClickCardLine}>
                            <div className="plus"><icon.plus /></div>
                            <div className="minus"><icon.minus /></div>

                            <h4 className="filter-title">
                                {card.title}
                            </h4>

                        </div>

                        <div className="card-body">
                                <ul className="content">
                                    <li className="color-attribute ">
                                        <a href="##" >
                                            Black
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                })
                }
            </div>


        </Nav>
    );
}

export default Navbar;

const Nav = styled.div`
    padding: 0 15px;
    
    .card {
        .card-line-wrapper{
            cursor: pointer;
            position: relative;
            border-bottom: 1px solid #b9b5b5;
           
            .card-line{
                display: flex;
                flex-direction: column;
                padding: 11.2px 20px;

                .plus, .minus {
                position: absolute;
                left: 0;
                top: 12px;
                display: none;
                }

                .plus {
                    display: block;
                }
                .minus {
                    display: none;
                }

                &.active {
                    .minus {
                        display: block;
                    }

                        .plus {
                        display: none;
                    }

                    & + .card-body {
                        display: block;
                    }
                }

            }
            .card-body{
                display: none;
                ul.content {
                    list-style-type: none;
                    padding: 10px 20px 14px;
                }
            }

        }

       
    }

`