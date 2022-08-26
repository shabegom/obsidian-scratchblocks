// Empty declaration to allow for css imports
declare module "*.css" {}

declare module "scratchblocks" {
  function render(doc) {
    return Element;
  }
  function parse(src) {
    return Document;
  }
}
