import { Document } from "mongoose";

export class UserInterface extends Document {

    name: string;
    email: string;
    password: string;
}