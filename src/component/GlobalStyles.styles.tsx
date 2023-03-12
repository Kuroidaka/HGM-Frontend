import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900;1000&family=Roboto&display=swap');
    :root {

         
        --primary: #64BBF3;
        --secondary: #469df9;
        --third: #343A40;
        
        /* user */
        --header-bar-height: 85px;
        --header-bar-height-mb: 55px;
        --header-nav-height: 35px;
        --header-cart-flyout-height: 6vh;
        --light-text: #5C5C5C;
        --middle-both-text: #5F5F5F;
        --flyout-footer-height: 100px;
        --border-menu: #E0E0E0;

        /* admin */
        --primary_admin: #EEEEEE;
        --semi-primary_admin: #d4d4d4;
        --secondary_admin: #5D6C7E;
        --third_admin: #2A4054;
        --hover-icon: #717070;
        --hover-item_dark: #526172;
        --white-color: #F7F7F7;
        --black-color: #303030;
        --notify-color: #DF5645;
        --border: rgba(0,0,0,.07);
        
        /* text */
        --side-bar-normal-text:#cccdd0;
        --title-color: #f0f0f0;
        --text-color: #333;
        --text-color-1: #75868F;
        --success-text: #8b978f;
        --small_text_admin: #c3c5c7;
        
        --error: #ff5353;
        --success: #8BC34B;
        --cancel-button: #aaaaaa;
        --avatar-wrap: #e7e7e7;
        --online: #30A24C;
        --offline: #747F8D;
        --role-admin: #3EA589;
        --light-bg: #f2f2f2;
        --header-height: 45px;
        --overlay-height: 300px;


       
    }
    
    *, *:before, *:after {
    -webkit-box-sizing: border-box!important;
    box-sizing: border-box!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
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

    .mt-8{
        margin-top: 8px!important;
    }

    .mb-8{
        margin-bottom: 8px!important;
    }
`