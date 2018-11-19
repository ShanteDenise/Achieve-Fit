const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {***REMOVED***;

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Job title field is required';
  ***REMOVED***

  if (Validator.isEmpty(data.company)) {
    errors.company = 'Company field is required';
  ***REMOVED***

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  ***REMOVED***

  return {
    errors,
    isValid: isEmpty(errors)
  ***REMOVED***;
***REMOVED***;

