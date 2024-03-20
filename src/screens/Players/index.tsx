import { useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import * as S from './styles';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Filter } from '@components/Filter';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { PlayerCard } from '@components/PlayerCard';

type RouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const [players, setPlayers] = useState([
    'Gustavo',
    'João Paulo',
    'Gustavo',
    'João Paulo',
    'Gustavo',
    'João Paulo',
    'Gustavo',
    'João Paulo',
    'Gustavo',
    'João Paulo',
    'Gustavo',
    'João Paulo',
  ]);
  const [team, setTeam] = useState('Time A');

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle='Adicione a galera e separe os times' />

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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há pessoas nesse time' />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title='Remover Turma' type='secondary' />
    </S.Container>
  );
}
