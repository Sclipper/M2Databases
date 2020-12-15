import { randomWords } from './listData'

export const getRandom = ({ to, from = 0 }) => Math.floor(Math.random() * to) + from

export const getRandomFloat = ({ to, from = 0 }) => (Math.random() * (to - from) + from).toFixed(2)

export const getRandomWords = amount => {
  let string = ''
  for (let i = 0; i <= amount; i++) {
    string += `${randomWords[getRandom({ to: 100 })]}`
  }
  return string
}

// eslint-disable-next-line max-len
export const randomDate = (start = new Date(2012, 0, 1), end = new Date()) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
