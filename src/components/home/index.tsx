import styled from 'styled-components';
import banner from '@/assets/images/background/1.jpg';

const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
`;

const Home = () => {
  return <ContainerWrapper />;
};

export default Home;
