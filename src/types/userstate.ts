// Type imports
import { User } from "./user";

export default interface UserState {
  users: User[];
  loading: Boolean;
  error: any;
}
