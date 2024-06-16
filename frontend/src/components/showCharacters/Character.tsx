import styled from '@emotion/styled';
import { Suggestion } from '../../types';


const Character = ({name, image, id, species, gender, status, origin}: Suggestion): JSX.Element => (
                
    <CharacterStyled>
        <img id={id} src={image} alt="" className='img'  />
        {id &&<label className='data-lbl'><strong>ID: </strong>{id}</label>}
        <label className='data-lbl'><strong>Name: </strong>{name}</label>
        {species && <label className='data-lbl'><strong>Species:</strong> {species}</label>}
        {gender && <label className='data-lbl'><strong>Gender:</strong> {gender}</label>}
        {status && <label className='data-lbl'><strong>Status:</strong> {status}</label>}
        {origin && <label className='data-lbl'><strong>Origin:</strong> {origin}</label>}
    </CharacterStyled>            
        
);

const CharacterStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin: 10px;
    .img{
        width: 200px;
        height: 200px;
    }

`;


export default Character;