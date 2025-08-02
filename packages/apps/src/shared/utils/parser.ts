export default function Parser(
  text: string,
  startDelim = "{{",
  endDelim = "}}",
  metadata: any,
): string {
  let result = "";
  let index = 0;

  while (index < text.length) {
    const startIdx = text.indexOf(startDelim, index);

    if (startIdx === -1) {
      result += text.slice(index);
      break;
    }

    result += text.slice(index, startIdx);

    const endIdx = text.indexOf(endDelim, startIdx + startDelim.length);
    if (endIdx === -1) {
      result += text.slice(startIdx); // unmatched start delimiter
      break;
    }

    const keyPath = text.slice(startIdx + startDelim.length, endIdx).trim();

    const value = resolvePath(metadata, keyPath);
    result += value ?? ""; // if value is undefined, add empty string

    index = endIdx + endDelim.length;
  }

  return result;
}

// Resolves nested keys like "user.name.first"
function resolvePath(obj: any, path: string): any {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object") return acc[key];
    return undefined;
  }, obj);
}
