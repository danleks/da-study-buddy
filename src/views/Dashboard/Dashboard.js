import React, { useEffect, useState } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);
  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}{' '}
          </Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
