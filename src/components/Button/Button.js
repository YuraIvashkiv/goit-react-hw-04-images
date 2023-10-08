import { ButtonStyle } from './Button.styled';

export const Button = ({ onClick }) => {
  return <ButtonStyle onClick={onClick}>Load more</ButtonStyle>;
};
