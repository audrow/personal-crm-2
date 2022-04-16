import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export type CopyrightProps = {
  holderName: string
  holderUrl?: string
  year?: number
}

export default function Copyright(props: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      {props.holderUrl ? (
        <Link color="inherit" href={props.holderUrl}>
          {props.holderName}
        </Link>
      ) : (
        props.holderName
      )}{' '}
      {props.year ? props.year : new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
