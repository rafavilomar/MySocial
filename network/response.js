const response = {
  success : (req, res, message = 'OK', status = 200) => {
    res.status(status).send({
      error: false,
      status: status,
      body: message
    })
  },
  error : (req, res, message = 'Internal server error', status = 500) => {
    res.status(status).send({
      error: true,
      status: status,
      body: message
    })
  } 
}

export default response;