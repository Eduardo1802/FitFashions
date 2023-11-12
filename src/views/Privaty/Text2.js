import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Text2 = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        mr: { xs: 1, sm: 10, md: 15 },
        ml: { xs: 1, sm: 10, md: 15 },
        p: 3,
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: "bolder", mt: 3 }}
      >
        Última actualización: 12/11/2023
      </Typography>
      <Typography variant="body1" component="p">
        Bienvenido a fitfashion. Nos preocupamos por tu privacidad y queremos
        que estés informado sobre cómo recopilamos, usamos y compartimos tus
        datos personales. Esta Política de Privacidad describe nuestras
        prácticas en relación con la información que recopilamos a través de
        nuestro sitio web y servicios relacionados. Al utilizar nuestro sitio
        web, aceptas las prácticas descritas en esta Política de Privacidad.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          Información que Recopilamos
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          1. Información Personal
        </Typography>
        <Typography variant="body1" component="p">
          Recopilamos información personal que nos proporcionas cuando creas una
          cuenta, realizas una compra o nos contactas. Esta información puede
          incluir tu nombre, dirección de correo electrónico, dirección postal,
          número de teléfono y detalles de pago.
        </Typography>

        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          2. Información de Navegación
        </Typography>
        <Typography variant="body1" component="p">
          Recopilamos automáticamente información sobre cómo interactúas con
          nuestro sitio web, como tu dirección IP, tipo de navegador, páginas
          visitadas y tiempo de permanencia. Utilizamos cookies y tecnologías
          similares para recopilar esta información y mejorar tu experiencia en
          nuestro sitio.
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          Uso de la Información
        </Typography>
        <Typography variant="body1" component="p">
          Utilizamos la información recopilada para:
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Procesar y completar tus pedidos.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Personalizar y mejorar tu experiencia en nuestro sitio.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Enviarte información sobre ofertas, promociones y nuevos productos.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Responder a tus preguntas y proporcionarte asistencia al cliente.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Cumplir con requisitos legales y regulatorios.
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          Compartir Información
        </Typography>
        <Typography variant="body1" component="p">
          No compartimos tu información personal con terceros sin tu
          consentimiento, excepto en las siguientes situaciones:
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Proveedores de servicios:
        </Typography>
        <Typography variant="body1" component="p">
          Compartimos información con terceros que brindan servicios en nuestro
          nombre, como procesadores de pagos y servicios de envío.
        </Typography>
        <Typography variant="body1" component="p">
          <ArrowRightIcon />
          Cumplimiento legal:
        </Typography>
        <Typography variant="body1" component="p">
          Divulgamos información cuando creemos de buena fe que la divulgación
          es necesaria para cumplir con la ley, proteger nuestros derechos
          legales o responder a solicitudes gubernamentales
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          Seguridad de la Información
        </Typography>
        <Typography variant="body1" component="p">
          Tomamos medidas para proteger la seguridad de tu información personal.
          Sin embargo, ninguna transmisión de datos por internet o
          almacenamiento electrónico es completamente segura. Te instamos a
          tomar precauciones para proteger tu información personal, como
          mantener segura tu contraseña.
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          Tus Derechos
        </Typography>
        <Typography variant="body1" component="p">
          Tienes el derecho de acceder, corregir y eliminar tu información
          personal. También puedes optar por no recibir comunicaciones de
          marketing directo. Para ejercer estos derechos, ponte en contacto con
          nosotros a través de 20200744@uthh.edu.mx.
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontWeight: "bolder", mt: 3 }}
        >
          Cambios en la Política de Privacidad
        </Typography>
        <Typography variant="body1" component="p">
          Nos reservamos el derecho de modificar esta Política de Privacidad en
          cualquier momento. Cualquier cambio será efectivo inmediatamente
          después de la publicación en nuestro sitio web. Te recomendamos que
          revises periódicamente esta página para estar informado sobre nuestras
          prácticas de privacidad.
        </Typography>
        <Typography variant="body1" component="p">
          Si tienes alguna pregunta sobre esta Política de Privacidad, no dudes
          en contactarnos a través de 20200744@uthh.edu.mx.
        </Typography>
        <Typography variant="body1" component="p">
          Gracias por confiar en FitFashion.
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" component="p">
          FitFahion
        </Typography>
        <Typography variant="body1" component="p">
          Correo electrónico para la atención del público en general:
          20200744@uthh.edu.mx
        </Typography>
        <Typography variant="body1" component="p">
          Número telefónico para la atención del público en general: 7717292053
        </Typography>
        <Typography variant="body1" component="p">
          Última actualización: 12/11/2023
        </Typography>
      </Box>
    </Paper>
  );
};

export default Text2;
