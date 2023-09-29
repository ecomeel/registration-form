import React from "react";
import arrowImg from "../../assets/arrow.png";


export default function Login() {
    return(
        <div className="toLogin">
            <p className="toLogin__text">Уже есть аккаунт ?</p>
            <p className="toLogin__button">Войти <img className="toLogin__img" src={arrowImg}/></p>
        </div>
    )
}