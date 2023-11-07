import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import { Card, CardMedia, Box, Typography, Fade, Grow } from "@mui/material";

const TimelineUsLarge = ({ imgAus, imgMural }) => {
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 100);
  }, []);

  return (
    <Timeline position="alternate">
      {/* QUIENES SOMOS */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <CardMedia
                component="img"
                height={"100%"}
                image={imgAus}
                alt="img-casa-de-la-cultura"
                preload="true"
              />
            </Card>
          </Fade>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Grow
            in={componentLoaded}
            style={{ transformOrigin: "0 0 0" }}
            {...(componentLoaded ? { timeout: 500 } : {})}
          >
            <Box
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
              }}
            >
              <Typography variant="h4" color="text.primary">
                ¿Quienes somos?
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ marginBottom: 2 }}
              >
                Nosotros somos una empresa con el objetivo de ofrecer a nuestros
                clientes una experiencia única en el mundo del deporte. En
                FirFashion, no solo vendemos ropa deportiva y equipo de alta
                calidad, sino que también compartimos la pasión por un estilo de
                vida activo y saludable.
              </Typography>
            </Box>
          </Grow>
        </TimelineContent>
      </TimelineItem>
      {/* MISIÓN Y VISIÓN */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              <CardMedia
                component="img"
                height={"100%"}
                image={imgMural}
                alt="img-mural"
                preload="true"
              />
            </Card>
          </Fade>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Grow
            in={componentLoaded}
            style={{ transformOrigin: "0 0 0" }}
            {...(componentLoaded ? { timeout: 500 } : {})}
          >
            <Box
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
              }}
            >
              <Typography variant="h4" color="text.primary">
                Visión:
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ marginBottom: 1 }}
              >
                Ser la tienda deportiva líder en el mundo, proporcionando
                productos innovadores y contribuyendo al bienestar de la
                sociedad a través del deporte, inspirando a las personas a
                superar sus límites y alcanzar sus metas deportivas.
              </Typography>
              <Typography variant="h4" color="text.primary">
                Misión:
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Ofrecemos productos deportivos de alta calidad y un servicio
                excepcional para inspirar y apoyar un estilo de vida activo y
                saludable en personas de todas las edades y niveles de
                habilidad.
              </Typography>
            </Box>
          </Grow>
        </TimelineContent>
      </TimelineItem>
      {/* BOLA EXTRA */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineUsLarge;
