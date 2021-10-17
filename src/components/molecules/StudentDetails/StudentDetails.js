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
          <CourseTitle>{student.course}</CourseTitle>
        </StudentMainCourseWrapper>
        <StudentAverageGradesWrapper>
          <SubTitle>Average grades</SubTitle>
          <StudentAllSubcoursesWrapper>
            {student.grades.map((grade) => {
              return (
                <StudentSingleSubcourseWrapper>
                  <CourseSubtitle>{grade.title}</CourseSubtitle>
                  <Average average={grade.average}>{grade.average}</Average>
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
