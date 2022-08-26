import { Plugin } from "obsidian";
import scratchblocks from "scratchblocks";

export default class Scratchblocks extends Plugin {
  async onload() {
    window["scratchblocks"] = scratchblocks;
    this.registerMarkdownCodeBlockProcessor("scratchblock", (src, el) => {
      const doc = scratchblocks.parse(src);
      const svg = scratchblocks.render(doc);
      el.replaceWith(svg as any);
    });
  }
  onunload() {}
}
