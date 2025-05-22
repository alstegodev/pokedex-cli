import {describe, expect, test} from "vitest";
import {cleanInput} from "./repl";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },

])("cleanInput($input)", ({input, expected}) => {

    test(`Expected ${expected}`, () => {

        let actual = cleanInput(input);

        expect(actual).toHaveLength(expected.length)
        for(const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }

    })

})