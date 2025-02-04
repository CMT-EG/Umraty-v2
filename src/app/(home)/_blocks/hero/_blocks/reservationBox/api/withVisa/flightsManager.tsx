import axios from "axios";

const NEXT_PUBLIC_RESERVATIONS_API_URL = "https://api.aviationstack.com/v1/";
const NEXT_PUBLIC_RESERVATIONS_API_ACCESS_KEY = "302803dccedee190d06e4d5a4c130e2d";

class FlightManager {
    static async getAllAirlines() {
        return (
            await axios.get(`${NEXT_PUBLIC_RESERVATIONS_API_URL}airlines?access_key=${NEXT_PUBLIC_RESERVATIONS_API_ACCESS_KEY}`)
        ).data;
    }

}

export default FlightManager;