const {
  binaryToInteger,
  integerToBinary,
  integerToBaseN
} = require("./binary.js");

function* generateRandomNumbers(amount) {
  for (let i = 0; i < amount; i++) {
    yield Math.floor(Math.random() * 2 ** 32);
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

  xdescribe("Exercise 2: integerToBinary", () => {
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

  xdescribe("Bonus Exercise: integerToBaseN", () => {
    it("should take exactly two parameters", () => {
      expect(integerToBaseN.length).toBe(2);
    });

    it("should translate the integer 0 correctly", () => {
      expect(integerToBaseN(0, 2)).toBe("0");
      expect(integerToBaseN(0, 7)).toBe("0");
      expect(integerToBaseN(0, 13)).toBe("0");
      expect(integerToBaseN(0, 16)).toBe("0");
    });

    it("should translate the integer 1 correctly", () => {
      expect(integerToBaseN(1, 3)).toBe("1");
      expect(integerToBaseN(1, 6)).toBe("1");
      expect(integerToBaseN(1, 8)).toBe("1");
      expect(integerToBaseN(1, 15)).toBe("1");
    });

    it("should use A-F as alphabet for letters hight than 9", () => {
      expect(integerToBaseN(10, 16).toUpperCase()).toBe("A");
      expect(integerToBaseN(11, 12).toUpperCase()).toBe("B");
      expect(integerToBaseN(255, 16).toUpperCase()).toBe("FF");
      expect(integerToBaseN(13, 15).toUpperCase()).toBe("D");
    });

    it("should work for random integers", () => {
      for (let number of generateRandomNumbers(5)) {
        const base = Math.floor(Math.random() * 15) + 2;
        expect(integerToBaseN(number, base).toUpperCase()).toBe(
          number.toString(base).toUpperCase()
        );
      }
    });
  });
});
