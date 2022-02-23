require('dotenv').config()
console.log(process.env.NODE_ENV)

const env = process.env.NODE_ENV
// export const base_url = 'https://wildorchid.one/'
export const base_url = env === 'development' ? 'http://localhost:3001/' : 'https://wildorchid.one/'