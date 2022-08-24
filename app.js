// os modules 
const os = require('os');

// info about current user 

const user = os.userInfo();
console.log(user)

// method return the system uptime in secs 

const t  = os.uptime();

console.log(t)


const currentOS = {
	name : os.type(),
	release: os.release(),
	totalMenu: os.totalmem(),
	freeMenu: os.freemem()
}

console.log(currentOS)

// path modules 
// const path = require('path');
// console.log(path.sep)

// const filePath = path.join('/content', '/subfolder', 'test.txt')

// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
// console.log(absolute);



// fs file system modules 

// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8')
// console.log(first)

// const sec = readFileSync('./content/subfolder/test.txt', 'utf8')
// console.log(sec)

// writeFileSync(
// 	'./content/result-sync.txt', 
// 	`Here is the result : ${first}, ${sec}.`,
// 	{ flag :'a'}
// 	)

// Asynchronous 

// const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt', 'utf8', ( err, result ) => {
// 	if(err){
// 		console.log(err)
// 		return
// 	}
// 	const first = result;
// 		readFile('./content/subfolder/test.txt', 'utf8', ( err, result ) => {
// 		if(err){
// 			console.log(err)
// 			return
// 		}
// 		const sec = result;

// 			writeFile('./content/asynapproach.txt', 
// 			 `Here is the result : ${first} and ${sec}`,
// 			( err, result ) => {
// 				if(err) {
// 					console.log(err)
// 					return 
// 				}
// 				console.log(result)
// 			})
// 		})

// })

// Http modules 

const http = require('http')

const server = http.createServer( (req, res) => {

	if(req.url === '/'){
		res.end('Welcome')
	}

	if(req.url === '/about'){
		res.end('Here is our short history')
	}

	res.end(`
		<h1>Opps!</h1>
		<a href="/">back home</a>
		`)
})



server.listen(5000)