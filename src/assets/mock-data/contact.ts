import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataServe implements InMemoryDbService {
    createDb() {
        const UsersInfo = [{
            "id": 0,
            "name": "张三",
            "age": 18
        }, {
            "id": 1,
            "name": "李四",
            "age": 20
        }, {
            "id": 2,
            "name": "王五",
            "age": 21
        }]
        return { UsersInfo };
    }
}
