import styled from 'styled-components/native';
// import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Form as UnformForm } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px 30px 120px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Form = styled(UnformForm)`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
  align-self: flex-start;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 93px;
  align-self: center;
`;
