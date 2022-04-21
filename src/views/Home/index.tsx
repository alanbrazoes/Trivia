import React, { useContext } from 'react'
import { StyleSheet, StatusBar, SafeAreaView, Text } from 'react-native'
import { ContextPlayer } from '../../context/player'
import { Container, Input, ButtonGo, TextBtn, Label } from './style'
import { useForm, Controller } from 'react-hook-form'
import { IPlayer } from '../../context/types'
import { INavigation } from '../../types'

const Home: React.FC<INavigation> = ({ navigation }) => {
  const INITIAL_VALUE: IPlayer = { name: '', score: 0 }
  console.log(StatusBar.currentHeight)

  const { setPlayer } = useContext(ContextPlayer)
  const { control, handleSubmit, formState: { errors }, reset } = useForm<IPlayer>({
    defaultValues: INITIAL_VALUE
  })

  const onSubmit = (data: IPlayer) => {
    setPlayer(data)
    navigation.navigate('Game')
    reset(INITIAL_VALUE, { keepDefaultValues: true })
  }

  return (
    <SafeAreaView style={style.container}>
      <Container>
        <Label>User</Label>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Ex: Alan"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <ButtonGo
          onPress={handleSubmit(onSubmit)}
        >
          <TextBtn>Go</TextBtn>
        </ButtonGo>
        {errors.name && <Text style={{ color: 'red' }}>Name is required</Text>}
      </Container>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
