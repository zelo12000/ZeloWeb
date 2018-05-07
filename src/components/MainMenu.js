import React, { Component } from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const { Header } = Layout;


export class MainMenu extends Component {

  render() {
    return (
        <Header> 
            <div>
                <Row type="flex" justify="center" align="middle">
                    <Col span={2}>
                        {/* place for logo */}
                    </Col>
                    <Col span={19}>
                        <div>
                            <Menu mode="horizontal" theme="dark" title="ZeloWeb" style={{verticalAlign: 'baseline'}}>
                                <Menu.Item>Domov</Menu.Item>
                                <SubMenu title="Hobby">
                                    <Menu.Item>Fotografovanie</Menu.Item>
                                    <Menu.Item>Šport</Menu.Item>
                                    <Menu.Item>Turistika</Menu.Item>
                                    <Menu.Item>Hudba</Menu.Item>
                                </SubMenu>
                                <Menu.Item>Zaujímavé odkazy</Menu.Item>
                                <Menu.Item>Referencie</Menu.Item>
                                <Menu.Item>O mne</Menu.Item>
                                <Menu.Item>Kalendár</Menu.Item>
                                <Menu.Item>Kontakt</Menu.Item>
                            </Menu>
                        </div>
                    </Col>
                    <Col span={3}>
                    <Search
                        placeholder="Vyhľadávanie"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    </Col>
                </Row>
            </div>
        </Header>
    );
  }
}

export default MainMenu;
