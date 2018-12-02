import { HttpMethod, HttpService } from "./HttpService";

export interface LoginResponse {
  token?: string;
  error?: "incorrect" | "frozen";
}

export class UserService extends HttpService {

  async login(username: string, password: string): Promise<LoginResponse> {

    // set mock behavior
    if (this.useMock) {
      return {
        token: "123",
      };
    }

    // execute real fetch

    return this.fetch<LoginResponse>({
      method: HttpMethod.GET,
      params: { username, password },
      path: "/user",
    });
  }
}
