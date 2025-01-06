import styled from 'styled-components';
import banner from '@/assets/images/aboutUs/1.jpg';
import icLocation from '@/assets/icons/ic-location.svg';
import icPhone from '@/assets/icons/ic-phone.svg';
import icMail from '@/assets/icons/ic-mail.svg';

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
    font-family: 'Montserrat SemiBold';

    p {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .content-item {
      display: flex;
      align-items: center;

      img {
        margin-right: 20px;
        width: 25px;
        height: 25px;
      }
    }

    .content-fake {
      padding: 12.5px; 
      margin-right: 20px;
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

const AboutUs = () => {
  return (
    <ContainerWrapper>
      <div className="content">
        <div className="content-item">
          <img src={icLocation} alt="Location" />
          <p>61 HÀ ĐẶC, District 12, HCM City</p>
        </div>
        <div className="content-item">
          <img src={icPhone} alt="Phone" />
          <p>0832 828 828</p>
        </div>
        <div className="content-item">
          <img src={icMail} alt="Mail" />
          <p>Dragonprimegym@gmail.com</p>
        </div>
        <div className="content-item">
          <div className="content-fake" />
          <p>Opening Hours: 5AM - 9PM</p>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default AboutUs;
