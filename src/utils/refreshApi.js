import axios from "axios";
import { useAuthHeader, createRefresh } from "react-auth-kit";
import api from "./api";

const refreshApi = createRefresh({
  interval: 10, // Refreshs the token in every 10 minutes
  refreshApiCallback: async ({
    // arguments
    authToken,
    authTokenExpireAt,
    refreshToken,
    refreshTokenExpiresAt,
    authUserState,
  }) => {
    try {
      const response = await api.post(
        "/jobseeker/jwt/token/refresh/",
        { refresh: refreshToken },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      return {
        isSuccess: true,
        newAuthToken: response.data.access,
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
      };
    }
  },
});

export default refreshApi;
