export class Todo {
  constructor(public text: string, public id?: string) {}
}

export interface CreateTodoBody {
  id?: string;
  text: string;
}

export interface updateTodoParam {
  id: string;
}
