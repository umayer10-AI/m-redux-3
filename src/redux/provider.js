import React from 'react';
import { Provider } from 'react-redux';

const Providers = ({children}) => {
    return (
        <div>
            <Provider>
                {children}
            </Provider>
        </div>
    );
};

export default Providers;