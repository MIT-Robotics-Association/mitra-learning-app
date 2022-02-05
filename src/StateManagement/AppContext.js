import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getAllDocumentsFromACollection,
  getDocument,
} from "../firebase/database";

export const AppContext = createContext();

const auth = getAuth();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [courseModules, setCourseModules] = useState({});
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, async (authUser) => {
    if (authUser) {
      const userFromFirestore = await getDocument("users", authUser.uid);
      setUser(userFromFirestore);
      // TODO fetch the course modules saved as course modules in every document(course) saved in courses collection
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const coursesFromDB = await getAllDocumentsFromACollection(
        "courses",
        "date",
        "desc"
      );
      setCourses(coursesFromDB);
      setLoading(false);
    };
    getCourses();
  }, []);

  const value = { user, courses, courseModules, loading };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};