import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

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

// describe('First react test using jest', () => {

//     it('everything runs correctly', () => {
//         expect(getFullYear()).toBe(new Date().getFullYear());
//         expect(getFooterCopy(true)).toBe('ALX');
//         expect(getFooterCopy(false)).toBe('ALX main dashboard');
//         expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
//     });
  
//   });