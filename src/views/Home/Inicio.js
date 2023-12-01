import React, { useEffect } from "react";
import ProductHero from "./ProductHero";
import ProductValues from "./ProductValues";
import ProductCategories from "./ProductCategories";
import ProductHowItWorks from "./ProductHowItWorks";
import ProductCTA from "./ProductCTA";
import ProductSmokingHero from "./ProductSmokingHero";
import { app } from "../../config/firebaseConnection";

export const Inicio = () => {
  const obtenerInfo = async () => {
    try {
      const productoSnapshot = await app.firestore().collection("productos").get();
      const productoData = productoSnapshot.docs.map((doc) => doc.data());
      guardarDatosLocalmente(productoData);
    } catch (error) {
      console.error("Error al obtener información:", error);
    }
  };

  const guardarDatosLocalmente = async (productos) => {
    try {
      const existingData = JSON.parse(localStorage.getItem('productos')) || [];
      if (existingData.length === 0) {
        localStorage.setItem('productos', JSON.stringify(productos));
        console.log("Datos guardados localmente.");
      } else {
        console.log("Los datos ya existen en el almacenamiento local.");
      }
    } catch (error) {
      console.error("Error al guardar datos localmente:", error);
    }
  };

  // const eliminarDatosLocalmente = async () => {
  //   try {
  //     localStorage.removeItem('productos');
  //     console.log("Datos eliminados del almacenamiento local.");
  //   } catch (error) {
  //     console.error("Error al eliminar datos localmente:", error);
  //   }
  // }
  
  useEffect(() => {
    obtenerInfo();
  }, []);

  return (
    <>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </>
  );
};
