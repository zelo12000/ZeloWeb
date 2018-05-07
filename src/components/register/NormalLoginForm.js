import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';

const FormItem = Form.Item;

export class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '75%', margin: '0 auto'}}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Prosím vložte používateľské menu!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Používateľské meno" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Prosím vložte heslo !' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Heslo" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox style={{color: 'white'}}>Zapamätať</Checkbox>
          )}
          <a className="login-form-forgot" href="">Zabudnuté heslo</a>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{margin: '5px'}}>
            Prihlásiť sa
          </Button>
          <Button type="primary" onClick={this.showModal}>
            Registrovať
          </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </FormItem>
      </Form>
    );
  }
}
