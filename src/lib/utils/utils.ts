export function debounce<T extends (value: string) => void>(callback: T, delay: number): T {
	let timerId: ReturnType<typeof setTimeout>;

	return ((value) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => callback(value), delay);
	}) as T;
}
