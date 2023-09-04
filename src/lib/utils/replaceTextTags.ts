export default function replaceTextTags(text: string): Array<{ text: string, value?: string }> {
  return text.split(/(<[^/]+.\b[^>]+>[^<]*<\/>)/)
    .map((sentence) => {
      const valueInsideTag = sentence.match(/(?<=>).*?(?=<)/g)?.join("");

      let obj: {
        text: string;
        value?: string;
      };

      if (valueInsideTag === undefined) {
        obj = { text: sentence };
      } else {
        obj = {
          text: sentence,
          value: valueInsideTag,
        };
      }

      return obj;
    });
}