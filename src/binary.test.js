const { binaryToInteger, integerToBinary } = require("./binary.js");

function* generateRandomNumbers(amount) {
  for (let i = 0; i < amount; i++) {
    yield Math.floor(Math.random() * (2 ** 32 - 1));
  }
}

describe("binary", () => {
  describe("Exercise 1: binaryToInteger", () => {
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

    it("should work for random numbers", () => {
      for (let number of generateRandomNumbers(20)) {
        expect(binaryToInteger(number.toString(2))).toBe(number);
      }
    });
  });

  xdescribe("Exeercise 2: integerToBinary", () => {
    it("should take exactly one parameter", () => {
      expect(integerToBinary.length).toBe(1);
    });

    it("should translate the integer 0 correctly", () => {
      expect(integerToBinary(0)).toBe("0");
    });

    it("should translate the integer 1 correctly", () => {
      expect(integerToBinary(1)).toBe("1");
    });

    it("should translate integers below 8 correctly", () => {
      expect(integerToBinary(2)).toBe("10");
      expect(integerToBinary(3)).toBe("11");
      expect(integerToBinary(4)).toBe("100");
      expect(integerToBinary(5)).toBe("101");
      expect(integerToBinary(6)).toBe("110");
      expect(integerToBinary(7)).toBe("111");
    });

    it("should work for random integers", () => {
      for (let number of generateRandomNumbers(20)) {
        expect(integerToBinary(number)).toBe(number.toString(2));
      }
    });
  });
});
