import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

const TextFieldGroup =  ({
    name,
    placeholder,
    value,
    info,
    error,
    type,
    onChange,
    disabled
***REMOVED***) => {
    return (

            <div className='form-group'>
                <input
                    type={type***REMOVED***
                    className={classnames('form-control form-control-lg', {
                        'is-invalid' : error  
                    ***REMOVED***)***REMOVED***
                    placeholder={placeholder***REMOVED***
                    name={name***REMOVED***
                    value={value***REMOVED***
                    onChange={onChange***REMOVED***
                    disabled={disabled***REMOVED***
                    />
                     {info && <small className="form-text text-muted"> {info***REMOVED***</small>***REMOVED***
                     {error && <div className="form-text text-muted"> {error***REMOVED***</div>***REMOVED***
                     {/* input error if there is an error under the form */***REMOVED***

            </div>
                
         
        );
    ***REMOVED***

TextFieldGroup.propTypes ={
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    label:PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string

***REMOVED***
TextFieldGroup.defaultProps = {
    type: 'text'
***REMOVED***

export default TextFieldGroup;