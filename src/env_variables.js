require('dotenv').config()
console.log(process.env.NODE_ENV)

const env = process.env.NODE_ENV
export const base_url = 'http://localhost:3001/'