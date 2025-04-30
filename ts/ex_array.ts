// type SizeKey = "XS" | "S" | "M" | "L" | "XL";

// // 각 사이즈에 대힌 요금표
// const SIZE: S = [
//   { id: "XS", price: 8000 },
//   { id: "S", price: 10000 },
//   { id: "M", price: 12000 },
//   { id: "L", price: 14000 },
//   { id: "XL", price: 15000 },
// ] as const;

// // 고객이 주문한 사이즈 별 수량
// const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

// const totalPrice = SIZE.reduce(
//   (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
//   0
// );
