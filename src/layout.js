import React from "react";
import { Layout } from 'react-admin';
import Menu from './components/menu.js';

export default function(props) { return (<Layout {...props} menu={Menu} />)};

