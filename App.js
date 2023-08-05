import { StyleSheet, } from 'react-native';
//Bunlar eklenmeli yoksa App.js içinde kullanamazsın.
import KayitEkrani from './screen/KayitEkrani';
import GirisEkrani from './screen/GirisEkrani';


export default function App() {

  //şimdi burada sadece görüntülemek isteğin ekrani içeriye yaz.
  // Eğer silmek istemiyorum ama çalışmasın dersen yorum satırı yapabilirsin.
  //  {/* <KayitEkrani/> */} Bu şekilde yorum satırı yapabilirsin.
  // yorum satırı yapmak için kısa yol var ama o tuş sende varmı bilmiyorum.
  // kullanmak istemediğin görüntüyü seçerek "crtl + /" yaparsan yorum satırı olur otomatik.
  // '/' tuşu Num Lock un orada bulunmaktadır.
  //bir trick daha shift+Enter basarsan cümlenin neresinde olduğun farketmeksizin bir alt satıra geçer.  
  return (
    <View>

      {/* <KayitEkrani/> */}

      <GirisEkrani />

    </View>

  );
}

const styles = StyleSheet.create({


});
