import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome,
  faList,
  faBriefcase,
  faAddressCard,
  faPhone
 } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: 'nav-text'
  },

  {
    title: 'Habilidades',
    path: '/skills',
    icon: <FontAwesomeIcon icon={faList} />,
    cName: 'nav-text'
  },

  {
    title: 'Portfolio',
    path: '/portfolio',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    cName: 'nav-text'
  },

  {
    title: 'Sobre',
    path: '/sobre',
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    cName: 'nav-text'
  },

  {
    title: 'Contato',
    path: '/contato',
    icon: <FontAwesomeIcon icon={faPhone} />,
    cName: 'nav-text'
  },

]
