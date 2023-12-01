import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../components/context/AuthContext";
import { db } from "../../config/firebase";
import { LoaderAnimation } from "./LoaderAnimation";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const consultaDato = async () => {
      if (user) {
        try {
          const referencia = doc(db, `usuarios/${user.uid}`);
          const docSnap = await getDoc(referencia);
  
          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.log("No se encontró el documento");
          }
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);
        }
        console.log(data)
      }
    };
  
    // No necesitas verificar 'user' aquí, ya que este efecto se ejecutará si 'user' cambia
    consultaDato();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (loading) {
    return <LoaderAnimation />;
  }

  if (!user) {
    return <Navigate to="/acceso" />;
  }else {
    return <Navigate to="/consultador" />
  }
  // else if (data.tipo_Usuario === "consultador") {
  //   return <Navigate to="/consultador" />;
  // } else {
  //   return <>{children}</>;
  // }
};
