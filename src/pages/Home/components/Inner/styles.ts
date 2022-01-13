import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Information = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled.span`
  color: #000000;
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #4f4f4f;
  font-size: 12px;
`;
