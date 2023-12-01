import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { useAuth } from "../../components/context/AuthContext";
import { db } from "../../config/firebase";
import { LoaderAnimation } from "./LoaderAnimation";

export const ProtecteRoutAdmi = ({ children }) => {
  const { user, loading } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Obtiene los datos del usuario desde Firestore
    const consultaDato = async () => {
      const referencia = doc(db, `usuarios/${user.uid}`); // Cambia el ID estático por user.uid
      // console.log(user.uid)
      const docSnap = await getDoc(referencia);
      // console.log(docSnap)
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No se encontró el documento");
      }
    };

    if (user) {
      consultaDato();
    }
  }, [user]);

  if (loading) {
    return <LoaderAnimation />;
  }

  if (!user) {
    return <Navigate to="/acceso" />;
  }else{
    return <Navigate to="/administrador" />;
  } 
  // else if (data === null) {
  //   return <LoaderAnimation/>;
  // } else if (data.tipo_Usuario === "administrador") {
  //   return <Navigate to="/administrador" />;
  // } else {
  //   return <>{children}</>;
  // }
};
