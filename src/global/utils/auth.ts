import { fromUnixTime, differenceInSeconds } from "date-fns";
import { jwtDecode } from "jwt-decode";

export type DataInToken = {
  exp: number;
}
export const getTokenExpiration = (token: string): number => {
  try {
    const decoded = jwtDecode<DataInToken>(token);
    const expirationTime = fromUnixTime(decoded.exp);
    const now = new Date();
    const secondsUntilExpiry = differenceInSeconds(expirationTime, now);
    return Math.max(0, secondsUntilExpiry); // Ensure we don't return negative values
  } catch (error) {
    console.error("Failed to decode token:", error);
    return 0;
  }
};