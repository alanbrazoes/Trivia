import React, { useContext } from 'react'
import { Text } from 'react-native'
import { ContextPlayer } from '../../context/player'
import { Input, ButtonGo, TextBtn, ContainerKeyboard, Content } from './style'
import { useForm, Controller } from 'react-hook-form'
import { IPlayer } from '../../context/types'
import { INavigation } from '../../types'
import AreaView from '../../components/AreaView'
import theme from '../../style/theme'

const Home: React.FC<INavigation> = ({ navigation }) => {
  const INITIAL_VALUE: IPlayer = { name: '', score: 0 }

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
    <AreaView background={theme.colors.background.primary}>
      <ContainerKeyboard>
        <Content>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="User"
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
          <ButtonGo
            onPress={() => navigation.navigate('Rules')}
          >
            <TextBtn>Rules</TextBtn>
          </ButtonGo>
          {errors.name && <Text style={{ color: 'red' }}>Name is required</Text>}
        </Content>
      </ContainerKeyboard>
    </AreaView>
  )
}

export default Home
