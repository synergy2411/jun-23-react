import { sum } from "./math";

test("render the result as sum of two values", () => {
  // Arrange

  // Act
  const result = sum(2, 4);

  // Assert
  expect(result).toBe(6);
});
