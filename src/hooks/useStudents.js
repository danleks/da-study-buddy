import axios from 'axios';
import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const { data } = await axios('/groups');
      return data.groups;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudentById = useCallback(async (id) => {
    try {
      const { data } = await axios(`/students/${id}`);
      return data.student;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (id) => {
    if (!id) return;
    try {
      const { data } = await axios(`/groups/${id}`);
      return data.students;
    } catch (err) {
      console.log(err);
    }
  }, []);

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
    getGroups,
    getStudentsByGroup,
    findStudents,
    getStudentById,
  };
};
