import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ITodo } from "./interfaces/todo.interface";


@Injectable()
export class TodosService {
    constructor(private readonly httpService: HttpService) { }

    async getAllTodos() {
        let todos: ITodo[] = [];
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const { status, data } = await this.httpService.get<ITodo[]>(url).toPromise();
        if (status === 200) {
            todos = data;
        }
        console.log(todos);
        return todos;
    }

    public async getAllData() {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        let result = await this.httpService.get<ITodo[]>(url).toPromise();
        return result

    }




}