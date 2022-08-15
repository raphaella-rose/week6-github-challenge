let a = 10

const callback = () => {
	a = 20
}

setTimeout(callback, 1000)

console.log(a)

