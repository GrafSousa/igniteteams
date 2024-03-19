import * as S from './styles';

import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />

    </S.Container>
  );
}
