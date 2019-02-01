import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import { Event, IRoutePrps } from '../../utils/interface';
import * as Style from './Style';

interface P extends IRoutePrps {
  form: any;
}

class LoginForm extends React.Component<P, {}> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Style.LoginForm>
        <Form
          onSubmit={(e: Event) => {
            this.handleSubmit(e);
          }}
          className="login-form"
        >
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Style.LoginForm>
    );
  }
  handleSubmit(e: Event): void {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.props.history.push('/home');
      }
    });
  }
}
const LoginBox = Form.create({ name: 'normal_login' } as {})(
  withRouter(LoginForm)
);
export default LoginBox;
