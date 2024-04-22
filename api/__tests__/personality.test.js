const {
  determinePersonalityType,
} = require('../controllers/personality.controller')

describe('determinePersonalityType', () => {
  it('should return "Extrovert" when extrovert count is greater', () => {
    const req = {
      body: [0, 1, 3, 2, 1],
    }
    const res = { json: jest.fn() }
    determinePersonalityType(req, res)
    expect(res.json).toHaveBeenCalledWith({ status: 200, type: 'Extrovert' })
  })

  it('should return "Introvert" when introvert count is greater', () => {
    const req = {
      body: [0, 3, 3, 2, 3],
    }
    const res = { json: jest.fn() }
    determinePersonalityType(req, res)
    expect(res.json).toHaveBeenCalledWith({ status: 200, type: 'Introvert' })
  })

  it('should return "Ambivert" when extrovert and introvert counts are equal', () => {
    const req = { body: [0, 3, 2, 1] }
    const res = { json: jest.fn() }
    determinePersonalityType(req, res)
    expect(res.json).toHaveBeenCalledWith({ status: 200, type: 'Ambivert' })
  })
})
