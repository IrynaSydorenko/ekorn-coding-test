import { describe, it, expect } from 'vitest';
import { calculateAge, filterAndSort } from '$lib/utils/utils';

describe('calculateAge', () => {
	it('calculates age when birthday has already occurred this year', () => {
		const birthdate = '2000-01-01';
		expect(calculateAge(birthdate)).toBe(
			new Date().getFullYear() - new Date(birthdate).getFullYear()
		);
	});

	it('handles birthday not yet occurred this year', () => {
		const lastYear = new Date().getFullYear() - 1;
		const upcomingBirthdayDate = `${lastYear}-12-31`;
		const age = calculateAge(upcomingBirthdayDate);
		expect(age).toBe(0);
	});
});

describe('filterAndSort', () => {
	const students = [
		{
			id: '1',
			name: 'Alice',
			age: 20,
			averageScore: 90,
			activeLabel: 'Yes' as const,
			passedLabel: 'Yes' as const
		},
		{
			id: '2',
			name: 'Bob',
			age: 22,
			averageScore: 45,
			activeLabel: 'No' as const,
			passedLabel: 'No' as const
		},
		{
			id: '3',
			name: 'Charlie',
			age: 19,
			averageScore: 70,
			activeLabel: 'Yes' as const,
			passedLabel: 'Yes' as const
		}
	];

	it('filters by active only', () => {
		const result = filterAndSort(students, true, '', '');
		expect(result).toHaveLength(2);
		expect(result.every((s) => s.activeLabel === 'Yes')).toBe(true);
	});

	it('filters by search query', () => {
		const result = filterAndSort(students, false, 'ali', '');
		expect(result).toHaveLength(1);
		expect(result[0].name).toBe('Alice');
	});

	it('sorts by name ascending', () => {
		const result = filterAndSort(students, false, '', 'name');
		expect(result[0].name).toBe('Alice');
		expect(result[1].name).toBe('Bob');
	});

	it('sorts by averageScore descending', () => {
		const result = filterAndSort(students, false, '', 'averageScore');
		expect(result[0].averageScore).toBe(90);
	});
});
