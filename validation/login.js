const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {***REMOVED***;

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  ***REMOVED***

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  ***REMOVED***

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  ***REMOVED***

  return {
    errors,
    isValid: isEmpty(errors)
  ***REMOVED***;
***REMOVED***;
