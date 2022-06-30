import { Component } from "react";
import AccountCircle from "../../res/account_circle.svg";
import Status from "../../res/status-icon";
import Chats from "../../res/chat";
import MoreMenu from "../../res/more_vert";
import "./style.css";

export default class Header extends Component{
    render(){
        return <header >
            <div className="header">
            <i className="avatar">
               <img src={AccountCircle} height="40" alt="avatar" />
            </i>
            <ul className="action-buttons-list">
                <li className="action-item">
                <Status />
                </li>
                <li className="action-item">
                <Chats />
                </li>
                <li className="action-item">
                <MoreMenu />
                </li>
            </ul>
            </div>
            <div>
                <input />
            </div>
        </header>
    }
}