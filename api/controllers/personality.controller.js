const personalityService = require('../services/personality.service')

const determinePersonalityType = (req, res) => {
  return personalityService.determinePersonalityType(res, req.body)
};

module.exports = {
  determinePersonalityType,
};
