const getAttributes = elm => {
  const obj = {};
  for (let i = 0; i < elm.attributes.length; i++) {
    let attr = elm.attributes[i];
    obj[attr.name] = attr.value;
  }
  return obj;
};

module.exports = ({element}) => {
  const parseElm = elm => {
    // ELEMENT_NODE
    if (elm.tagName) {
      return element(elm.tagName, getAttributes(elm), parseChildren(elm.childNodes));
    }

    // TEXT_NODE
    if (elm.nodeName === '#text') {
      return elm.data;
    }
  };

  const parseChildren = childNodes => {
    const result = [];
    for (let i = 0; i < childNodes.length; i++) {
      const child = parseElm(childNodes[i]);

      if (child) {
        result.push(child);
      }
    }
    return result;
  };

  return elm => parseElm(elm);
};
