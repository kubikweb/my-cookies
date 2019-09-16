import React, {useState, useEffect} from 'react';
import "./Cookies.css";
import {useCookies} from "react-cookie";
import {RemoveScrollBar} from "react-remove-scroll-bar";

const Cookies =() => {
    const [bgBox, setBgBox] = useState(false);
    const [box, setBox] = useState(false);
    const [scroll, setScroll] = useState(null);
    const [cookies, setCookie] = useCookies(['GDPR']);


    useEffect(()=> {
        if(typeof cookies.GDPR === "undefined"){
            setBgBox(true);
            setBox(true);
            setScroll(<RemoveScrollBar/>);
        }
    },[cookies.GDPR]);


    const handleClick = (e) => {
        const value = e.target.className;
        let date = new Date();
        date.setTime(date.getTime() + (24*60*60*1000));
        setCookie("GDPR", value, { expires: date } );
        setBgBox(false);
        setBox(false);
        setScroll(null);
    };


    return (
        <div className="container">
            {scroll}
            {bgBox && <div id="background_box"/>}
            {box &&
                <div id="box">
                    <h2>GDPR consent</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin ut mollis sem. Morbi pharetra orci magna,
                        quis laoreet lorem lobortis ac. Sed porttitor tristique sapien, id suscipit neque consequat non. Vivamus
                        imperdiet malesuada arcu, varius convallis urna vehicula non. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Curabitur est diam, blandit ac justo vel, ultrices mattis risus.
                        Suspendisse tempus scelerisque tellus, sed feugiat mi ornare quis. Nam vel libero non quam aliquet dapibus.
                        Donec porta consectetur enim, aliquet porta ante semper vitae. Quisque ultrices mollis lectus quis sodales.
                        Nulla non egestas ante.</p>
                    <div className="buttons">
                        <button className="accept" onClick={handleClick}>Accept</button>
                        <button className="cancel" onClick={handleClick}>Cancel</button>
                    </div>
                </div>
            }
                <h1>Welcome to GDPR's world</h1>
        </div>
    );
};

export default Cookies;
