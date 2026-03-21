import type { Student } from '$lib/data';
import type { SortOption } from '$lib/constants';
import { SORT_OPTIONS } from '$lib/constants';

export function filterAndSort(
	students: Student[],
	showActiveOnly: boolean,
	searchQuery: string,
	sortBy: SortOption
): Student[] {
	let result = showActiveOnly ? students.filter((s) => s.activeLabel === 'Yes') : [...students];

	if (searchQuery.trim()) {
		result = result.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
	}

	if (sortBy === SORT_OPTIONS.NAME) {
		result.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortBy === SORT_OPTIONS.AVERAGE_SCORE) {
		result.sort((a, b) => b.averageScore - a.averageScore);
	}

	return result;
}

export function calculateAge(birthdate: string): number {
	const today = new Date();
	const birth = new Date(birthdate);
	let age = today.getFullYear() - birth.getFullYear();
	const hasHadBirthdayThisYear =
		today.getMonth() > birth.getMonth() ||
		(today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
	if (!hasHadBirthdayThisYear) age--;
	return age;
}
