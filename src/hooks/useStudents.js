import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({ id = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios('/groups');
        setGroups(data.groups);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const { data } = await axios(`/students/${id}`);
        setStudents(data.students);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    groups,
    students,
    findStudents,
  };
};
