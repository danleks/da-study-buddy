import styled from 'styled-components';

export const StudentDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;

export const StudentBasicInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StudentCoursesInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  width: max-content;
  padding-left: 40px;
`;

export const StudentMainCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudentAverageGradesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StudentSingleSubcourseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 250px;
`;

export const StudentAllSubcoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const CourseTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const SubTitle = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const CourseSubtitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 400;
`;
