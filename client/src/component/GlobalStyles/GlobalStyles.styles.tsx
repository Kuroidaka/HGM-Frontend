import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: #64BBF3;
        --secondary: #469df9;
        --third: #343A40;
        --text-color-1: #75868F;
        --border: rgba(0,0,0,.07);
        --primary_admin: #EEEEEE;
        --semi-primary_admin: #d4d4d4;
        --secondary_admin: #5D6C7E;
        --third_admin: #2A4054;
        --hover-icon: #717070;
        --hover-item_dark: #526172;
        --white-color: #F7F7F7;
        --black-color: #303030;
        --small_text_admin: #c3c5c7;
        --notify-color: #DF5645;
        --title-color: #f0f0f0;
        --text-color: #333;
        --side-bar-normal-text:#cccdd0;
        --error: #ff5353;
        --cancel-button: #aaaaaa;

        --online: #30A24C;
        --offline: #747F8D;
        --role-admin: #3EA589;
        --light-bg: #f2f2f2;
        --header-height: 45px;
        --overlay-height: 300px;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Trebuchet MS', sans-serif;
    }
    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        text-rendering: optimizeSpeed;
    }

    a {
        color: var(--text-color);
        text-decoration: none;
    }

    .icon {
        cursor: pointer;
        color: var(--secondary_admin);
        transition: all .2s ease-in-out;

        &:hover {
            color: var(--hover-icon);
        }
    }

    label {
        font-size: 1.2rem;
    }

`