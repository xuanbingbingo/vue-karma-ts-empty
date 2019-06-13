import { Selector } from 'testcafe';
import config from './config';
import { test1 } from './common_test'
fixture`test www.baidu.com`
  .page`${config.testUrl}`;
test('readonly', test1)