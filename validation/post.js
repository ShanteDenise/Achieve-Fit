const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {***REMOVED***;

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 300 ***REMOVED***)) {
    errors.text = 'Post must be between 10 and 300 characters';
  ***REMOVED***

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  ***REMOVED***

  return {
    errors,
    isValid: isEmpty(errors)
  ***REMOVED***;
***REMOVED***;