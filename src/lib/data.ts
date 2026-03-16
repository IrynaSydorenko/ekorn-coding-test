export interface Scores {
	math: number;
	english: number;
	science: number;
}

export interface StudentDataItem {
	id: number;
	firstName: string;
	lastName: string;
	birthdate: string;
	scores: Scores;
	isActive: boolean;
}

export const studentsData: readonly StudentDataItem[] = [
	{
		id: 1,
		firstName: 'Hermione',
		lastName: 'Granger',
		birthdate: '2002-09-19',
		scores: {
			math: 98,
			english: 100,
			science: 99
		},
		isActive: true
	},
	{
		id: 2,
		firstName: 'Marty',
		lastName: 'McFly',
		birthdate: '1984-06-12',
		scores: {
			math: 75,
			english: 80,
			science: 78
		},
		isActive: true
	},
	{
		id: 3,
		firstName: 'Cady',
		lastName: 'Heron',
		birthdate: '1988-05-03',
		scores: {
			math: 63,
			english: 72,
			science: 52
		},
		isActive: true
	},
	{
		id: 4,
		firstName: 'Napoleon',
		lastName: 'Dynamite',
		birthdate: '1992-11-14',
		scores: {
			math: 60,
			english: 70,
			science: 65
		},
		isActive: false
	},
	{
		id: 5,
		firstName: 'Ferris',
		lastName: 'Bueller',
		birthdate: '1997-06-11',
		scores: {
			math: 62,
			english: 58,
			science: 73
		},
		isActive: false
	},
	{
		id: 6,
		firstName: 'Cher',
		lastName: 'Horowitz',
		birthdate: '2005-04-10',
		scores: {
			math: 42,
			english: 68,
			science: 65
		},
		isActive: true
	},
	{
		id: 7,
		firstName: 'Peter',
		lastName: 'Parker',
		birthdate: '2003-08-10',
		scores: {
			math: 100,
			english: 92,
			science: 100
		},
		isActive: true
	},
	{
		id: 8,
		firstName: 'Wednesday',
		lastName: 'Addams',
		birthdate: '2004-10-13',
		scores: {
			math: 89,
			english: 88,
			science: 94
		},
		isActive: true
	}
] as const;

export interface Student {
	id: string;
	name: string;
	age: number;
	averageScore: number;
	activeLabel: 'Yes' | 'No';
	passedLabel: 'Yes' | 'No';
}
