import React, { Component } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import 'rc-menu/assets/index.css';


class Navigation extends Component {

    render() {
        return (
            <Menu mode={'horizontal'} style={{margin: '0'}}>
                <MenuItem>Domov</MenuItem>
                <MenuItem>Kontakt</MenuItem>
                <MenuItem>
                </MenuItem>
            </Menu>
        );
    }
}

export default Navigation;