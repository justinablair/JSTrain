const isBalanced = require('./isBalanced');
describe("isBalanced", () => {

    test("returns true for simple balanced brackets", () => {
      expect(isBalanced('()')).toEqual(true)
    })
  
    test("returns true for multiple balanced brackets", () => {
      expect(isBalanced('()[]{}<>')).toEqual(true)
    })

    test("returns true for complex balanced strings", () => {
        expect(isBalanced('[({})[()]]')).toEqual(true)
      })

    test("returns true for nested balanced brackets", () => {
      expect(isBalanced('([{<>}])')).toEqual(true)
    })
  
  
    test("returns false for simple unbalanced brackets", () => {
      expect(isBalanced('(')).toEqual(false)
    })
  
    test('returns false for complex unbalanced brackets', () => {
      expect(isBalanced('([])[{}]{(([))}')).toEqual(false)
    })
  
    test("it returns false for balanced brackets containing unbalanced brackets", () => {
      expect(isBalanced('({)')).toEqual(false)
    })
  
    test("it returns false for matched but unbalanced brackets", () => {
      expect(isBalanced('([])[{}]{([)]}')).toEqual(false)
    })

  })