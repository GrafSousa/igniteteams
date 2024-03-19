import * as S from './styles';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

export function NewGroup() {
  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title='Nova Turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Button title='Criar' style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
}
