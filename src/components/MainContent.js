
import React, { Component } from 'react';
import { Layout } from 'antd';
import { Card } from 'antd';
import { Row, Col } from 'antd';

const { Content } = Layout;


export class MainContent extends Component {


  render() {

    return (
      <Content>
        <div>
        <Card title="Novinky">
             <Row type="flex" justify="center" align="middle">
                <Col span={11} style={{marginLeft: '4%'}}>
                  <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Novinka #1"
                    extra={<a href="#">Viac ...</a>}
                  >
                    Text novinky #1
                  </Card>
                </Col>

                <Col span={11} style={{marginLeft: '4%'}}>
                  <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Novinka #2"
                    extra={<a href="#">Viac ...</a>}
                  >
                    Text novinky #2
                  </Card>
                </Col>

                
                
             </Row>
            
          </Card>
        </div>
      </Content>
    );
  }
}
