import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-360deg);
    }
`

export const IdCard = styled.div`
    height: 510px;
    width: 1010px;
    background-color: #101010;
    box-shadow: 16px 14px 20px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;

    &::before{
        content: "";
        position: absolute;
        height: 1500px;
        width: 1500px;
        background-image: conic-gradient(rgb(0, 255, 157) 120deg, transparent 360deg);
        animation: ${rotate} 4s linear infinite;
        border-radius: 50%;
        color: white;
    }

    &::after{
        content: "";
        position: absolute;
        height: 500px;
        width: 1000px;
        background-color: #181818;
        border-radius: 25px;
        box-shadow: inset 1px 1px 13px 13px #000;
        color: white;
    }

    .content{
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        z-index: 2;
    }

    .personalData{
        margin-left: 60px;
        margin-top: 90px;
        margin-right: 3px;
    }

    .fullName{
        margin-left: 50px;
        margin-top: 40px;
    }

    .title{
        margin-left: 50px;
        margin-top: 35px;
    }

    .title a{
        color: white;
        text-decoration: none;
    }

    .title a:hover{
        color: grey;
    }

`