class CustomHTML {
  constructor(tagName, attributes) {
    this.tagName = tagName;
    this.attributes = attributes;
  }

  render(selector) {
    const newElem = document.createElement(this.tagName);
    for (const attrKey in this.attributes) {
      const attrValue = this.attributes[attrKey];
      newElem.setAttribute(attrKey, attrValue);
    }

    const elem = document.querySelector(selector);
    elem.replaceChildren(newElem);
  }
}
