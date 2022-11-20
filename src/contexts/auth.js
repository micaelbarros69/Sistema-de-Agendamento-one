<<<<<<< HEAD
import React, { createContext, useState } from "react";
import { set } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigation = useNavigation();
  function singIn(email, password, nomeField) {
    if (email !== "" && password !== "") {
      setUser({
        email: email,
        status: "ATIVO",
      });
      //   navigation.navigate("Home")
    }
  }

  return (
    <AuthContext.Provider value={{ nome: "micael barros", singIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

//   function singIn(email, password, nomeField) {
//     if (email !== "" && password !== "") {
//       setUser({
//         email: email,
//         status: "ATIVO",
//       });
//       //   navigation.navigate("Home")
//     }
//   }
=======
import React, { createContext, useState } from "react";
import { set } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigation = useNavigation();
  function singIn(email, password, nomeField) {
    if (email !== "" && password !== "") {
      setUser({
        email: email,
        status: "ATIVO",
      });
      //   navigation.navigate("Home")
    }
  }

  return (
    <AuthContext.Provider value={{ nome: "micael barros", singIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

//   function singIn(email, password, nomeField) {
//     if (email !== "" && password !== "") {
//       setUser({
//         email: email,
//         status: "ATIVO",
//       });
//       //   navigation.navigate("Home")
//     }
//   }
>>>>>>> 8a76f3a5ef12b7d4aef87e65493cbd344267f96b
