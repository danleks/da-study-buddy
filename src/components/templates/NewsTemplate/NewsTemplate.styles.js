import styled from 'styled-components';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  grid-column: 3 / 3;
  grid-row: 1 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 50px;
  overflow-y: scroll;
`;

export const NewsTemplateHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
  line-height: 1;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 1.5;
    font-weight: 400;
  }
  img {
    max-width: 200px;
    object-fit: cover;
    margin-left: 25px;
  }
`;
