import React from 'react'
import styled from 'styled-components'


const UserIcon = ({ index, userName }) => {

  return (
    <UserContainer>
      <ImageContainer>
        <img alt='randonImage' src={`https://joeschmoe.io/api/v1/${index}`} />
      </ImageContainer>
      <div class='userName'>{userName}</div>
    </UserContainer>
  )
}

export default UserIcon

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-radius: 50%;
  background-color: #d0bfec;
  img{
  /* width: 80px; */
  aspect-ratio: 1/1;
  width: 100%;
  border-radius: 50%;
  max-width: 100%;
  }
`

const UserContainer = styled.div`
  /* border: 1px solid yellow; */
display: grid;
gap: 0.5rem;
/* justify-content: center; */
/* align-items: center; */

  .userName {
  background-color: white;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  padding: 0.2rem 0.3rem;
  font-size: 0.9rem;


}

`
