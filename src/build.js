import './styles/styles.css'

console.log("Hello World")

function test(...args) {
  let sum = 0
  args.forEach(element => {
    sum += element
  });
  console.log(sum)
}

test(1,2,3);