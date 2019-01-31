import { observable, action } from 'mobx';
interface Todo {
  finished: boolean;
  [propName: string]: any;
}
export interface ITodoList {
  todos: Todo[];
  add: () => void;
}
class TodoList implements ITodoList {
  @observable todos = [
    {
      finished: true
    }
  ];
  @action add = (): void => {
    this.todos.push({
      finished: false
    });
  }
}
export default new TodoList();
