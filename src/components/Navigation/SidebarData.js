/* eslint-disable */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/api/v1/cars',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Add Car',
    path: '',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
  },
  {
    title: 'Remove Car',
    path: '',
    icon: <FaIcons.FaTrash />,
    cName: 'nav-text',
  },
  {
    title: 'My Favorites',
    path: '',
    icon: <FaIcons.FaHeart />,
    cName: 'nav-text',
  },
  {
    title: 'Contact Us',
    path: '',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];
