import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CardItem from './MainBox/CardItem';
import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface S {
  [propName: string]: any;
}
const CardList = [
  {
    title: '第1张卡片',
    id: 1,
    content: '第1张卡片内容',
  },
  {
    title: '第2张卡片',
    id: 2,
    content: '第2张卡片内容',
  },
  {
    title: '第3张卡片',
    id: 3,
    content: '第3张卡片内容',
  },
  {
    title: '第4张卡片',
    id: 4,
    content: '第4张卡片内容',
  },
  {
    title: '第5张卡片',
    id: 5,
    content: '第5张卡片内容',
  },
  {
    title: '第6张卡片',
    id: 6,
    content: '第6张卡片内容',
  },
];
@observer
class Home extends React.Component<{}, S> {
  @observable secondsPassed = 0;
  constructor(props?: any) {
    super(props);
    this.state = {
      T: null,
      CardList: CardList,
      // CardList: [
      //   {
      //     title: '第一张卡片',
      //     id: 1,
      //     content: '第一张卡片内容',
      //   },
      //   {
      //     title: '第二张卡片',
      //     id: 2,
      //     content: '第二张卡片内容',
      //   },
      //   {
      //     title: '第三张卡片',
      //     id: 3,
      //     content: '第三张卡片内容',
      //   },
      // ],
    };
    autorun(() => {
      console.log(this.secondsPassed);
    });
    this.handleDND = this.handleDND.bind(this);
  }
  handleDND(dragIndex: number, hoverIndex: any) {
    const tmp = CardList[dragIndex]; // 临时储存文件
    CardList.splice(dragIndex, 1); // 移除拖拽项
    CardList.splice(hoverIndex, 0, tmp); // 插入放置项
    this.setState({
      CardList,
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
      <CardStyle>
        {this.state.CardList.map((item: any, index: number) => {
          return (
            <CardItem
              key={item.id}
              title={item.title}
              content={item.content}
              index={index}
              onDND={this.handleDND}
            />
          );
        })}
      </CardStyle>
    );
  }
}

export default DragDropContext(HTML5Backend)(Home);
