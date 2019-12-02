import { User } from "../models/user.model";

const user = new User;

export class UserService {

    static get() {
        return user;
    }

    static login() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open("GET", `http://localhost:8000/login?email=${
                user.email
                }&password=${
                user.password
                }`);
            xhr.onload = xhr.onerror = () => {
                if (200 === xhr.status) {
                    return resolve(JSON.parse(xhr.response));
                }
                reject(xhr);
            };
            xhr.send();
        });
    }

    static post() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            // xhr.open("POST", "http://worldsofgame.alwaysdata.net/user.php");
            xhr.open("POST", "http://localhost:8000/users");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = xhr.onerror = () => {
                if (201 === xhr.status) {
                    return resolve(JSON.parse(xhr.response));
                }
                reject(xhr);
            };
            xhr.send(JSON.stringify(user));
        });
    }

}