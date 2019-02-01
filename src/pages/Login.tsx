import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ITodoList } from '../stores/todolistStore';
import LoginBox from '../components/login/LoginBox';

interface P {
  todoListStore?: ITodoList;
  [propName: string]: any;
}
interface S {
  [propName: string]: any;
}

@inject('todoListStore')
@observer
class Login extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
  }
  public render() {
    return (
      <div className="Login">
        <LoginBox />
      </div>
    );
  }
  changeTodoList(): void {
    this.props.todoListStore!.add();
  }
}

export default Login;
