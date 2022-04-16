import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export type CopyrightProps = {
  holderName: string
  holderUrl?: string
  year?: number
}

export default function Copyright({
  holderName,
  holderUrl,
  year,
}: CopyrightProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {holderUrl ? (
        <Link color="inherit" href={holderUrl}>
          {holderName}
        </Link>
      ) : (
        holderName
      )}{' '}
      {year ? year : new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
