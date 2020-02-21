const axios = require('axios')

const day = process.argv[2]
const url = 'https://student-guide.herokuapp.com/summary/' + day

async function logSummary(url){
  try{
    const logIt = await axios.get(url)
    console.log(logIt.data)
  } catch(error){
    console.log(error.message)
  }
}
