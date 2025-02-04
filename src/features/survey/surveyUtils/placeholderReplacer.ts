export default function placeholderReplacer(
  text: string,
  values: Record<string, string>,
) {
  const replacedText = text.replace(/\{(.*?)\}/g, (_, key) => {
    const value = values[key.toLowerCase()] || '';

    if (!value) return '';

    return value;
  });

  return replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
}
