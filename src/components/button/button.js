import React from 'react';

import { CustomButtonContainer } from './buton.styles';

function ButtonComp ({children, ...prop}){
    return(
        <CustomButtonContainer {...prop}>
            {children}
        </CustomButtonContainer>
    )
};

export default ButtonComp