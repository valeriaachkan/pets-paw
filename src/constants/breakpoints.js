const breakpoints = {
	xs: '375px',
	sm: '768px',
	md: '1024px',
	lg: '1440px',
};

export const devices = {
	xs: `(min-width: ${breakpoints.xs})`,
	sm: `(min-width: ${breakpoints.sm})`,
	md: `(min-width: ${breakpoints.md})`,
	lg: `(min-width: ${breakpoints.lg})`,
	onlyXs: `(max-width: 767px)`,
	onlySm: `(max-width: 1023px)`,
};
