import setupDomToVdom from 'dom-to-vdom';
// works with any jsx compatible element
// this example uses deku@2
import {element, string} from 'deku';

const domToVdom = setupDomToVdom({element});

const vdom = domToVdom(document.querySelector('#element'));

console.log(string.render(vdom));
