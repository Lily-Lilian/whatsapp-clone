import { Component } from "react";
import "./style.css"

export default class Message extends Component{
    render(){
        return <aside className="messages-list">
            
            <ul>
            <div className='users'>
<div className="image">

            <img src={this.props.wallpaper} style={{borderRadius: '50%'}} width='40px' height="40px" alt="avatar" />
                    
<div className="names">
<li> {this.props.names}</li>
<small>{this.props.message}</small>
</div>
</div>

<span> {this.props.time}</span>
</div>
            </ul>
            
        </aside>
    
    }
}