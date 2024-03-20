import { useState } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';

import { Input } from '@components/Input';
import { Header } from '@components/Header';
import { Filter } from '@components/Filter';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';

export function Players() {
  const [team, setTeam] = useState('Time A');

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

      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>
    </S.Container>
  );
}
