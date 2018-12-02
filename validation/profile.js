const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {***REMOVED***;

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.goals = !isEmpty(data.goals) ? data.goals : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 ***REMOVED***)) {
    errors.handle = 'Handle needs to between 2 and 4 characters';
  ***REMOVED***

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Profile handle is required';
  ***REMOVED***

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  ***REMOVED***

  if (Validator.isEmpty(data.goals)) {
    errors.skills = 'Goals field is required';
  ***REMOVED***

  return {
    errors,
    isValid: isEmpty(errors)
  ***REMOVED***;
***REMOVED***;