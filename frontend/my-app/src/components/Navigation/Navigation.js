import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'

import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/Icons'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    transition: all 0.3s ease;

    /* Interactive shadow effect when hovering over the sidebar */
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateX(10px);
    }

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;

            &:hover {
                transform: scale(1.1);
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
            }
        }

        h2 {
            color: rgba(34, 34, 96, 1);
            transition: color 0.3s ease;

            &:hover {
                color: #222260;
            }
        }

        p {
            color: rgba(34, 34, 96, 0.6);
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;
            position: relative;
            padding: 0.8rem;

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all 0.4s ease-in-out;
            }

            /* Hover effect for list items */
            &:hover {
                background-color: rgba(34, 34, 96, 0.1);
                border-radius: 10px;
                padding-left: 1.4rem;

                i {
                    color: rgba(34, 34, 96, 1);
                }
            }

            /* Adding a slight scale effect */
            &:active {
                transform: scale(0.98);
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;

        i {
            color: rgba(34, 34, 96, 1) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation