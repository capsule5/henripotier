import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export function useMuiWidth() {
  const theme = useTheme()
  const keys = [ ...theme.breakpoints.keys ].reverse()
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key))
      return !output && matches ? key : output
    }, null) || 'xs'
  )
}

