import { View,Text } from "react-native";

function KayitEkrani(){


    // işte objeleri ayarladığımız yer GirisEkrani.js de aynı şekilde.
    return(

        <View style={styles.viewStyle}>
            <Text>Kayit Ekrani</Text>
        </View>
    );
}

//önemli !! bu olmadan App.js  içinde kullanamazsın.
export default KayitEkrani;

//Bildiğmiz Stil ayarlama yeri
const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})