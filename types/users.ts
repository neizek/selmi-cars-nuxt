export interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export type UserSignInPayload = Pick<User, 'email' | 'password'>;

export type UserSignUpPayload = Omit<User, 'id'> & {
	repeatPassword: string;
}