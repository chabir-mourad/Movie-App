import React from 'react';
import Loader from './Loader'

export const WithLoader = (WrappedComponent) => {
    const Spinner = (props) => {
return (props.loading ? <Loader/> : <WrappedComponent {...props}/>)
    }
return Spinner

}

export default WithLoader