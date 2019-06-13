import { Selector } from 'testcafe';
const date = new Date();
const nowDate = date.getMonth() + 1 + '' + date.getDate() + '' + date.getHours() + '' + date.getMinutes() + '' + date.getSeconds()
export const test1 = async t => {
  await t
    .wait(1000)
    .expect(Selector('body').innerText).contains('百度推广')
}

