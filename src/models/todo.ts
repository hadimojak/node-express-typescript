export class Todo {
  constructor(public id: string, public text: string) {}
}

export interface CreateTodoBody {
  id?: string;
  text: string;
}

export interface updateTodoParam {
  id: string;
}
