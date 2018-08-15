// const data = require('./posts.json');

// const data = [
//   {
//     "account": "admin",
//     "roles": [
//       "admin"
//     ],
//     "password": "admin"
//   },
//   {
//     "account": "guest",
//     "roles": [
//       "guest"
//     ],
//     "password": "guest"
//   },
//   {
//     "account": "pm",
//     "roles": [
//       "pm"
//     ],
//     "password": "pm"
//   },
//   {
//     "account": "ui",
//     "roles": [
//       "ui"
//     ],
//     "password": "ui"
//   },
//   {
//     "account": "dev",
//     "roles": [
//       "dev"
//     ],
//     "password": "dev"
//   },
//   {
//     "account": "qa",
//     "roles": [
//       "qa"
//     ],
//     "password": "qa"
//   },
//   {
//     "account": "bowen",
//     "roles": [
//       "dev",
//       "ui"
//     ],
//     "password": "bowen"
//   }
// ]

const Mock = require('mockjs')

module.exports = {
  'GET /api/posts': (req, res) => { res.status(200).json({ users: Mock.mock({
    'data|80-100': [
      {
        id: '@id',
        name: '@name',
        nickName: '@last',
        phone: /^1[34578]\d{9}$/,
        'age|11-99': 1,
        address: '@county(true)',
        isMale: '@boolean',
        email: '@email',
        createTime: '@datetime',
        avatar () {
          return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
        },
      },
    ],
  }) }) },

  // Method like GET or POST can be omitted
  '/api/users/1': { id: 1 },

  // Support for custom functions, the API is the same as express@4
  'POST /api/users/create': (req, res) => { res.end('OK rails365'); },
}
