import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';

interface S {
  [propName: string]: any;
}
@observer
class Home extends React.Component<{}, S> {
  @observable secondsPassed = 0;
  constructor(props?: any) {
    super(props);
    this.state = { T: null };
    autorun(() => {
      console.log(this.secondsPassed);
    });
  }
  componentWillMount() {
    this.setState({
      T: setTimeout(() => {
        this.secondsPassed++;
      }, 1000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.T);
  }
  public render() {
    return (
      <div className="Home">
        Homeaaa
        <span>Seconds passed: {this.secondsPassed} </span>
      </div>
    );
  }
}

export default Home;
