import styled from 'styled-components';
import banner from '@/assets/images/equipments/1.jpg';

const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-position: center bottom;
  color: red;

  @media (max-width: 768px) {
    background-position: left bottom;
  }
`;

const Home = () => {
  return <ContainerWrapper />;
};

export default Home;
