import styled from 'styled-components';
import banner from '@/assets/images/training/pwl.jpg';

const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${banner});
  background-size: cover;
  background-position: center center;

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

const TrainingPowerlifting = () => {
  return (
    <ContainerWrapper>
      <div className="content">
        <p>Powerlifting là bộ môn thể thao thiên về sức mạnh dựa trên các bài tập: Squat, Deadlift, Bench Press.</p>
        <p>Powerlifting sẽ giúp bạn khám phá ra giới hạn tối đa của bản thân lẫn về sức mạnh và hình thể.</p>
      </div>
    </ContainerWrapper>
  );
};

export default TrainingPowerlifting;
