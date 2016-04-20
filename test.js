import 'babel-core/register';
import test from 'ava';
import queryDom from 'query-dom';
import {renderString, tree} from 'deku';
import element from 'virtual-element';
import init from './lib';

const render = vdom => renderString(tree(vdom));
const domToJsx = init({element});

test('empty element root node', t => {
  const input = '<div></div>';
  const [dom] = queryDom(input);
  const actual = render(domToJsx(dom));
  const expected = input;

  t.is(actual, expected);
});

test('attributes on root node', t => {
  const input = '<span class="foo" bar="bas"></span>';
  const [dom] = queryDom(input);
  const actual = render(domToJsx(dom));
  const expected = input;

  t.is(actual, expected);
});

test('text as root node', t => {
  const input = 'beep boop';
  const [dom] = queryDom(input);
  const actual = render(domToJsx(dom));
  const expected = input;

  t.is(actual, expected);
});
