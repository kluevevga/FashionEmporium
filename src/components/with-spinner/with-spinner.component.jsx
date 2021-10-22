import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';


const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    console.log('loading:', isLoading);
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;