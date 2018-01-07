import React from 'react'
import styled from 'styled-components'

const Message = styled.p`
  text-align: center;
`
const Footer = styled.div`
  width:100%;
  background-color: yellow;
`
export default (props) => (
  <Footer>
    <Message>ASS Footer</Message>
  </Footer>
)
