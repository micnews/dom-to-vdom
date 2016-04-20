import 'babel-core/register';
import test from 'ava';
import queryDom from 'query-dom';
import {renderString, tree} from 'deku';
import element from 'virtual-element';
import init from './lib';

const render = vdom => renderString(tree(vdom));
const domToJsx = init({element});

test('empty element', t => {
  const [dom] = queryDom('<div></div>');

  t.is(render(domToJsx(dom)), '<div></div>');
});

test('attributes on root node', t => {
  const [dom] = queryDom('<span class="foo" bar="bas"></span>');

  t.is(render(domToJsx(dom)), '<span class="foo" bar="bas"></span>');
});
