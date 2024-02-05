type Mods = Record<string, boolean>;

export function classNames(
  cls: string,
  additional: string[] = [],
  mods: Mods = {}
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([, value]) => value)
      .map(([className]) => className),
  ]
    .join(" ")
    .trim();
}
