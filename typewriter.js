const sentence = "hello there from lighthouse labs";

const typer = (letter, time, cb) => {
  if (letter) {
    setTimeout(() => {
      process.stdout.write(letter);
      cb();
    }, time);
  }
};

let ms = 0;
for (const char of sentence) {
  typer(char, ms, typer);
  ms += 50;
}
setTimeout(() => {
  console.log();
}, ms);
