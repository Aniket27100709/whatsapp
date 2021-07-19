import React from 'react';
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';
function SidebarChat2(){
    return (
     <div className="sidebarChat">
         <Avatar src="https://image.freepik.com/free-vector/detailed-esports-gaming-logo_52683-63632.jpg"/>
         <div className="sidebarChat__info">
                <h2>Gamers arena</h2>
                <p>never give up</p>
         </div>
     </div>
    )
}
export default SidebarChat2;