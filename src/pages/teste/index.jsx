import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { TitleLogin } from '../login/styles';
import { Container22, DIV } from './styles';

const TesteUseState = () => {

    const [name, setName] = useState('Ronaldo');

    const handleChangeName = () => {
        setName(a => a === 'Gabriel' ? 'Ronaldo' : 'Gabriel')
    }

    const changeUser = () => { 
        handleChangeName();
    }

    useEffect(() => { 
        
    }, [name])

    return (
        <Container22>
            <DIV>
                <TitleLogin>{name}</TitleLogin>
            </DIV>
            <Button
                title="Entrar"
                variant="secondary"
                type="submit"
                onClick={handleChangeName}
            />
        </Container22>
    )
}

export default TesteUseState;