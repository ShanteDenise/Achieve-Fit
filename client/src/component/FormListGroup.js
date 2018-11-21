import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

const FormListGroup =  ({
    name,
    value,
    info,
    error,
    onChange,
    options
***REMOVED***) => {
    const selectOptions = options.map(option => (
        <option key={option.label***REMOVED*** value={option.value***REMOVED***>
        {option.label***REMOVED***
        </option>
    ))
    return (

            <div className='form-group'>
                <select
                    className={classnames('form-control form-control-lg', {
                        'is-invalid' : error  
                    ***REMOVED***)***REMOVED***
                    name={name***REMOVED***
                    value={value***REMOVED***
                    onChange={onChange***REMOVED***>
                    {selectOptions***REMOVED***
                    </select>
                
                     {info && <small className="form-text text-muted"> {info***REMOVED***</small>***REMOVED***
                     {error && <div className="form-text text-muted"> {error***REMOVED***</div>***REMOVED***

            </div>
                
         
        );
    ***REMOVED***

FormListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired

***REMOVED***


export default FormListGroup;