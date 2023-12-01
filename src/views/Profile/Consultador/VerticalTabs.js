import React, { useState } from "react";
import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";
import { HomeRounded } from "@mui/icons-material";
import { AdminInicio } from "./AdminInicio";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ /* border: "6px solid red", */ width: "100%" }}
    >
      {value === index && (
        <Box sx={{ p: 0, /* border: "6px solid blue", */ height: "100%" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const VerticalTabs = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [value, setValue] = useState(0);
  //   const [datos, setDatos] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        // bgcolor: "background.paper",
        display: "flex",
        height: "auto",
        /* border: "6px solid green", */ flexDirection: isSmallScreen
          ? "column"
          : "row",
      }}
    >
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        textColor="secondary"
        indicatorColor="secondary"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        value={value}
        onChange={handleChange}
        color="#eae8e9"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          /* border: "6px solid orange", */
          minWidth: "150px",
        }}
      >
        <Tab
          label="Inicio"
          icon={<HomeRounded />}
          iconPosition={isSmallScreen ? "start" : "top"}
          {...a11yProps(0)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AdminInicio />
      </TabPanel>
    </Box>
  );
};

export default VerticalTabs;
