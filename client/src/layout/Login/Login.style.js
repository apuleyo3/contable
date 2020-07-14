import styled from 'styled-components';
import backgroundImg from '../../assets/bg_login.png';

export const LoginContainer = styled.div`
    .container-fluid{
        min-height: 100vh;
        background: url(${backgroundImg}) no-repeat fixed center;
        background-size: cover;
        position: relative;
        z-index: 0;
        color: #7ddaff;
    }
    .overlay{
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }    
`;

export const LoginHeader = styled.div`
    margin-top: 1rem;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: auto;
        height: 100%;
    }
    h1{
        margin: 0px;
        padding-top: 5px;
        font-size: 40px;
        font-weight: 500;
        font-family: 'Odibee Sans', cursive; 
        border-top: 2px solid #fff;
        border-bottom: 2px solid #fff;
    }
    a{
        color: #7ddaff;
        text-decoration: none;
    }
    a:link, a:visited{
        color: #7ddaff;
    }
`;

export const LoginForm = styled.div`
    margin-top: 10vh;
    padding: 15px;
    position: relative;
    border: 5px solid rgba(255,255,255,0.2);
    border-radius: 10px;
    background-color: rgba(0,0,0,0.6);
    z-index: 0;
    .login-title{
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 30px;
    }
    form .form-group{
        margin-bottom: 25px;
    }
    .form-control:focus {
        border-color: 3px solid rgba(81, 203, 238, 1);
        box-shadow: inset 0 2px 1px rgba(81, 203, 238, 0.075), 0 0 10px rgba(81, 203, 238, 0.6);
    }
    form .btn-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    form .btn-single{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;