import React from 'react';
import './SidebarChat3.css';
import {Avatar} from '@material-ui/core';
function SidebarChat3(){
    return (
     <div className="sidebarChat">
         <Avatar src="https://image.flaticon.com/icons/png/512/546/546071.png"/>
         <div className="sidebarChat__info">
                <h2>Techies</h2>
                <p>Never settle</p>
         </div>
     </div>
    )
}
export default SidebarChat3;