import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Fade, Grow, Typography } from "@mui/material";

const TimelineUsSmall = ({ imgAus, imgMural }) => {
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 100);
  }, []);
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {/* QUIENES SOMOS */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box
            sx={{
              py: 3,
              display: "flex",
              justifyContent: "center",
              flexFlow: "column wrap",
            }}
          >
            <Typography variant="h4" color="text.primary">
              ¿Quienes somos?
            </Typography>
            <Grow
              in={componentLoaded}
              style={{ transformOrigin: "0 0 0" }}
              {...(componentLoaded ? { timeout: 500 } : {})}
            >
              <Typography variant="subtitle1" color="text.secondary">
                Nosotros somos una empresa con el objetivo de ofrecer a nuestros
                clientes una experiencia única en el mundo del deporte. En
                FirFashion, no solo vendemos ropa deportiva y equipo de alta
                calidad, sino que también compartimos la pasión por un estilo de
                vida activo y saludable.
              </Typography>
            </Grow>
            <Fade in={componentLoaded}>
              <Box
                component="img"
                src={imgAus}
                alt="img-casa-de-la-cultura"
                preload="true"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  mt: 2,
                }}
              />
            </Fade>
          </Box>
        </TimelineContent>
      </TimelineItem>
      {/* MISIÓN Y VISIÓN */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box
            sx={{
              py: 3,
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
              productos innovadores y contribuyendo al bienestar de la sociedad
              a través del deporte, inspirando a las personas a superar sus
              límites y alcanzar sus metas deportivas.
            </Typography>
            <Typography variant="h4" color="text.primary">
              Misión:
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ofrecemos productos deportivos de alta calidad y un servicio
              excepcional para inspirar y apoyar un estilo de vida activo y
              saludable en personas de todas las edades y niveles de habilidad.
            </Typography>
            <Box
              component="img"
              src={imgMural}
              alt="img-mural"
              preload="true"
              sx={{ width: "100%", height: "100%", objectFit: "cover", mt: 2 }}
            />
          </Box>
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

export default TimelineUsSmall;
