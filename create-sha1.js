function task(x) {
  const hash = crypto.createHash('sha1').update(x).digest('hex')
  return hash
}
