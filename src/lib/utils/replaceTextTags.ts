export default function replaceTextTags(text: string): Array<{ text: string, title?: string, description?: string }> {
  return text.split(/(<[^/]+.\b[^>]+>[^<]*<\/>)/)
    .map((sentence) => {
      const valueInsideTag = sentence.match(/(?<=>).*?(?=<)/g)?.join("");

      let obj: {
        text: string;
        title?: string;
        description?: string;
      };

      if (valueInsideTag === undefined) {
        obj = { text: sentence };
      } else {
        obj = {
          text: sentence,
          title: valueInsideTag,
          description: valueInsideTag,
        };
      }

      return obj;
    });
}