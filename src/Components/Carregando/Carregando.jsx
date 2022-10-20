import React from 'react';
import { Loader, Fundo } from './styled';

export const Carregando = () => {

return(
<> 
    <Fundo/>
    <Loader> 
        <span class="loader"></span>
    </Loader>
    </>  
)

}