import { test, expect, describe, beforeAll } from "vitest";
import { calculator } from "../lib/calculator";

describe('testing calculator functions', () => {
    let calc

    beforeAll(() => {
        calc = calculator()
    })

    test('adding two numbers', () => { 
        expect(calc.add(2,4)).toBe(6)
    })
    test('subtracting a from b', () => { 
        expect(calc.subtract(10,4)).toBe(6)
    })
    test('multiplying two numbers', () => { 
        expect(calc.multiply(2,4)).toBe(8)
    })
    test('dividing a with b', () => { 
        expect(calc.divide(8,4)).toBe(2)
    })
    test('subtracting a from b with a < b', () => { 
        expect(calc.subtract(1,4)).toBe(-3)
    })
    test('dividing with 0', () => { 
        expect(calc.divide(8,0)).toBe("can't divide with 0")
    })
})

