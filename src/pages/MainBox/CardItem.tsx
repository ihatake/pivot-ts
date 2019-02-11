import React, { Component } from 'react';
import { Card } from 'antd';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import flow from 'lodash/flow';
import * as Style from './Style';

interface P {
  title: string;
  content: string;
  connectDragSource: any;
  connectDropTarget: any;
  index: any;
  onDND: any;
  isDragging: any;
}
const Types = {
  CARD: 'CARD',
};
const CardSource = {
  beginDrag(props1: any, monitor: any, component: any) {
    return {
      index: props1.index,
    };
  },
  // endDrag(props1: any, monitor: any, component: any) {
  //   // 拖拽结束时的事件，可选
  // },
  // canDrag(props1: any, monitor: any) {
  //   // 是否可以拖拽的事件。可选
  // },
  // isDragging(props1: any, monitor: any) {
  //   // 拖拽时触发的事件，可选
  // },
};
function collect(connect: any, monitor: any) {
  // 通过这个函数可以通过this.props获取这个函数所返回的所有属性
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}
const CardTarget = {
  hover(props: any, monitor: any, component: any) {
    // 组件在target上方时触发的事件
    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().index; // 拖拽目标的Index
    const hoverIndex = props.index; // 目标Index
    if (dragIndex === props.lastIndex || hoverIndex === props.lastIndex) {
      return null;
    }
    if (dragIndex === hoverIndex) {
      return null;
    } // 如果拖拽目标和目标ID相同不发生变化
    const hoverBounding: any = findDOMNode(component);
    const hoverBoundingRect = hoverBounding.getBoundingClientRect();
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2; // 获取X轴中点
    const clientOffset = monitor.getClientOffset(); // 获取拖拽目标偏移量
    const hoverClientX = clientOffset.x - hoverBoundingRect.left;
    if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
      return null;
    }
    if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
      return null;
    }
    props.onDND(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
    return true;
  },
};
function collect1(connect: any, monitor: any) {
  // 同DragSource的collect函数
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(), // source是否在Target上方
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(), // 能否被放置
    itemType: monitor.getItemType(), // 获取拖拽组件type
  };
}
class CardItem extends Component<P, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { connectDragSource, connectDropTarget, isDragging } = this.props;
    const opacity = isDragging ? 0.1 : 1;
    return connectDragSource(
      connectDropTarget(
        <div>
          <Style.CardItem>
            <div>
              <Card title={this.props.title} style={{ width: 300, opacity }}>
                <p>{this.props.content}</p>
              </Card>
            </div>
          </Style.CardItem>
        </div>,
      ),
    );
  }
}

export default flow(
  DragSource(Types.CARD, CardSource, collect),
  DropTarget(Types.CARD, CardTarget, collect1),
)(CardItem);
