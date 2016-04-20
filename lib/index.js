const getAttributes = elm => {
  const obj = {};
  for (let i = 0; i < elm.attributes.length; i++) {
    let attr = elm.attributes[i];
    obj[attr.name] = attr.value;
  }
  return obj;
};

module.exports = ({element}) => elm => elm.tagName
  ? element(elm.tagName, getAttributes(elm), [])
  : elm.data;
