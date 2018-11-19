const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {***REMOVED***;

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 ***REMOVED***)) {
    errors.name = 'Name must be between 2 and 30 characters';
  ***REMOVED***

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  ***REMOVED***

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  ***REMOVED***

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  ***REMOVED***

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  ***REMOVED***

  if (!Validator.isLength(data.password, { min: 6, max: 30 ***REMOVED***)) {
    errors.password = 'Password must be at least 6 characters';
  ***REMOVED***

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  ***REMOVED***

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  ***REMOVED***

  return {
    errors,
    isValid: isEmpty(errors)
  ***REMOVED***;
***REMOVED***;
