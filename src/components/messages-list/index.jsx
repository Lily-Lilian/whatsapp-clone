import { Component } from "react";
import Header from "../header";
import Message from './message';
import Girl from "../../assets/girl-svgrepo-com.svg";
import AccountCircle from "../../assets/Free-Whatsapp-Dp-Profile-Pics-images.png";
import "./style.css"

export default class MessagesList extends Component{
    render(){
        return <aside className="messages-list">
            <Header />
            <div>

            <Message
  wallpaper={AccountCircle}
  names=" Alsina 💕"
  message="Salut! Ca vas?"
  time="10:00 a.m"
  />
<hr />
            <Message
   wallpaper={Girl}
  names=" Lily 💛"
  message="Heyy!"
  time="09:52 a.m"
  />
  </div>
            
            {/* <ul>
            <div className='users'>
<div className="image">

            <img src={AccountCircle} height="40" alt="avatar" />
                    
<li> {this.props.names}</li>

<small>{this.props.message}</small>
</div>

<span> {this.props.time}</span>
</div>
            </ul> */}
            
        </aside>
    
    }
}