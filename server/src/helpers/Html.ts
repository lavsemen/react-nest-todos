export class Html {
    static removeHtmlTags(html: string): string {
        const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        return  body && body[1].replace(/<\/?[^>]+(>|$)/g, '');
    }

    static getImgUrls(html: string): string[] {
      const tags = html.match(/<img[^>]+>/g) || [];

      return tags.map(tag => {
        const src = tag.match(/src="([^"]+)"/);
        return src && src[1];
      });
    }
}
