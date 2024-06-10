import { user } from "../dtos/user.dtos";

declare global {
    namespace Express {
        interface Request {
            user? : user
        }
    }
}