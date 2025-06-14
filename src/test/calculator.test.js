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
})

