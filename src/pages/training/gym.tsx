import styled from 'styled-components';
import banner from '@/assets/images/training/gym.jpg';

const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${banner});
  background-size: cover;
  background-position: center bottom;

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000000d4;
    width: calc(100% - 80px);
    padding: 20px 40px;
    font-size: 22px;

    p {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 768px) {
    background-position: left bottom;

    .content {
      padding: 10px 25px;
      width: calc(100% - 50px);
      font-size: 16px;
    }
  }
`;

const TrainingGym = () => {
  return (
    <ContainerWrapper>
      <div className="content">
        <p>Luyện tập kháng lực là tổng hợp các cách thức tập luyện giúp điều chỉnh vóc dáng, phát triển cơ bắp,...</p>
        <p>Đây cũng là lựa chọn cải thiện vẻ đẹp hình thể và nâng cao sức khỏe phổ biến nhất thế giới.</p>
      </div>
    </ContainerWrapper>
  );
};

export default TrainingGym;
