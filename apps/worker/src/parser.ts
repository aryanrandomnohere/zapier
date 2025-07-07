export default function Parser(
  text: string,
  startDelimeter = "{{",
  endDelimeter = "}}",
  metadata: any,
) {
  let startIndex = 0;
  let endIndex = 1;
  let finalString = "";
  while (endIndex < text.length) {
    if (text[startIndex] + text[startIndex + 1] === startDelimeter) {
      endIndex = startIndex + 2;
      while (text[endIndex] + text[endIndex + 1] != endDelimeter) {
        endIndex++;
      }
      startIndex += 2;
      const keyValue = text.slice(startIndex, endIndex);
      let keys = keyValue.split(".");
      let localMetadata = {
        ...metadata,
      };
      for (let i = 0; i < keys.length; i++) {
        if (typeof localMetadata === "string") {
          localMetadata = JSON.parse(localMetadata);
        }
        localMetadata = localMetadata[keys[i]];
      }
      finalString += localMetadata;
      startIndex = endIndex + 2;
      endIndex = endIndex + 3;
    } else {
      if (text[startIndex + 1] === "{") {
        finalString += text[startIndex];
        startIndex++;
        endIndex++;
      } else {
        finalString += text[startIndex];
        finalString += text[startIndex + 1];
        startIndex += 2;
        endIndex += 3;
      }
    }
  }
  return finalString;
}
