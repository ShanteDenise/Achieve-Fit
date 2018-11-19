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
    errors.skills = 'Skills field is required';
  ***REMOVED***

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    ***REMOVED***
  ***REMOVED***

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    ***REMOVED***
  ***REMOVED***

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    ***REMOVED***
  ***REMOVED***

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    ***REMOVED***
  ***REMOVED***

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    ***REMOVED***
  ***REMOVED***

  return {
    errors,
    isValid: isEmpty(errors)
  ***REMOVED***;
***REMOVED***;