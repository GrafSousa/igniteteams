import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  function handleNew() {
    navigation.navigate('players', { group });
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          title='Nova Turma'
          subtitle='crie a turma para adicionar as pessoas'
        />

        <Input placeholder='Nome da turma' onChangeText={setGroup} />

        <Button title='Criar' onPress={handleNew} style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
}
