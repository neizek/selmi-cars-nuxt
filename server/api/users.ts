
import { query } from '~/utils/db';

export interface UserPayLoad {
	id: number;
	name: string;
	email: string;
	password: string;
}

function getAllUsers() {
	return query('SELECT * FROM users') as Promise<UserPayLoad[]>;
}

export default defineEventHandler(async (event) => {
	const method = event.node.req.method;
	
	if (method !== 'GET') {
		return createError({
			statusCode: 405,
			statusMessage: 'Method Not Allowed',
			message: `The ${method} method is not allowed for this endpoint. Use GET instead.`
		});
	}
	
	try {
	  	const users = await getAllUsers();
	  
		return {
			status: 'success',
			data: users
		};
	} catch (error) {
	  	console.error('Database error:', error);
	  
		return createError({
			statusCode: 500,
			statusMessage: 'Internal Server Error',
			message: 'Failed to retrieve users from database',
			data: process.env.NODE_ENV === 'development' ? error : undefined
		});
	}
  });