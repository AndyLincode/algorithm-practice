function rs(n) {
  console.log(`We are in rs(${n})`);
  if (n === 1) {
    return 10;
  } else {
    return rs(n - 1) + 15;
  }
}

console.log(rs(3));

// rs(3) => rs(2) + 15 => 10 + 15 + 15
// rs(2) => rs(1) + 15 => 10 + 15
// rs(1) => 10
