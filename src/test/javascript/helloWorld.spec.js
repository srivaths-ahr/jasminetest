const helloWorld = require('../../main/javascript/helloWorld.js');

describe("helloWorld", () => {
    it("returns hello world", () => {
      expect(helloWorld()).toBe("hello world");
    });
  });