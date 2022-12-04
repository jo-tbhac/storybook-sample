import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'
import { purple } from '@mui/material/colors'

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700]
  }
}))

export type CustomizedButtonProps = ButtonProps

export const CustomizedButton: FC<ButtonProps> = (props) => {
  return <StyledButton {...props}></StyledButton>
}
