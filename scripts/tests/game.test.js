/**
 * @jest-environment jsdom
 */

const { exportAllDeclaration, toBindingIdentifierName } = require("@babel/types");
const { default: test } = require("node:test");
const { describe } = require("yargs");
const { game } = require("../game");

beforeAll (() => {
    let fs = required("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
});