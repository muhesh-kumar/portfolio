export default (...classes: string[]): string =>
  classes.filter(Boolean).join(' ');
