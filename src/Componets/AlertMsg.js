import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AlertMsg(props) {

    const msgTheme = props.themeType === 'dark' ? 'light' : 'dark';
    console.log(msgTheme);
    let msg;
    const notify = () => {
        let msgType = props.BtnFun();
        msg = (msgType==="error")?"Please Enter some text":props.msg;
        console.log(msg);
        toast[msgType](msg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: msgTheme,
        });
    };

    return (
        <>
            <button className="btn btn-primary mx-1 my-1" onClick={event => {
                notify();
            }}
            >{props.btnName}</button>

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </>
    );
}