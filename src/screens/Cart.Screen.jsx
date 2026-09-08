import { ScrollView, Text, View, Image } from 'react-native'

export default function cart() {
    return (
        <ScrollView>
            <Text>
                Meu carrinho
            </Text>

            <View>
                <Image source={{
                    uri: "https://www.amazon.com.br/LISU-Orqu%C3%ADdeas-artificiais-decora%C3%A7%C3%A3o-prateados/dp/B09M64YFC3"}}
                />

            </View>
        </ScrollView>
    );
}     

