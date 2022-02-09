import React from "react";
import styled from "styled-components";

const Card=({name, image, genres})=>{

    const Wrapper = styled.div`
    height: 379px;
    width: 300px;
    background: #808080;
    border-radius: 10px;
    transition: background 0.8s;
    overflow: hidden;
    background: #000;
    background: url("${image}") center center no-repeat;
    background-size: cover; 
    box-shadow: 0 70px 63px -60px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);

    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;

    &:hover h2{
    opacity: 1;
    }

    &:hover i{
    opacity: 1;
    }

    &:hover{
    opacity: .8;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
    `


    return(
        <Wrapper>
            <div>
                <h2>{name}</h2>
                <div>
                <i aria-hidden="true">{genres ? genres.join(', ') : null}</i>
                </div>
            </div>
        </Wrapper>
    )
}

export default Card