export const baseURL = "https://67f4f316913986b16fa27ccb.mockapi.io/api-test";

export class ApiPaths {
    public static getUsers() {
        return "/users";
    }

    public static getUserDetail(id: number) {
        return `/users/${id}`;
    }
}