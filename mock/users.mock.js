
export default {
  'POST /user'(req, res) {
    setTimeout(() => {
      res.json({
        name: 'duwenbin',
        id: 11
      })
    }, 1000)
  }
}