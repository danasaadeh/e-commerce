import { httpClient } from "../../../lib/axios";
import { userStorage } from "../storage";

class AuthServices {
  #endPoint = "/auth";

  async login(payload: AuthPayload): Promise<AuthResponse> {
    try {
      const response = await httpClient.post<AuthResponse>(
        "https://api.escuelajs.co/api/v1/auth/login",
        payload
      );

      const { access_token, refresh_token } = response.data;

      // Save token for future requests
      userStorage.set(access_token);

      return { access_token, refresh_token };
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error("Invalid email or password.");
      } else if (error.response?.status === 400) {
        throw new Error("Malformed request. Please check your input.");
      } else {
        throw new Error("An unexpected error occurred. Please try again.");
      }
    }
  }

  async signUp(payload: AuthPayload): Promise<AuthResponse> {
    // For now, signUp just reuses login endpoint
    return this.login(payload);
  }

  async getMe(): Promise<UserProfile | null> {
    try {
      const response = await httpClient.get<UserProfile>(
        `${this.#endPoint}/profile`
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error("Unauthorized — please login again.");
      } else if (error.response?.status === 403) {
        throw new Error("Forbidden — you don’t have permission.");
      }
      throw new Error("Failed to retrieve user profile.");
    }
  }
}

export default new AuthServices();
