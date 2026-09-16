/**
 * Builds a URL query string from a plain object.
 * Skips undefined / null / empty-string values.
 */
export function buildQueryString(
  params?: Record<string, unknown>,
): string {
  if (!params) return "";
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    search.set(key, String(value));
  }
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

export default buildQueryString;
