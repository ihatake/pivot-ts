import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import CardItem from './CardItem';

interface S {
  [propName: string]: any;
}
@observer
class Home extends React.Component<{}, S> {
  @observable secondsPassed = 0;
  constructor(props?: any) {
    super(props);
    this.state = {
      T: null,
      CardList: [
        {
          title: 'first Card',
          id: 1,
          content: 'this is first Card',
        },
        {
          title: 'second Card',
          id: 2,
          content: 'this is second Card',
        },
        {
          title: 'Third Card',
          id: 3,
          content: 'this is Third Card',
        },
      ],
    };
    autorun(() => {
      console.log(this.secondsPassed);
    });
  }
  componentWillMount() {
    this.setState({
      T: setTimeout(() => {
        this.secondsPassed++;
      }, 1000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.T);
  }
  public render() {
    return (
      <div className="card">
        {this.state.CardList.map((item: any, index: any) => {
          return (
            <CardItem key={index} title={item.title} content={item.content} />
          );
        })}
      </div>
    );
  }
}

export default Home;
