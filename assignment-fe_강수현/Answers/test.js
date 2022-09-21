const get_random = require('./random.js');

// 숫자 크기, 연산여부 무관하게 양의 정수라면 숫자를 반환합니다.
test("numbers/true", () => {
  expect(typeof get_random(1)).toBe('number')
  expect(typeof get_random(17)).toBe('number')
  expect(typeof get_random(100)).toBe('number')
  expect(typeof get_random(5484)).toBe('number')
  expect(typeof get_random(78786)).toBe('number')
  expect(typeof get_random(989132)).toBe('number')
  expect(typeof get_random(113*32)).toBe('number')
  expect(typeof get_random(30/5)).toBe('number')
  expect(typeof get_random(23179+8474)).toBe('number')
  expect(typeof get_random(43e29)).toBe('number')
  expect(typeof get_random(900719925474099155)).toBe('number')
})

// 소수점 포함, 음수일 경우 숫자라도 undefined가 반환됩니다. 
test("numbers/false", () => {
  expect(typeof get_random(0)).toBe('undefined')
  expect(typeof get_random(-0)).toBe('undefined')
  expect(typeof get_random(-1)).toBe('undefined')
  expect(typeof get_random(4.239)).toBe('undefined')
  expect(typeof get_random(3/4)).toBe('undefined')
  expect(typeof get_random(489-2477)).toBe('undefined')
  expect(typeof get_random(58.22)).toBe('undefined')
})

// 숫자가 아닌 다른 형식 (문자열로 된 숫자 등)도 undefined가 반환됩니다.
test("otherTypes/false", () => {
  expect(typeof get_random('39')).toBe('undefined')
  expect(typeof get_random('hey')).toBe('undefined')
  expect(typeof get_random(null)).toBe('undefined')
  expect(typeof get_random(undefined)).toBe('undefined')
  expect(typeof get_random(true)).toBe('undefined')
  expect(typeof get_random([1])).toBe('undefined')
  expect(typeof get_random({1:1})).toBe('undefined')
})


