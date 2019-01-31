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
class Page1 extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    // this.changeTodoList.bind(this);
  }
  public render() {
    return (
      <div className="Page1" onClick={()=>{this.changeTodoList();}}>
        Page1
      </div>
    );
  }
  changeTodoList(): void {
    console.log('ss');
    this.props.todoListStore!.add();
  }
}

export default Page1;
