console.log('worker started')

setInterval(() => {
  console.log('worker running...')
}, 1000 * 60)

process.stdin.resume(); // prevent to exit

process.on('SIGTERM', () => {
  console.log('SIGTERM received')
})
