import styled from 'styled-components';

export const CarModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.colors.modarOverlayColor};
  &:hover {
    cursor: pointer;
  }
`;
export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  width: 542px;
  background-color: ${props => props.theme.colors.modalBgColor};
  border-radius: 10px;
  cursor: auto;
`;

export const CloseButton = styled.button`
  background: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  stroke: ${props => props.theme.colors.textColor};

  transition: stroke 300ms linear;

  &:hover {
    stroke: ${props => props.theme.colors.accentColor};
  }
`;

export const CarModalImg = styled.img`
  width: 100%;
  border-radius: 14px;
`;

export const CarModalTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CarModalTitle = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.34;
  margin-bottom: 8px;
`;

export const CarModalTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin-bottom: 14px;
`;

export const CarModalTag = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondTextColor};
  border-right: 1px solid;
  border-color: ${props => props.theme.colors.secondTextColor};
  padding: 0 6px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border: none;
    padding-right: 0;
  }
`;

export const CarModalDescr = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42857;
  margin-bottom: 24px;
`;

export const CarModalFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const ModalFeaturesTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const ModalFeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ModalFeaturesLi = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondTextColor};
  border-right: 1px solid;
  border-color: ${props => props.theme.colors.secondTextColor};
  padding: 0 6px;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }

  &:first-child {
    border-left: none;
    padding-left: 0;
  }
`;

export const RentalCondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const RentalCondTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const RentalCondList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-bottom: -8px;
  max-width: 400px;
`;

export const RentalCondLi = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 7px 14px;
  background-color: ${props => props.theme.colors.rentalCondLiBGColor};
  border-radius: 35px;
  margin-right: 8px;
  margin-bottom: 8px;
  /* flex-basis: calc(100% / 3 - 8px); */
  max-width: 175px;
`;

export const ModalBtn = styled.a`
  display: inline-block;
  border-radius: 12px;
  padding: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  min-width: 168px;
  color: ${props => props.theme.colors.buttonTextColor};
  background-color: ${props => props.theme.colors.buttonBgColor};
  transition: background-color 300ms linear;
  margin: 0;
  text-align: center;

  &:hover {
    background-color: ${props => props.theme.colors.accentColor};
  }
`;

export const ModalRentalPriceStyled = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.accentColor};
`;
