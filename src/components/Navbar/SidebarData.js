import React from 'react';
// mport * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/servies',
        icon: <GiIcons.GiRazor />,
        cName: 'nav-text'
    },
    {
        title: 'Barbers',
        path: '/barbers',
        icon: <AiIcons.AiOutlineScissor />,
        cName: 'nav-text'
    },
    {
        title: 'Appointments',
        path: '/appointments',
        icon: <AiIcons.AiOutlineCalendar />,
        cName: 'nav-text'
    }
]