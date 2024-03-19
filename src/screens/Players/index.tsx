import * as S from './styles';

import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='Adicione a galera e separe os times'
      />

      <S.Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />

        <ButtonIcon icon='add' type='secondary' />
      </S.Form>
    </S.Container>
  );
}
