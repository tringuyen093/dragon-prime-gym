import styled from 'styled-components';
import banner from '@/assets/images/training/yoga.jpg';

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

const TrainingYoga = () => {
  return (
    <ContainerWrapper>
      <div className="content">
        <p>Yoga là một phương pháp luyện tập lâu đời, có nguồn góc từ Ấn Độ từ 5.000 năm trước.</p>
        <p>Người ta thường cho rằng tập Yoga là tập những động tác, tư thế uốn éo kỳ lạ.</p>
        <p>Yoga bao gồm các bài tập giúp cải thiện thể chất, tinh thần, tình cảm và cả tâm linh của người tập.</p>
      </div>
    </ContainerWrapper>
  );
};

export default TrainingYoga;
