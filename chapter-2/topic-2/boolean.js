let trueBool = true;
let falseBool = false;

let apakahLebihDariDua = 1 > 2;
console.log(apakahLebihDariDua);

/**
 * AND (&&) logic is to find the first false value
 * if there are all true, it will get the last value
 */
let a = 1;
let b = 1;
const c = a && b && true && "berhasil" && 9;
console.log("Nilai c:", c);

/**
 * OR (||) logic is to find the first true value
 */
let d = 2;
const e = false || false || false || "" || true || 0;
console.log("Nilai e:", e);

/**
 * Ternary Operator
 */
let newBool;
if (trueBool) {
  newBool = 1;
} else {
  newBool = 2;
}
console.log("newBool :", newBool);

newBool = trueBool ? 3 : 2;
console.log("new bool with ternary :", newBool);
