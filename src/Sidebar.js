import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar,IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import SidebarChat2 from './SidebarChat2';
import SidebarChat3 from './SidebarChat3';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <img src="https://img.icons8.com/pastel-glyph/2x/whatsapp--v2.png" alt=""/>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFLaCZ02jcvJg/profile-displayphoto-shrink_100_100/0/1613137826321?e=1628121600&v=beta&t=VUxEHFp6P26Si5b9lzj4VAyVirWE6vKfxSPuBOxOPy8"/>
                <div className="sidebar__right">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                     <IconButton>
                     <MoreVertIcon/>
                     </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchIcon/>
                <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                    <SidebarChat/>
                    <SidebarChat2/>
                    <SidebarChat3/>

            </div>
        </div>
    )
}

export default Sidebar;
