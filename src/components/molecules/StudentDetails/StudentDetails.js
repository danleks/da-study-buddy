import Average from 'components/atoms/Average/Average';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import {
  StudentDetailsWrapper,
  StudentBasicInfoWrapper,
  StudentCoursesInfoWrapper,
  StudentMainCourseWrapper,
  StudentAverageGradesWrapper,
  StudentAllSubcoursesWrapper,
  StudentSingleSubcourseWrapper,
  SubTitle,
  CourseTitle,
  CourseSubtitle,
} from './StudentDetails.styles';

const StudentDetails = ({ student }) => {
  return (
    <StudentDetailsWrapper>
      <StudentBasicInfoWrapper>
        <Average isBig average={student.average}>
          {student.average}
        </Average>
        <Title>{student.name}</Title>
      </StudentBasicInfoWrapper>
      <StudentCoursesInfoWrapper>
        <StudentMainCourseWrapper>
          <SubTitle>Course</SubTitle>
          <CourseTitle>{student.course[0].title}</CourseTitle>
        </StudentMainCourseWrapper>
        <StudentAverageGradesWrapper>
          <SubTitle>Average grades</SubTitle>
          <StudentAllSubcoursesWrapper>
            {student.course[0].subcourses.map((subcourse) => {
              return (
                <StudentSingleSubcourseWrapper>
                  <CourseSubtitle>{subcourse.title}</CourseSubtitle>
                  <Average average={subcourse.grade}>{subcourse.grade}</Average>
                </StudentSingleSubcourseWrapper>
              );
            })}
          </StudentAllSubcoursesWrapper>
        </StudentAverageGradesWrapper>
      </StudentCoursesInfoWrapper>
    </StudentDetailsWrapper>
  );
};

export default StudentDetails;
