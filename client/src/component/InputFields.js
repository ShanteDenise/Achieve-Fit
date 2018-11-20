import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

const InputFieldGroup =  ({
    name,
    placeholder,
    value,
    info,
    error,
    onChange
***REMOVED***) => {
    return (

            <div className='form-group'>
                <textarea
                    className={classnames('form-control form-control-lg', {
                        'is-invalid' : error  
                    ***REMOVED***)***REMOVED***
                    placeholder={placeholder***REMOVED***
                    name={name***REMOVED***
                    value={value***REMOVED***
                    onChange={onChange***REMOVED***
                    />
                     {info && <small className="form-text text-muted"> {info***REMOVED***</small>***REMOVED***
                     {error && <div className="form-text text-muted"> {error***REMOVED***</div>***REMOVED***

            </div>
                
         
        );
    ***REMOVED***

InputFieldGroup.propTypes ={
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,

***REMOVED***
InputFieldGroup.defaultProps = {
    type: 'text'
***REMOVED***

export default InputFieldGroup;