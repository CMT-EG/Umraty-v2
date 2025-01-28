export function removeEmptyFields<T extends Record<string, any>>(
  obj: T
): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) =>
        value !== 0 &&
        value?.length !== 0 &&
        value !== null &&
        value !== undefined
    )
  ) as Partial<T>;
}
