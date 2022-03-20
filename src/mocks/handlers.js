// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.post('http://localhost:5000/create', (req, res, ctx) => {
    return res(
      ctx.json({
        success: false,
        message: 'The registration is currently not possible'
      })
    )
  }),
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            name: {
              title: 'Mrs',
              first: 'Noëlla',
              last: 'Blok'
            },
            location: {
              city: 'Suwald',
              state: 'Zuid-Holland',
              country: 'Netherlands'
            },
            email: 'noella.blok@example.com',
            login: {
              uuid: 'b09e56cf-3246-4bb7-a5bd-3042e5a91bb5',
              username: 'ticklishduck132',
              password: 'ping',
              salt: 'jrySRCAv',
              md5: '99cb62bf60c34965bd0f3e5b62a86528',
              sha1: 'fb8863e71e7087a4efe33278c266a3bff23e29ad',
              sha256:
                '0c9e73cbc910f374b729f8cf4023659dc1bd2ac29ab619f8d27f24a9766f3b6f'
            }
          }
        ]
      })
    )
  })
]
