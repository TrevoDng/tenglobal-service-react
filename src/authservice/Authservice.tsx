import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";
import { UserProfileToken } from "../models/User";

const api = "http://localhost:5167/api";

export const loginAPI = async (username: string, password: string) => {
	try {
		const data = await axios.post<UserProfileToken>(api + "account/login",{
			username: username,
			password: password,
		});
		
		return data;
	} catch (error) {
		handleError(error);
	}
};

export const registerAPI = async (email: string, username: string, password: string) => {
	try {
		const data = await axios.post<UserProfileToken>(api + "account/register",{
			email: email,
            username: username,
			password: password,
		});
		
		return data;
	} catch (error) {
		handleError(error);
	}
};