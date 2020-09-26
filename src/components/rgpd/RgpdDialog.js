import React from 'react'
import { useLocalStorage } from 'Src/hooks'
import styles from './RgpdDialog.module.scss'

const RgpdDialog = () => {
  const [ hasAgreeRGPD, setHasAgreeRGPD ] = useLocalStorage('hasAgreeRGPD_HP', false)

  return (
    !hasAgreeRGPD && (
      <div className={ styles.rgpdDialog }>
        <div>
          En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies pour vous proposer une
          meilleure expérience utilisateur.
        </div>
        <button
          className="cta"
          onClick={ () => {
            setHasAgreeRGPD(true)
          } }
        >
          OK
        </button>
      </div>
    )
  )
}

export default RgpdDialog
