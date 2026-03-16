import { json } from '@sveltejs/kit';
import { studentsData } from '$lib/data';

export function GET() {
	return json(studentsData);
}
