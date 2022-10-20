const { body } = require('express-validator');

exports.createContactValidation = [
  body('email').not().isEmpty().isEmail(),
  body('firstName').isLength({ min: 20 }),
  body('lastName').not().isEmpty(),
  body('favoriteColor').not().isEmpty(),
  body('birthday').not().isEmpty().isDate()
];
