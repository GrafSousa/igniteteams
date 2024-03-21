import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { groupCreate } from '@storage/group/groupCreate';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      console.log(error);
    }
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
