import { CardMedia } from '@mui/material'
import imgAcceso from "./imgAcceso.webp"

export const ImgAcceso = () => {
  return (
    <CardMedia
        component="img"
        image={imgAcceso}
        alt="img-mural"
        sx={{height: "70vh",mt:-1}}
    />
  )
}
