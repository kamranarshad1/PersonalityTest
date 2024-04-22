import { resultDetails } from '../constants/constant'

export const findValueByKey = (key) => {
  for (let pair of resultDetails) {
    if (pair.type === key) {
      return pair
    }
  }
  return null
}
