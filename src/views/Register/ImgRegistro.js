import { CardMedia } from '@mui/material'
import imgAcceso from "./imgRegistro.webp"

export const ImgRegistro = () => {
  return (
    <CardMedia
        component="img"
        image={imgAcceso}
        alt="img-mural"
        sx={{height: "70vh",mt:-1}}
    />
  )
}
