import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ITodoList } from '../stores/todolistStore';

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
    // this.changeTodoList.bind(this);
  }
  public render() {
    return (
      <div className="Login" onClick={()=>{this.changeTodoList();}}>
        Login
      </div>
    );
  }
  changeTodoList(): void {
    console.log('ss');
    this.props.todoListStore!.add();
  }
}

export default Login;
