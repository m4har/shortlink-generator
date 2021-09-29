import styled from "styled-components";

const container = styled.div`
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
  }

  .items {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .center {
    align-items: center;
    justify-content: center;
  }
  .line {
    display: flex;
  }

  .pager {
    border: 1px solid;
    height: 50px;
  }

  .input {
    height: 25px;
    width: 250px;
  }

  .containerButton {
    display: flex;
    margin: 5px 0px;
  }
  .spreadLink {
    display: inline-block;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    max-width: 300px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .line {
      visibility: hidden;
    }
  }
`;
export default container;
