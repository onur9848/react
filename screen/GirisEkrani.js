import { Text, View } from 'react-native'

function GirisEkrani() {
    return (
        <View style={styles.viewStyle}>
            <Text>Giris Ekrani</Text>
        </View>

    )
}

export default GirisEkrani;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})