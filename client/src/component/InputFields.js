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
}) => {
    return (

            <div className='form-group'>
                <textarea
                    className={classnames('form-control form-control-lg', {
                        'is-invalid' : error  
                    })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    />
                     {info && <small className="form-text text-muted"> {info}</small>}
                     {error && <div className="form-text text-muted"> {error}</div>}

            </div>
                
         
        );
    }

InputFieldGroup.propTypes ={
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,

}
InputFieldGroup.defaultProps = {
    type: 'text'
}

export default InputFieldGroup;