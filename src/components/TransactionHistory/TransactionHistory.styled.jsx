import styled from '@emotion/styled';
export const TransactionData = styled.table`
  width: 800px;
  margin: 50px auto;
  padding: 5px;
  text-align: center;
  box-shadow: 0px 0px 6px 3px rgb(47 92 73 / 75%);
  border-radius: 10px;
  cursor: pointer;

  & thead {
    background-color: #719e6d;
  }

  & tr:hover {
    background-color: yellow;
    transition: background-color 500ms linear;
  }

  & th,
  & td {
    padding: 10px 15px;
    border: 1px solid #a39c47;
  }
`;
