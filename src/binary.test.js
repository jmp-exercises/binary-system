const { binaryToInteger } = require("./binary.js");

describe("binary", () => {
  describe("binaryToInteger", () => {
    it("should take exactly one parameter", () => {
      expect(binaryToInteger.length).toBe(1);
    });

    it("should translate the binary number 0 correctly", () => {
      expect(binaryToInteger("0")).toBe(0);
    });

    it("should translate the binary number 1 correctly", () => {
      expect(binaryToInteger("1")).toBe(1);
    });

    it("should translate numbers below 8 correctly", () => {
      expect(binaryToInteger("10")).toBe(2);
      expect(binaryToInteger("11")).toBe(3);
      expect(binaryToInteger("100")).toBe(4);
      expect(binaryToInteger("101")).toBe(5);
      expect(binaryToInteger("110")).toBe(6);
      expect(binaryToInteger("111")).toBe(7);
    });
  });
});

