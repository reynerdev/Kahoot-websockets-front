import React from 'react'
import { flushSync } from 'react-dom'
import styled, { keyframes } from 'styled-components'

const MainLayout = ({ children }) => {
  // state to handle the error for MainPage component, we could've use
  // react context to avoid prochildrenp drilling instead, we're using compound 
  // components to learn with REach children and React.cloneElement

  const [error, setError] = React.useState(false)
  const [fadeIn, setFadeIn] = React.useState(false)

  React.useEffect(() => {

    console.log("useEffectMainLayout")

    if (error) {

      setTimeout(() => {
        flushSync(() => {
          setFadeIn(true)
        })
      }, 4000)
    }

  }, [error])


  React.useEffect(() => {

    if (fadeIn) {
      setTimeout(() => {
        setFadeIn(false)
        setError(false)

      }, 600)

    }
  }, [fadeIn])

  const renderChildren = React.Children.map(children, child => {
    // will inyect only props to the children that is MainPage
    if (child.type.name === "MainPage") {

      const newChild = React.cloneElement(child, { error, setError })
      return newChild

    }
    return child

  })

  console.log(renderChildren)

  return (
    <>
      <div className=" w-screen overflow-hidden h-screen bg-base flex justify-center ">
        {renderChildren}
        {error && <Footer fadeIn={fadeIn} className={`absolute text-white bg-red-500`}>Necesita ingresar un pin valido</Footer>}
      </div>
    </>

  )



}

export default MainLayout;

const FooterKeyframe = keyframes`

  0% {
  transform: translateY(100%);
  }
  
  100%{
  transform: translateY(0%);
  }


`

const Footer = styled.div`

  background-color: rgb(226 27 60);
  padding: 0.0625rem 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  animation: .2s ease-in-out 0s 1 normal none running ${FooterKeyframe} ;
transform: translateY(0px);
  transition: transform 0.5s ease-in-out 0s;
  left:0px;
  right:0px;
  bottom:0px;
  z-index: 100;
  
${props => {

    if (props.fadeIn === true) {


      return `transform: translateY(100%);`

    }


  }}



`
