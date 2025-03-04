import { validateScore } from "../src/validateScore";
import { expect, test, describe } from "vitest";

test("validateScore(50) should return an object with valid: true, score: 50, passed: false, grade: 'F', errors: []", () => {
    expect(validateScore(50)).toStrictEqual({
        valid: true,
        score: 50,
        passed: false,
        grade: "F",
        errors: [],
    });
});

test("validateScore(60) should return an object with valid: true, score: 60, passed: true, grade: 'D', errors: []", () => {
    expect(validateScore(60)).toStrictEqual({
        valid: true,
        score: 60,
        passed: true,
        grade: "D",
        errors: [],
    });
});

test("validateScore(70) should return an object with valid: true, score: 70, passed: true, grade: 'C', errors: []", () => {
    expect(validateScore(70)).toStrictEqual({
        valid: true,
        score: 70,
        passed: true,
        grade: "C",
        errors: [],
    });
});

test("validateScore(80) should return an object with valid: true, score: 80, passed: true, grade: 'B', errors: []", () => {
    expect(validateScore(80)).toStrictEqual({
        valid: true,
        score: 80,
        passed: true,
        grade: "B",
        errors: [],
    });
});

test("validateScore(90) should return an object with valid: true, score: 90, passed: true, grade: 'A', errors: []", () => {
    expect(validateScore(90)).toStrictEqual({
        valid: true,
        score: 90,
        passed: true,
        grade: "A",
        errors: [],
    });
});

test("validateScore(-10) should return an object with valid: false, score: -10, passed: false, grade: '', errors: [`Score muss zwischen 0 und 100 liegen`]", () => {
    expect(validateScore(-10)).toStrictEqual({
        valid: false,
        score: -10,
        passed: false,
        grade: "",
        errors: ["Score muss zwischen 0 und 100 liegen"],
    });
});

test("validateScore(110) schould return an object with valid: false, score: 110, passed: false, grade: '', errors: [`Score muss zwischen 0 und 100 liegen`]", () => {
    expect(validateScore(110)).toStrictEqual({
        valid: false,
        score: 110,
        passed: false,
        grade: "",
        errors: ["Score muss zwischen 0 und 100 liegen"],
    });
});

test("validateScore() should return an object with valid: false, score: undefined, passed: false, grade: '', errors: [`Score ist erforderlich`]", () => {
    expect(validateScore()).toStrictEqual({
        valid: false,
        score: undefined,
        passed: false,
        grade: "",
        errors: ["Score ist erforderlich"],
    });
});

test("validateScore(test) should return an object with valid: false, score: 'test', passed: false, grade: '', errors: [`Score muss eine Zahl sein`]", () => {
    expect(validateScore("test")).toStrictEqual({
        valid: false,
        score: "test",
        passed: false,
        grade: "",
        errors: ["Score muss eine Zahl sein"],
    });
});

test("validateScore(50.5, {strictMode: true}) should return an object with valid: false, score: 50.5, passed: false, grade: '', errors: [`Score muss eine ganze Zahl sein`]", () => {
    expect(validateScore(50.5, {strictMode: true})).toStrictEqual({
        valid: false,
        score: 50.5,
        passed: false,
        grade: "",
        errors: ["Score muss eine ganze Zahl sein"],
    });
});

test("validateScore((NaN), {strictMode: true} should return an object with valid: false, score: 0.6666666666666666, passed: false, grade: '', errors: [`Score muss eine ganze Zahl sein`]", () => {
    expect(validateScore((NaN), {strictMode: true})).toStrictEqual({
        valid: false,
        score: NaN,
        passed: false,
        grade: "",
        errors: ["Score muss eine gültige Zahl sein"],
    });
});

test("validateScore(50, {bonusCategories: ['test']}) should return an object with valid: true, score: 52, passed: false, grade: 'F', errors: []", () => {
    expect(validateScore(50, {bonusCategories: ["test"]})).toStrictEqual({
        valid: true,
        score: 52,
        passed: false,
        grade: "F",
        errors: [],
    });
});

test("validateScore(50, {bonusCategories: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']}) should return an object with valid: true, score: 60, passed: true, grade: 'D', errors: []", () => {
    expect(validateScore(50, {bonusCategories: ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test"]})).toStrictEqual({
        valid: true,
        score: 60,
        passed: true,
        grade: "D",
        errors: [],
    });
});

test("validateScore(50, {bonusCategories: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']}) should return an object with valid: true, score: 60, passed: true, grade: 'D', errors: []", () => {
    expect(validateScore(50, {bonusCategories: ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test"]})).toStrictEqual({
        valid: true,
        score: 60,
        passed: true,
        grade: "D",
        errors: [],
    });
});