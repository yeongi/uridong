function randomRstNum() {
  //7자리 일련번호
  return Math.floor(Math.random() * 10000000) + 1000000;
}

export { randomRstNum };
