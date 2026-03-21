export const SORT_OPTIONS = {
	DEFAULT: '',
	NAME: 'name',
	AVERAGE_SCORE: 'averageScore'
} as const;

export type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];
