import styled from '@emotion/styled';

export const StatSection = styled.section`
  width: 400px;
  margin: 50px auto;
  padding: 5px;
  box-shadow: 0px 0px 6px 3px rgb(47 92 73 / 75%);
  border-radius: 10px;
`;
export const StatTitle = styled.h2`
  justify-content: center;
  display: flex;
  text-transform: uppercase;
  font-weight: 700;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 5px;
`;
export const StatItem = styled.li`
  border: 1px solid green;
  width: 100%;
  border-radius: 20px;
  background-color: ${() => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }};
`;
export const StatLabel = styled.span`
  display: block;
  text-align: center;
  font-weight: 600;
`;
export const StatPercentage = styled.span`
  display: block;
  font-weight: 700;
  text-align: center;
`;
