import React from 'react'
import { ThemeContextProvider } from './src/theme-context'
import 'firebase/analytics'
import './styles/global.css'

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Lancei mais uma versão do site, deseja atualizar?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const registerServiceWorker = () => true
