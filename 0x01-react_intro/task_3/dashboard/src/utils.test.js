import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
test('getFullYear', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});
test('getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('ALX');
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
});
test('getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});